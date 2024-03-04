---
tag: 'html'
date: '2024/3/3'
---

## 语义化

div 主要用来设计布局

即使全部用 div 也一样能正确绘制页面，但当你看到 div class=form-item 和 ul 时产生的心智负担是不一样的

添加 main, footer 等标签

其中 main, section, article, figure 具有一些特定的区分，博客中常用到

- 有助于 SEO
- 无障碍访问
- 可读性

## form 表单

form 通过 action="url" 将信息 post 到服务器

- input 的 name 用来指定表单中有这个字段
- input 的 label 用来显示表单名字，也就是提示
- form 中按钮默认行为就是把 form 提交到 action
- id 用于标识特定 HTML 元素，不应有重复

input 和 button 是内联元素

## html head

设置字符集 meta attribute=value 例如 charset=utf-8

外部样式表 link rel=stylesheet href="url"

支持移动端 meta name="viewport" content="width=device-width, initial-scale=1.0"

SEO 可以识别 meta name="description" 和 title

## 基础 css

哪些元素默认是块级，哪些是内联 (inline-block)

hsl 函数参数为 色调，饱和度，亮度

rem 代表 根em 和 html 的字体大小有关

使用 unset 可以清除元素之前设置的样式

input[name="password"] 选择属性值为 password 的 input

### 伪类

p:last-of-type 这会选择最后一个 p 元素
p:not(#selector) 排除的伪类

## 盒模型

HTML 中每一个元素都被视为拥有4个区域的盒子

将 border 想象成运送货物的纸板箱

默认的是 content-box，如果 width = 100px，那就是 100px，任何 padding 和 border 都会在这个基础上增加

border-box 将会包含 padding 和 border，导致最终宽度一定是 100px

## filter

使用 filter: blur(3px) 纠正颜色和形状过于锐利的问题

## 旋转

使用 transform: rotate(-0.6deg) 逆时针旋转 0.6 度

## text

使用 text-transform: uppercase 转化为全大写

使用 letter-spacing 调整文字间距

## aspect ratio

用于图片约束比例，比如已有宽度约束高度

## scroll-behavior 滚动条行为

当使用 #anchorId 跳转时候可能会让人非常迷糊，给所有元素添加 scroll-behavior: smooth 即可
