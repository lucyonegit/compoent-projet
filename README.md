## Argrace 雅观前端知识库项目

本项目中旨在提取公司项目中的公共组件，以及专业，业务知识，组成一个尽可能全面的文档，方便开发同学查阅

#### Installing 安装


```
npm install
```
安装完依赖运行项目

```
npm run docs:dev
```

#### 项目目录结构


```
├─.babelrc
├─package.json
├─README.md
├─yarn.lock
├─webpack   // webpack编译配置
|    ├─utils.js
|    ├─webpack.build.js
|    └webpack.config.js
├─src
|  ├─index.js
|  ├─utils
|  |   └validate.js
|  ├─directive              // 自定义指令
|  |     ├─lazyLoading.js
|  |     ├─useEcharts.js
|  |     └useEllipsis.js
|  ├─components
|  |     ├─ScrollView
|  |     |     ├─index.js
|  |     |     └scrollView.vue
|  |     ├─Images
|  |     |   ├─Images.vue
|  |     |   └index.js
|  |     ├─Button
|  |     |   ├─BooleanBtn.vue
|  |     |   └index.js
├─docs  // 文档描述
|  ├─README.md
|  ├─useEcharts
|  |     └index.md
|  ├─ScrollView
|  |     └index.md
|  ├─Images
|  |   └index.md
|  ├─Button
|  |   └index.md
|  ├─.vuepress
|  |     └config.js     // 文档配置
├─dist
|  └argace-components.min.js

```

