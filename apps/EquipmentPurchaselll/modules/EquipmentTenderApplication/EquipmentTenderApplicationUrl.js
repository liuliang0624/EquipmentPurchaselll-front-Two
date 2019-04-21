/**
 * Created by ICOP on 2019-04-15.
 */
var RestUrl = require('../../actions/RestUrl');

var ADDR = RestUrl.ADDR;
var ROOT_PATH = RestUrl.ROOT_PATH;

var EquipmentTenderApplicationUrl = {
    INSERT: ADDR + ROOT_PATH + "/equipmentTenderApplication/insert", // 新增保存
    UPDATE: ADDR + ROOT_PATH + "/equipmentTenderApplication/update", // 修改保存
    DELETE: ADDR + ROOT_PATH + "/equipmentTenderApplication/delete", // 删除
    QUERY_LIST: ADDR + ROOT_PATH + "/equipmentTenderApplication/queryList", // 查询列表数据
    QUERY_DETAIL: ADDR + ROOT_PATH + "/equipmentTenderApplication/queryDetail", // 查询一条数据明细
    SEARCH: ADDR + ROOT_PATH + "/equipmentTenderApplication/search", // 搜索
    ATTACH: ADDR + ROOT_PATH + "/equipmentTenderApplication/attach", // 附件管理
    EXPORT: ADDR + ROOT_PATH + "/equipmentTenderApplication/export", // 导出
    PRINT: ADDR + ROOT_PATH + "/equipmentTenderApplication/print", // 打印
    CARD_ROUTE:"/equipmentTenderApplication/card", // 卡片页面路由
    CARD_GO_BACK:"/equipmentTenderApplication", // 卡片界面返回列表的路由
    FRONTEND_ROOT_PATH: "icop-equipmentPurchaselll-frontend", // 前端工程名﻿
}
module.exports = EquipmentTenderApplicationUrl;