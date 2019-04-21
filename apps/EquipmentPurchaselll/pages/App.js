/**
 * Created by ICOP
 * 应用统一入口
 */
var React = require('react');

var {YYApp} = require('yylib-ui');
require('./index.css');
var AuthToken = require("yylib-utils/AuthToken");
AuthToken.init({
    clear: false,//不清除历史上下文
    success: function () {
        console.log('获取上下文成功',AuthToken.getOrgaId());
    },
    error: function () {
        console.log('获取上下文失败');
    }
});
var App = React.createClass({
    render: function () {
        return (
            <YYApp>
                {this.props.children}
            </YYApp>
        );
    }
});

module.exports = App;