var React = require('react');

//子页面路由
var PageRoutes = React.createClass({
    render: function () {
        return this.props.children;
    }
});
module.exports = PageRoutes;