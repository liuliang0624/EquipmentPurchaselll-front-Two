/**
 * Created by ICOP
 * 页面路由配置
 */
var React = require('react');
var {Route, IndexRoute, Redirect} = require('react-router');
var App = require('../pages/App');//主应用
var MenuPage = require('../pages/MenuPage');//主菜单
var PageRoutes = require('./PageRoutes');//同步页面路由
var lazy = require('yylib-utils/asyncLoader');//异步加载
var LazyPageRoutes = lazy(require('bundle?lazy!./PageRoutes'));//异步页面路由
var {PrintPreview} = require('yylib-cscec'); //  打印预览页面
var DocPage = require('../modules/docs/DocPage'); // 参考资料页面
var EquipmentTenderApplicationCardPage=require('../modules/EquipmentTenderApplication/EquipmentTenderApplicationCardPage');
var EquipmentTenderApplicationListPage=require('../modules/EquipmentTenderApplication/EquipmentTenderApplicationListPage');
var EquipmentTenderResultCardPage=require('../modules/EquipmentTenderResult/EquipmentTenderResultCardPage');
var EquipmentTenderResultListPage=require('../modules/EquipmentTenderResult/EquipmentTenderResultListPage');

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={MenuPage}/>
        <Route path="/portal" component={App}>
        </Route>
        <Route path="/print" component={PrintPreview}/>
        <Route path="/doc" component={PageRoutes}>
            <IndexRoute component={DocPage}/>
        </Route>

        <Route path="EquipmentTenderResult" component={PageRoutes}>
            <IndexRoute component={EquipmentTenderResultListPage}/>
            <Route path="card" component={EquipmentTenderResultCardPage}/>
        </Route>



        <Route path="EquipmentTenderApplication" component={PageRoutes}>
            <IndexRoute component={EquipmentTenderApplicationListPage}/>
            <Route path="card" component={EquipmentTenderApplicationCardPage}/>
        </Route>

    </Route>
);