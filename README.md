## 一.创建项目

### 选择脚手架

> 这个项目我打算使用react来开发,所以目前有两个打包工具可以供我使用: 

1. create-react-app

```js
创建项目: npx create-react-app questionnaire-app --template typescript
```

1. vite

```js
创建项目: npm create vite@latest questionnaire-app --template react-ts
```

### 最终选择

> 但最终我选择的是vite这个构建工具来打造我的项目, 因为create-react-app是基于webpack的构建工具,他没有像vite那样的热更新速度,我希望在开发时项目启动会快一点.

## 二.指定项目的编码规范(包含,代码格式,代码提交)

### 为什么要限制我?

> 抛去应用的知名度来说,我觉得一个项目的好坏,最基本的就是代码的美观度,所谓美观并不是代码写的有多简洁或者是组件封装的复用性有多么的强, 而是你写的代码足不足够清晰,以及项目整体的代码结构拆分的合理性,这就是我评判一个项目好坏的标准.
>
> JS是一个非常灵活的语言,哪怕用上了vue/react的这种优秀框架,但是由于人的水平层次不齐,哪怕前人的代码写的再好,后人也可能会来堆起屎山.
>
> 所以就需要有人来制定编码规范与提交规范, 无规矩不成方圆, 为他人,也为自己.



### 设置代码规范

1. 安装插件

```js
pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

2. 在.eslintrc.cjs中配置插件:

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // 扩展prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
```

3. package.json中添加格式化指令

```js
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    + "format": "prettier --write 'src/**/*.+(js|ts|jsx|tsx)'"
  },
```



> 通过上面三个步骤后, 现在执行pnpm run format就可以来对所有的js,ts,jsx,tsx文件来进行代码格式与自动修复的校验,
>
> 但是我想要纠正一下格式,我必须每次都要在终端执行一下命令这是不是有点太麻烦了?, 
>
> 是的,很麻烦,所以下面通过配置vscode的方式来实现每次保存时就让prettier与eslint自动校验与修复代码.

1. 在项目根目录中创建.vscode文件夹

2. 文件夹中创建setting.json

3. 写入以下代码,实现vscode保存时开启代码校验与自动修复

   ```js
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```



### 自定义prettier规则

```js
module.exports = {
  // 箭头函数只有一个参数时可以省略括号
  arrowParens: "avoid",

  // 括号内部不要出现空格
  bracketSpacing: true,

  // 行结束符使用Unix格式
  endOfLine: "lf",

  jsxBracketSameLine: false,

  // 行宽
  printWidth: 100,

  // 换行方式
  proseWrap: "preserve",

  // 分号
  semi: false,

  // 使用单引号
  singleQuote: true,

  // 缩进格数
  tabWidth: 2,

  // 使用tab缩进
  useTabs: false,

  // 追加逗号, 多行对象, 数组在最后一行增加逗号
  trailingComma: "es5",

  parser: "typescript",
};
```


