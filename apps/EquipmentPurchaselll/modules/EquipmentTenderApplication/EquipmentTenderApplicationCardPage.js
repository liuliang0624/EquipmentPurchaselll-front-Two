/**
 * Created by ICOP on 2019-04-15.
 */
var React = require('react');
var {YYClass} = require('yylib-ui');
var assign = require('lodash/assign');
var {YYCreatePage} = require('yylib-business');
var {CardEventHandler} = require('yylib-cscec');
var EquipmentTenderApplicationUrl = require('./EquipmentTenderApplicationUrl');
var AuthToken = require('yylib-utils/AuthToken');  //引入AuthToken
var MyFunction=require('../pub/MyFunction');
var page;

//页面渲染方法
function flash() {
    let a=page.findUI("baseForm").api.getFieldValue("tenderMethod");//渲染当前招标方式
    let tenderMethod=MyFunction.tenderMethodHanhua(a);
    page.findUI('baseForm').api.setFieldsValue({'tenderMethod': tenderMethod == 0 ? '' : tenderMethod});

    let b=page.findUI("baseForm").api.getFieldValue("rentalMethod");//渲染租赁方式
    let rentalMethod=MyFunction.rentalMethodHanhua(b);
    page.findUI('baseForm').api.setFieldsValue({'rentalMethod': rentalMethod == 0 ? '' : rentalMethod});

}


//页面初始化
var EventHandler = {
//重写保存方法
    "saveBtn": {
        onClick: function onClick(btnKey) {
            flash();
            // 加loading状态判断是为了解决连续点击保存按钮导致数据重复保存的bug
            var cardPageKey = CardEventHandler.getCardPageKey(this);
            var isLoading = this.findUI('' + cardPageKey).loading;
            if (!isLoading) {
                CardEventHandler.saveData(this, { "btnKey": btnKey });
            }
        }
    },


    "cardPage": {
        onViewWillMount: function (options) {
            page = this;
            CardEventHandler.pageLoading(this);
        }
        , onViewDidMount: function (options) {
            CardEventHandler.init(this, EquipmentTenderApplicationUrl);
            var form = this.findUI('baseForm');
            let id = form.api.getFieldValue("id");
            var params = this.getRouteQuery();
            if (params && params.id) {
            } else {
                // 新增时,单位信息赋值
                var context = AuthToken.getContext();//
                form1.api.setFieldsValue({
                    'companyId': context.companyId,
                    'companyName': {'id': context.companyId, 'name': context.companyName},
                    'responsibilityUnit': context.companyName,
                    'applicationNumber': form1.api.getFieldValue("billCode"),
                });
            }
        }
        , onViewWillUpdate: function (options) {

        }
        , onViewDidUpdate: function (options) {

        }
    }
};

var EquipmentTenderApplicationCardPage = YYClass.create({
    render: function () {
        return <YYCreatePage {...this.props} appCode="A002059" pageCode="P011092"
                             uiEvent={assign({}, CardEventHandler.API, EventHandler)}
        />
    }
});

module.exports = EquipmentTenderApplicationCardPage;