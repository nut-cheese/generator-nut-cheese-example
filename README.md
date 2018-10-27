## 

本项目使用 `generator-nut-cheese` 搭建。包含了一个简单的 TodoList。


### 使用框架

本项目依赖最后更新日期为 *2017/11/3* 。 用户可使用 `npm outdated`, `npm update <packdage>` 来检查模块是否过期并更新模块。

**注意**，`react-router@3.x`, `react@16.x`, `react-hot-loader@3.x` 为重要版本更新， 若更新可能导致项目无法启动，请用户根据自身情况酌情更新。

#### 项目基础依赖

本表格大致标志出了所有的基础模块。

|基础 | 版本 | 描述|
|-- |-- | :--: |
|react | 15.x | -|
|react-dom |15.x | -|
|react-router | 2.x | -|
|prop-types| 15.x | -|

|打包 | 版本 | 描述|
|-- |-- | :--: |
|webpack | 3.x | -|
|babel-loader |15.x | -|
|babel-preset-es2015 |- | -|
|babel-preset-react |- | -|
|babel-preset-stage-0 |- | -|
|react-hot-loader| | 自动 reload 组件|
|style-loader | 2.x | -|
|css-loader | 15.x | 提供了css module 选项|
|postcss-loader | | 包含了autoprefixer|
|extract-text-plugin| | css打包为单独的文件|
|html-webpack-plugins| | 根据template生成html|
|webpack-dev-server| | 开发阶段提供服务器功能|

|测试工具 | 版本 | 描述|
|-- |-- | :--: |
|karma | 1.x | 自动化测试工具，用来配置travis|
|mocha |4.x | 测试工具|
|chai | 3.x | 断言工具|
|enzyme | 3.x | 用于react组件测试|
|jsdom | - | 用于在nodejs中模拟浏览器环境|
|enzyme-adapter-react-15 | - | react version 15 support|
|sinon | 4.x | 模拟事件|

|语法检查 | 版本 | 描述|
|-- |-- | :--: |
|eslint | - |- |
|babel-eslint |- | -|
|eslint-plugin-react |- | -|


### 与 Redux 搭配使用
// todo


### 增加 nodejs 中转层

// todo

### 项目切换为 typescript 环境

// todo


### Feature

- [x] **基础todolist**
    - [x] react-hot-loader
    - [x] css-module
- [ ] **redux**
    - [ ] state 2 props
    - [ ] redux-thunk
    - [ ] immutable.js
- [ ] **nodejs**
    - [ ] express
    - [ ] webpack-middleware
    - [ ] HTML5 history support
- [ ] **typescript support**
    - [ ] tsconfig
    - [ ] typings auto install 
    - [ ] test typescript language(mocha karma)
    - [ ] typesript component **SSR**