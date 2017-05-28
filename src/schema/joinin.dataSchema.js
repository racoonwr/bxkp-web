/**
 * Created by racoon on 2017/3/28.
 */
import React from 'react';
import {AcceptJoininApply} from '../components/UpdateComponent';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

module.exports = [
  {
    key: 'id',  // 传递给后端的key
    title: 'ID',  // 前端显示的名字

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'int',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id
    primary: true,

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/file
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
    showInForm: false,
    // 扩展接口, 决定了这一列渲染成什么样子
    render: (text, record) => text,
  },
  {
    key: 'wxId',
    title: '微信OpenId',
    dataType: 'varchar',  // 对于普通的input框, 可以设置addonBefore/addonAfter
    defaultValue: '无',
    showInForm: false
  },
  {
    key: 'name',
    title: '加盟商姓名',
    dataType: 'varchar',
    defaultValue: '无'
  },
  {
    key: 'phoneNumber',
    title: '手机号',
    dataType: 'varchar',
    defaultValue: '无'
  },
  {
    key: 'applyType',
    title: '申请类型',
    dataType: 'int',
    showType: 'radio',
    options: [{key: '1', value: '类型1'}, {key: '2', value: '类型2'}, {key: '0', value: '未知类型'}],
    defaultValue: '0',
    showInForm: false
  },
  {
    key: 'status',
    title: '加盟商状态',
    dataType: 'int',
    showType: 'radio',
    options: [{key: '1', value: '正常'}, {key: '2', value: '解绑'}, {key: '0', value: '待审批'}],
    defaultValue: '0',
  },
  {
    key: 'createType',
    title: '创建类型',
    dataType: 'int',
    defaultValue: 1,
    showInForm: false,
    showInTable: false,
  },
  {
    key: 'createTime',
    title: '添加时间',
    dataType: 'datetime',
    showInForm: false
  },
  {
    key: 'bindTime',
    title: '绑定时间',
    // 对于日期类型要注意下, 在js端日期被表示为yyyy-MM-dd HH:mm:ss的字符串, 在java端日期被表示为java.util.Date对象
    // fastjson反序列化时可以自动识别
    // 序列化倒是不用特别配置, 看自己需求, fastjson会序列化为一个字符串, 前端原样展示
    dataType: 'datetime',
    showInForm: false
  },
  {
    key: 'unbindTime',
    title: '解绑时间',
    dataType: 'datetime',
    showInForm: false
  },
  {
    // 这个key是我预先定义好的, 注意不要冲突
    key: 'singleRecordActions',
    title: '操作',  // 列名
    width: 200,  // 宽度
    actions: [
      {
        name: '审批通过',
        type: 'component',
        component: AcceptJoininApply,  // 要渲染哪个组件, 这个组件会被渲染到modal中
      },
    ],
  },
];
