/**
 * Created by ICOP on 2019-04-15.
 */
var React = require('react');
var assign = require('lodash/assign');
var {YYClass} = require('yylib-ui');
var {YYCreatePage} =  require('yylib-business');
var EquipmentTenderApplicationUrl = require('./EquipmentTenderApplicationUrl');
var {ListEventHandler} = require('yylib-cscec');
var page;
//页面初始化
var EventHandler = {

    // 新增按钮
    "addBtn": {
        onClick: function () {
            this.routeTo('equipmentTenderApplication/card');
        }
    },




    "listPage": {
        onViewWillMount: function (options) {
            page=this;
            ListEventHandler.init(this, EquipmentTenderApplicationUrl);
            let table=page.findUI("CPListTable");
            //页面渲染 枚举档案 record.billState返回的是单据状态
            table.children.forEach(function (item) {
                switch (item.key) {
                    case 'billState':
                        item.render = function (text, record, index) {
                            if (record.billState == "0") {
                                return "自由态";
                            } else if (record.billState == "1") {
                                return "审批态";
                            }
                        };
                }
            });
        }
        , onViewDidMount: function (options) {
			ListEventHandler.initData(this);
        }
        , onViewWillUpdate: function (options) {

        }
        , onViewDidUpdate: function (options) {

        }
    }
}

var EquipmentTenderApplicationListPage = YYClass.create({
    render: function () {
        return <YYCreatePage {...this.props} appCode="A002059" pageCode="P011091"
                                             uiEvent={assign({},ListEventHandler.API,EventHandler)}
                                             uiParser={ListEventHandler.uiParser}/>
    }
});
module.exports = EquipmentTenderApplicationListPage;