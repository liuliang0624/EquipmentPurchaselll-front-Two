/**
 * Created by ICOP on 2019-04-15.
 */
var React = require('react');
var assign = require('lodash/assign');
var {YYClass} = require('yylib-ui');
var {YYCreatePage} =  require('yylib-business');
var EquipmentTenderResultUrl = require('./EquipmentTenderResultUrl');
var {ListEventHandler} = require('yylib-cscec');
var page;

//页面初始化
var EventHandler = {

    // 新增按钮
    "addBtn": {
        onClick: function () {
            this.routeTo('equipmentTenderResult/card');
        }
    },

    "listPage": {
        onViewWillMount: function (options) {
            page = this;
            ListEventHandler.init(this, EquipmentTenderResultUrl);
            let table = page.findUI('CPListTable');


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

var EquipmentTenderResultListPage = YYClass.create({
    render: function () {
        return <YYCreatePage {...this.props} appCode="A002059" pageCode="P011147"
                                             uiEvent={assign({},ListEventHandler.API,EventHandler)}
                                             uiParser={ListEventHandler.uiParser}/>
    }
});
module.exports = EquipmentTenderResultListPage;