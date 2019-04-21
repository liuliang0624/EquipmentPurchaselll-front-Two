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
            //页面渲染 界面设计器 下拉框record.tenderMethod返回的是界面设计器键值
           /* table.children.forEach(function (item) {
                switch (item.key) {
                    case 'tenderMethod':
                        item.render = function (text, record, index) {
                            if (record.tenderMethod == "openTender") {
                                return "公开招标";
                            } else if (record.tenderMethod == "InvitationTender") {

                                return "邀请招标";
                            } else if (record.tenderMethod == "negotiation") {
                                return "竞争性谈判";
                            }
                        };
                }
            });

            //页面渲染 枚举档案 record.tenderMethod返回的是档案编码
            table.children.forEach(function (item) {
                switch (item.key) {
                    case 'rentalMethod':
                        item.render = function (text, record, index) {
                            if (record.rentalMethod == "Method-02") {
                                return "外部租赁";
                            } else if (record.rentalMethod == "Method-01") {
                                return "内部租赁";
                            }
                        };
                }
            });*/


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