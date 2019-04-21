/**
 * Created by ICOP on 2019-04-15.
 */
var React = require('react');
var {YYClass} = require('yylib-ui');
var assign = require('lodash/assign');
var {YYCreatePage} =  require('yylib-business');
var {CardEventHandler} = require('yylib-cscec');
var EquipmentTenderApplicationUrl = require('./EquipmentTenderApplicationUrl');
var AuthToken = require('yylib-utils/AuthToken');  //引入AuthToken
var page;

//自定义页面渲染方法，解析招标方式为对应汉字
function tenderMethodHanhua(a) {
    if (a == "openTender") {
        return "公开招标";
    }
    else if (a == "InvitationTender") {
        return "邀请招标";
    }
    else if (a == "negotiation") {
        return "竞争性谈判"
    }
    else {
        return null;
    }
}

//页面初始化
var EventHandler = {




    "cardPage": {
        onViewWillMount: function (options) {
            page=this;
            CardEventHandler.pageLoading(this);
        }
        , onViewDidMount: function (options) {
            CardEventHandler.init(this, EquipmentTenderApplicationUrl);

            var form = this.findUI('baseForm');
            let id = form.api.getFieldValue("id");
                //applicationNumber = form.api.getFieldValue("billCode");

            var params = this.getRouteQuery();
            if (params && params.id) {
            } else {
                // 新增时,单位信息赋值
                var context = AuthToken.getContext();//
                form1.api.setFieldsValue({
                    'companyId': context.companyId,
                    'companyName': {'id': context.companyId, 'name': context.companyName},
                    'responsibilityUnit': context.companyName,
                     'applicationNumber':form1.api.getFieldValue("billCode"),
                });
            }
        }
        , onViewWillUpdate: function (options) {
            // debugger;

        }
        , onViewDidUpdate: function (options) {


        }
    }
};

var EquipmentTenderApplicationCardPage = YYClass.create({
    render: function () {
        return <YYCreatePage {...this.props} appCode="A002059" pageCode="P011092"
                                             uiEvent={assign({},CardEventHandler.API,EventHandler)} 
                                       />
    }
});

module.exports = EquipmentTenderApplicationCardPage;