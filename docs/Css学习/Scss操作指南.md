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

    

