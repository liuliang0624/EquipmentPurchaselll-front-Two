运行环境：需要安装git_v2.7以上版本、nodejs_v5.0以上版本
开发环境：推荐webstrom

1.如果是第一次使用项目，请在项目根目录下运行以下两行命令：
1.1 运行命令：npm run reg-cn
例如：使用GitBash控制台：$ npm run reg-cn
例如：使用Cmd控制台：npm run reg-cn
1.2 运行命令：npm install
例如：使用GitBash控制台：$ npm install
例如：使用Cmd控制台：npm install
注意：此过程会下载相关依赖模块资源，并在当前根目录下生成"node_modules"文件夹，由于下载过程较长（预计5~10分钟），需要耐心等待。

2.第一步成功以后，执行启动工程命令：npm run dev-xxx，“xxx”为应用工程标识名，一般同apps/xxx("xxx"目录名)保持一致。
例如：工程标识名"EquipmentPurchaselll"，则运行命令：$ npm run dev-EquipmentPurchaselll

3.启动成功后，打开浏览器访问：http://localhost:8081/apps/xxx/  (xxx为对应应用标识名)
例如：http://localhost:8081/apps/EquipmentPurchaselll/

--------------打包命令说明-------------o
$ npm run build-xxx //生产环境编译-压缩混淆版
$ npm run build-src-xxx //生产环境编译-非压缩混淆版(源码版)
$ npm run build-test-xxx //测试环境编译-压缩混淆版
$ npm run build-test-src-xxx //测试环境编译-非压缩混淆版(源码版)
$ npm run dll-xxx //重新编译第三方公共库-压缩混淆版
$ npm run dll-src-xxx //重新编译第三方公共库-非压缩混淆版(源码版)
补充说明：
运行build相关命令后，编译后的文件生成目录：apps/xxx/build/
运行dll相关命令后，编译后的生成两个文件：apps/xxx/vendor.dll.js和apps/xxx/manifest-vendor.json，这两个文件默认已提供.


--------------目录结构说明-------------
|--yylib-sample            // 应用库(根目录)
    |--apps                // 本库下各项目应用集合
        |--EquipmentPurchaselll       // 前端独立应用存放处（应用工程A）
            |--actions     // 存放当前触发Redux的动作行为
            |--components  // 存放工程内部的公共组件
            |--modules     // 存放工程各模块代码
            |--pages       // 存放主页面及框架结构等
            |--reducers    // 存放reducer函数，用来修改store状态
            |--routes      // 放置页面路由 react router
            |--stores      // 放置stores配置文件
            |--index.html  // 工程入口文件html
        |--otherapp        //（应用工程B）
            |--***         //（同应用工程A目录结构）
    |--node-modules        // 存放依赖的第三方模块库,使用命令 npm install下载,自动生成
    |--index-xxx.js        // 本工程项目入口文件
    |--config-xxx.js       // 本工程项目配置文件
    |--config-xxx-dll.js   // 本工程第三方包打包配置文件
