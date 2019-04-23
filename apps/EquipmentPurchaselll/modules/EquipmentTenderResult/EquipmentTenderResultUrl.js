/**
 * Created by ICOP on 2019-04-15.
 */
var RestUrl = require('../../actions/RestUrl');

var ADDR = RestUrl.ADDR;
var ROOT_PATH = RestUrl.ROOT_PATH;
var REF_SERVER_URL = RestUrl.REF_SERVER_URL;


var EquipmentTenderResultUrl = {
    REF_SERVER_URL:REF_SERVER_URL, // 参照路径
    INSERT: ADDR + ROOT_PATH + "/equipmentTenderResult/insert", // 新增保存
    UPDATE: ADDR + ROOT_PATH + "/equipmentTenderResult/update", // 修改保存
    DELETE: ADDR + ROOT_PATH + "/equipmentTenderResult/delete", // 删除
    QUERY_LIST: ADDR + ROOT_PATH + "/equipmentTenderResult/queryList", // 查询列表数据
    QUERY_DETAIL: ADDR + ROOT_PATH + "/equipmentTenderResult/queryDetail", // 查询一条数据明细
    SEARCH: ADDR + ROOT_PATH + "/equipmentTenderResult/search", // 搜索
    ATTACH: ADDR + ROOT_PATH + "/equipmentTenderResult/attach", // 附件管理
    EXPORT: ADDR + ROOT_PATH + "/equipmentTenderResult/export", // 导出
    PRINT: ADDR + ROOT_PATH + "/equipmentTenderResult/print", // 打印
    CARD_ROUTE:"/equipmentTenderResult/card", // 卡片页面路由
    CARD_GO_BACK:"/equipmentTenderResult", // 卡片界面返回列表的路由
    FRONTEND_ROOT_PATH: "icop-equipmentPurchaselll-frontend", // 前端工程名﻿
    EDITIMPORT:ADDR + ROOT_PATH +'/equipmentTenderResult/editImport'  //导入
}
module.exports = EquipmentTenderResultUrl;