# qiankun 微应用模板

技术栈：vite，vue3，vuerouter，pinia，navie ui

本项目提供一套基本的乾坤微服务框架，故需要使用合并分支的能力保证模板文件和业务文件分离，

搭建框架时，框架内容和业务内容需要分离，框架内容尽量内聚，对外提供 api，

框架内容体现在整体样式（layout，style），qiankun 配置文件生成，数据库连接，消息通道，权限验证（scrip，config，directives，hooks），全局api（api），全局文件（public）
为了方便独立开发，需要做单度访问的特许权限


业务内容集中在页面（views），状态管理（store），路由管理（router），局部api（ownApi），资源asset，

最佳实践最好是所有业务内容全部写在 src/microapp 文件下。
