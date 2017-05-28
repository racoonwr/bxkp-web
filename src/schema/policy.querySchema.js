/**
 * Created by racoon on 2017/3/28.
 */
import React from 'react';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema
const now = new Date();
module.exports = [
  {
    key: 'createTime',
    title: '录入时间',
    dataType: 'datetime',  // 日期范围查询, 日期范围查询占用的显示空间会很大, 注意排版
    showType: 'between',
    defaultValueBegin: '2017-01-01 00:00:01',  // 注意日期类型defaultValue的格式
    defaultValueEnd: now.getFullYear() + '-' + (now.getMonth()+1) +'-'+ now.getDate() + ' 23:59:59',
  },
  {
    key: 'exportStatus',
    title: '卡片状态',
    dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{key: '1', value: '已导出'}, {key: '0', value: '未导出'}],
    defaultValue: '0', // 这个defaultValue必须和options中的key是对应的
  },
];
