var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Router , hashHistory} = require('react-router');
var { syncHistoryWithStore } = require('react-router-redux');
//获取应用组件
var App = require('./apps/EquipmentPurchaselll/pages/App');
//获取路由信息
var routes = require('./apps/EquipmentPurchaselll/routes');
//初始化store
var configureStore = require('./apps/EquipmentPurchaselll/store/configureStore');
//创建store
var store = configureStore();
//同步路由与Redux的状态
var history = syncHistoryWithStore(hashHistory,store);
//增加页面权限控制
var {URL_WORKBENCH, URL_HOME_PORTAL} = require('./apps/EquipmentPurchaselll/actions/RestUrl');
var AuthToken = require("yylib-utils/AuthToken");
var portalOptions = {};
portalOptions.authentication = false;
portalOptions.url = URL_WORKBENCH;
portalOptions.success = function () {
    portalOptions.authentication = true;
    ReactDOM.render
    (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
        , document.getElementById('app_root')
    );
};
portalOptions.error = function () {
    window.setTimeout(function () {
        if (portalOptions.authentication == false) {
            window.location.href = URL_HOME_PORTAL;
        }
    }, 1000);
};
AuthToken.init(portalOptions);