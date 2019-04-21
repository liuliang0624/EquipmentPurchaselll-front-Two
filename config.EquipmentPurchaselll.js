/**
 * 打包单个应用-合约云
 */
var config = require('yylib-react/dist/config/webpack.config');
//打印启动信息
config.initPrint(__filename);
var path = require('path'); 
var cwd = process.cwd();//返回运行当前脚本的工作目录的路径
var options = {
  //定义应用标识名
  key:'EquipmentPurchaselll',
  //定义各模块的入口
  modules : {
    bundle: './index-EquipmentPurchaselll.js'//合同入口
  }
  //根目录
  ,rootPath:__dirname
  //webpack-dev-server启动的端口
  ,port:8081
  //相对路径
  //,path: path.join(__dirname, 'apps')
  //编译后的路径
  //,filename: '[name]/build/bundle.js'
  //定义各种加载器
  //,loaders: []
  //定义各种插件
  //,plugins:[]
  //定义路径别名，即:require(alias)
  //,alias:{}
}
//服务端产出路径
if(process.env.NODE_ENV==='prod') {//生产环境
  options.publicPath = '/icop-EquipmentPurchaselll-frontend';
}
//构建webpack配置
module.exports = config.webpack(options);