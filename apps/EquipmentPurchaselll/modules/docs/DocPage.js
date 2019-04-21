/**
 * Created by xg on 2017/7/17.
 * 培训资料汇总页面
 */
var React = require('react');
var {YYClass, YYModal, YYRow, YYCol, YYAccordions, YYAccordion} = require('yylib-ui');
var {YYCreatePage, AttachMgrModal} =  require('yylib-business');
var {YYTile, YYTiles, YYTilesGroup} = require('yylib-ui/tiles');
var {ATTACT_SERVER_URL} = require('../../actions/RestUrl');

var Links = {
    REACT_URL: "https://facebook.github.io/react/", // React官网
    ANT_DESIGN_URL: "https://ant.design/docs/spec/introduce", // Ant-Design官网
    REACT_ROUTER_URL: "http://www.uprogrammer.cn/react-router-cn/", // React-Router官网
    NODE_URL: "http://www.runoob.com/nodejs/nodejs-tutorial.html", // Node.js官网
    REDUX_URL: "http://cn.redux.js.org/index.html", // Redux官网
    META_DATA_URL: "https://dev.yonyouccs.com/icop-metadata-frontend/#/", // 元数据管理
    DEV_PORTAL_URL: "https://dev.yonyouccs.com/icop-workbench/#home",//开发环境门户
    PAGE_DESIGN_URL: "https://dev.yonyouccs.com/webui/apps/quickdev/#/", // 开发环境界面设计器
    COMPONENTS_URL: "https://dev.yonyouccs.com/webui/apps/demos/#/?_k=znsbo6", // 开发环境组件库
    SUPPORT_URL: "https://dev.yonyouccs.com/icop-support-frontend/#/", // 开发环境业务支撑组件
    DEV_DB_URL: "dev.yonyouccs.com", // 开发环境数据库地址
    DEV_DB_PORT: "3001", // 开发环境数据库端口
    DEV_DB_USER: "learn", // 开发环境数据库用户名
    DEV_DB_PASSWORD: "learnuser", // 开发环境数据库密码
    DEV_DB_INSTANCE: "icop-learn", // 开发环境数据库实例
    GIT_URL_FRONTEND: "https://git.yonyouccs.com/icop-support/icop-learn-frontend.git",
    GIT_URL_WEB: "https://git.yonyouccs.com/icop-support/icop-learn.git"
};

//页面初始化
var EventHandler = {

    // 返回按钮
    "goBackBtn": {
        onClick: function () {
            this.goBack();
        }
    },

    // 环境配置信息
    "envConfig": {
        onClick: function () {
            var _this = this;
            var envConfigModal = this.findUI("EnvConfigModal");
            if (envConfigModal) {
                envConfigModal.visible = true;
                envConfigModal.onOk = function () {
                    envConfigModal.visible = false;
                    _this.refresh();
                };
                envConfigModal.onCancel = function () {
                    envConfigModal.visible = false;
                    _this.refresh();
                }
            }
            this.refresh();
        }
    },

    // 开发手册按钮
    "devOpsBtn": {
        onClick: function () {
            var _this = this;
            var DevOpsComp = this.findUI('DevOps');
            if(DevOpsComp){
                DevOpsComp.visible = true;
                DevOpsComp.onCancel = function () {
                    DevOpsComp.visible = false
                    _this.refresh();
                }
            }
            this.refresh();
        }
    },

    "listPage": {
        onViewWillMount: function (options) {
        }
        , onViewDidMount: function (options) {
        }
        , onViewWillUpdate: function (options) {
        }
        , onViewDidUpdate: function (options) {
        }
    }
};

// 磁贴面板自定义组件
var MyTiles = React.createClass({

    /**
     * 磁贴点击事件
     * @param tileId 磁贴ID
     */
    onClick: function (tileId) {

    },

    render: function () {
        return (
            <div style={{width: '80%', marginLeft:120,marginTop:30}}>
                <YYTiles arrows={false} dots={false} onClick={this.onClick}>
                    <YYTilesGroup color="#CCCCCC">
                        <YYTile colSpan={2} id="0" title='React官网' isRoute={false} link={Links.REACT_URL}
                                color='#5b55a3' icon='bars'>
                        </YYTile>
                        <YYTile colSpan={2} id="1" title='Ant-Design官网' isRoute={false} link={Links.ANT_DESIGN_URL}
                                color='#2d89f1' icon='qrcode'>
                        </YYTile>
                        <YYTile colSpan={2} id="2" title='React-Router中文文档' isRoute={false}
                                color='#CC9900' link={Links.REACT_ROUTER_URL} icon='clock-circle'>
                        </YYTile>
                        <YYTile colSpan={2} id="3" title='Node.js教程' isRoute={false} link={Links.NODE_URL}
                                color='#008c24' icon='pie-chart'>
                        </YYTile>
                        <YYTile colSpan={2} id="4" title="Redux中文文档" isRoute={false} link={Links.REDUX_URL}
                                color='#ac1a3c' icon='cloud'>
                        </YYTile>
                        <YYTile colSpan={2} id="5" title='元数据管理' isRoute={false} link={Links.META_DATA_URL}
                                color='#999966' icon='area-chart'>
                        </YYTile>
                        <YYTile colSpan={4} id="6" title='开发环境门户' isRoute={false} link={Links.DEV_PORTAL_URL}
                                color='#d18300' icon='home'>
                        </YYTile>
                        <YYTile colSpan={3} id="7" title='开发环境界面设计器' isRoute={false} link={Links.PAGE_DESIGN_URL}
                                color='#996600' icon='share-alt'>
                        </YYTile>
                        <YYTile colSpan={3} id="8" title='开发环境组件库' isRoute={false} link={Links.COMPONENTS_URL}
                                color='#999900' icon='appstore-o'>
                        </YYTile>
                        <YYTile colSpan={2} id="9" title='业务支撑组件' isRoute={false} link={Links.SUPPORT_URL}
                                color='#666699' icon='desktop'>
                        </YYTile>
                    </YYTilesGroup>
                </YYTiles>
            </div>
        );
    }
});
// 环境配置页面
var EnvConfigModal = React.createClass({
    render: function () {
        var rowStyle = {margin: 5};
        var spanStyle = {fontSize: 14};
        var defaultActiveKeys = ["dev_config", "users", "git"];
        return (
            <YYModal visible={this.props.visible} title="环境配置信息" closable={false} maskClosable={false}
                     width={600} onOk={this.props.onOk} onCancel={this.props.onCancel}>
                <YYAccordions defaultActiveKey={defaultActiveKeys}>
                    <YYAccordion key="dev_config" header="开发环境数据库">
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>数据库地址: <a>{Links.DEV_DB_URL}</a></span>
                            </YYCol>
                            <YYCol span="12">
                                <span style={spanStyle}>数据库端口: <a>{Links.DEV_DB_PORT}</a></span>
                            </YYCol>
                        </YYRow>
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>数据库用户名: <a>{Links.DEV_DB_USER}</a></span>
                            </YYCol>
                            <YYCol span="12">
                                <span style={spanStyle}>数据库密码: <a>{Links.DEV_DB_PASSWORD}</a></span>
                            </YYCol>
                        </YYRow>
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>数据库实例名: <a>{Links.DEV_DB_INSTANCE}</a></span>
                            </YYCol>
                        </YYRow>
                    </YYAccordion>
                    <YYAccordion key="users" header="门户/设计器用户">
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>门户用户名: <a>plat03</a></span>
                            </YYCol>
                            <YYCol span="12">
                                <span style={spanStyle}>门户密码: <a>123456a</a></span>
                            </YYCol>
                        </YYRow>
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>设计器用户名: <a>learn</a></span>
                            </YYCol>
                            <YYCol span="12">
                                <span style={spanStyle}>设计器密码: <a>learn123</a></span>
                            </YYCol>
                        </YYRow>

                    </YYAccordion>
                    <YYAccordion key="git" header="Git仓库">
                        <YYRow style={rowStyle}>
                            <YYCol span="24">
                                <span style={spanStyle}>前端工程地址: <a href={Links.GIT_URL_FRONTEND}
                                                                   target="_blank">{Links.GIT_URL_FRONTEND}</a></span>
                            </YYCol>
                        </YYRow>
                        <YYRow style={rowStyle}>
                            <YYCol span="24">
                                <span style={spanStyle}>后端工程地址: <a href={Links.GIT_URL_WEB}
                                                                   target="_blank">{Links.GIT_URL_WEB}</a></span>
                            </YYCol>
                        </YYRow>
                        <YYRow style={rowStyle}>
                            <YYCol span="12">
                                <span style={spanStyle}>git用户名: <a>learn</a></span>
                            </YYCol>
                            <YYCol span="12">
                                <span style={spanStyle}>git密码: <a>learn123</a></span>
                            </YYCol>
                        </YYRow>
                    </YYAccordion>
                </YYAccordions>
            </YYModal>
        )
    }
});
// 开发手册页面
var DevOps = React.createClass({
    render: function () {
        return <AttachMgrModal visible={this.props.visible}
                               serverUrl={ATTACT_SERVER_URL}
                               sourceId='XG001001001'
                               billType='XG_DEMO'
                               showDelBtn={false}
                               showUploadBtn={true}
                               onCancel={this.props.onCancel}/>
    }
});
// 自定义组件解析器
var MyParser = {};
MyParser.MyTiles = MyTiles;
MyParser.EnvConfigModal = EnvConfigModal;
MyParser.DevOps = DevOps;

var DocPage = YYClass.create({
    render: function () {
        return <YYCreatePage {...this.props} appCode="A000777" pageCode="P004643" uiEvent={EventHandler}
                                             uiParser={MyParser}/>
    }
});

module.exports = DocPage;
