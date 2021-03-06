---
lang: zh-CN
title: SCSS
description: CSS相关的内容
---

### Scss 操作指南

#### Scss 计算不同单位

- 基础的相同单位计算就不在提了，普通加减乘除就行， 记得符号之间带空格

-  

  ```scss
  height: calc(100vh - #{$navbar-height});
  ```

  值得一提的是 ，两个单位不同的，应该是要使用 calc 函数的，

  - 不同单位直接相加减是错误的，

  - 对于`scss/sass`的变量而言，引用类似 模板字符串 `${}` ， 它的是 `#{}`

    

### Scss基础学习

```scss
$myHeight: 450px;
$color: rgba(#eee, 0.5);

body {
  $myHeight: 800px;
  height: $myHeight;
  color: $color;
}
#app {
  border-style: none;
}
//-------------------------------------------------------------------

// 单行注释，不会被编译到css文件

/* 多行注释，会被编译到css文件 */

// -------------------------------------------------------

// 变量的定义和使用

// 变量具有作用域，且 优先使用相同作用域的数据

//  scss 数据类型
// 使用 type-of($value)

/* 
  -- 数字 `5a`、`10px`
  -- 字符串 foo 'foo-bar'
  -- 颜色 rgba(#eee, 0.5);
  -- boolean
  -- null
  -- list
  -- map 相当于 obj
 */

// -------------------------------------------------------

//  运算

// ---------------------------------------------------

// 层级

// ------------------------------------------------

// 模板字符串 #{}

// ----------------------------------------------------

// !default 默认值

// --------------------------------------------------------

// @import 自动导入

// --------------------------------

// @extend 继承----简单场景

// 直接引用一个样式

// ----------------------------------

```

