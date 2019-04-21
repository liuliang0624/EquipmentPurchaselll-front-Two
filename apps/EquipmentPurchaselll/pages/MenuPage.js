/**
 * 左侧菜单树
 */
var React = require('react');
var {Link} = require('react-router');
var {YYPage, YYMenu, YYMenuItem, YYMenuSub, YYIcon} = require('yylib-ui');
var {DateFormatUtils} = require('yylib-cscec');

var MenuPage = React.createClass({
    render: function () {
        var nowDate = DateFormatUtils.formatDate(new Date(), "yyyy年MM月dd日");
        return (
            <YYPage>
                <YYMenu theme="light" defaultOpenKeys={['sub_module1']} style={{width: 240}} mode="inline">
                    <YYMenuItem>当前时间：{nowDate}</YYMenuItem>
                    <YYMenuItem key="docs">
                        <Link to="doc"><span style={{color:'blue'}}><YYIcon type="book"/>参考资料</span></Link>
                    </YYMenuItem>


                    <YYMenuItem key="EquipmentTenderApplication">
                        <Link to="EquipmentTenderApplication"><span style={{color:'blue'}}><YYIcon type="book"/>设备集中采购招标申请</span></Link>
                    </YYMenuItem>

                    <YYMenuItem key="EquipmentTenderResult">
                        <Link to="EquipmentTenderResult"><span style={{color:'blue'}}><YYIcon type="book"/>设备集中采购招标结果</span></Link>
                    </YYMenuItem>




                </YYMenu>
            </YYPage>
        );
    }
});
module.exports = MenuPage;