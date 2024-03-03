---
tag: 'html'
date: '2024/3/3'
---

### 语义化

即使全部用 div 也一样能正确绘制页面，但当你看到 div class=form-item 和 ul 时产生的心智负担是不一样的

添加 main, footer 等标签

其中 main, section, article, figure 具有一些特定的区分，博客中常用到

- 有助于 SEO
- 无障碍访问
- 可读性

### form 表单

form 通过 action="url" 将信息 post 到服务器

- input 的 name 用来指定表单中有这个字段
- input 的 label 用来显示表单名字，也就是提示
- form 中按钮默认行为就是把 form 提交到 action
- id 用于标识特定 HTML 元素，不应有重复

input 和 button 是内联元素
