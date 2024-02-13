## 一.创建项目

### 选择脚手架

> 这个项目我打算使用 react 来开发,所以目前有两个打包工具可以供我使用:

1. create-react-app

```js
创建项目: npx create-react-app questionnaire-app --template typescript
```

2. vite

```js
创建项目: npm create vite@latest questionnaire-app --template react-ts
```

### 最终选择

> 但最终我选择的是 vite 这个构建工具来打造我的项目, 因为 create-react-app 是基于 webpack 的构建工具,他没有像 vite 那样的热更新速度,我希望在开发时项目启动会快一点,所以我选择 vite.
