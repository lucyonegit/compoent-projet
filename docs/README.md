> 使用前先切换至公司私有npm服务  
```
npm set registry http://192.168.2.4:4873
```
### 安装 arg-component
```
npm install arg-component --save
```

### 全局注册组件
```javascrpt
import argComponent from 'arg-component'
Vue.use(argComponent)
```

### 按需引入组件

* 首先安装 蚂蚁金服的babel插件 babel-plugin-import
```
npm install babel-plugin-import -D
```
需要在babelrc配置中加入配置
```javascript
module.exports = {
  plugins: [
    ["import", {
      "libraryName": "arg-component",
      "libraryDirectory": "src/components",
      "camel2DashComponentName": false
    }]
  ]
}

```
* 按需引入组件
```
import {Button} fron 'arg-component'
```
