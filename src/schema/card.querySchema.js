/**
 * Created by racoon on 2017/3/28.
 */
import React from 'react';
import {} from '../utils/'
// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema
const now = new Date();
module.exports = [
  {
    key: 'status',
    title: '卡片状态',
    dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{key: '1', value: '已激活'}, {key: '2', value: '已使用'}, {key: '0', value: '未使用'}],
    defaultValue: '0', // 这个defaultValue必须和options中的key是对应的
  },
  {
    key: 'type',
    columnName: 'cardType',
    title: '卡片类型',
    showType: 'search',
    fetching: false,
    placeholder: '请输入卡片类型'
  },
  // {
  //   key: 'type',
  //   title: '卡片类型',
  //   dataType: 'int',
  //   showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
  //   options: [{key: '1', value: '类型1'}, {key: '2', value: '类型2'}],
  //   defaultValue: '1', // 这个defaultValue必须和options中的key是对应的
  // },
  {
    key: 'keyword',  // 传递给后端的字段名
    title: '关键字',  // 前端显示的名称
    placeholder: '请输入关键字',  // 提示语, 可选

    // 数据类型, 前端会根据数据类型展示不同的输入框
    // 目前可用的dataType: int/float/varchar/datetime
    // 为啥我会把字符串定义为varchar而不是string呢...我也不知道, 懒得改了...
    dataType: 'varchar',

    // 显示类型, 一些可枚举的字段, 比如type, 可以被显示为单选框或下拉框
    // 默认显示类型是normal, 就是一个普通的输入框, 这时可以省略showType字段
    // 目前可用的showType: normal/select/radio/between/checkbox/multiSelect
    // between只能用于int/float/datetime, 会显示2个输入框, 用于范围查询
    showType: 'normal',

    // 有一点要注意, 就算showType是normal, 也不意味是等值查询, 只是说传递给后台的是单独的一个值
    // 至于后台用这个值做等值/大于/小于/like, 前端不关心
  },
  {
    key: 'agentId',
    columnName: 'agent',
    title: '代理商',
    showType: 'search',
    fetching: false,
    dataType: 'int',
    placeholder: '请输入代理商'
  },
  {
    key: 'applyDate',
    title: '申请时间',
    dataType: 'datetime',  // 日期范围查询, 日期范围查询占用的显示空间会很大, 注意排版
    showType: 'between',
    defaultValueBegin: '2017-01-01 00:00:01',  // 注意日期类型defaultValue的格式
    defaultValueEnd: now.getFullYear() + '-' + (now.getMonth()+1) +'-'+ now.getDate() + ' 23:59:59',
  },

];
