---
tag: 'html'
date: '2024/3/16'
---

# fcc 中级选择器

## 选择器

- span[class~="sr-only"] 将选择任何包括 class=sr-only 的元素
- h1 .flex span:first-of-type 将选择 h1 下的 class=flex 下第一个 span 元素; 同样, last-of-type 正好相反
- span[class] 将选择任何包括 class 属性的 span 元素
- span:not(.sr-only) 用于选择不包括 sr-only 的 span 元素, 这可以避免 sr-only 类被覆盖
- span[class="total"] 和 span.total 的区别是, 前者是等于, 后者是包含
- tr.total td:nth-of-type(3) 选择 tr.total 下的第三个 td 元素
- span:hover 选择鼠标悬停的 span 元素

## clip 属性

- clip 定义元素的可见部分，比如 rect(1px, 1px, 1px, 1px);
- clip-path 定义属性，例如 clip-path: inset(50%); 剪切成一个矩形

### white-space 属性

用来处理文本中间的空白字符

## border 属性

- border-collapse 允许你控制表格边框的合并，有两个值：collapse 和默认的 separate

## display 属性

参考 [MDN display 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
下面有个 Examples 可以直接看

参考 [html 标签的默认属性](https://www.jianshu.com/p/af527c565481)
可以了解到 span 是内联 (inline) 而 p 和 div 是块 (block)

## 画梯形三角形

用 transparent 移除一部分即可

如果想让三角形变得圆润，加 radius 就可以做出圆弧等各种形状

另一个思路是拼 z-index，这在有的场景必须要用到

```css
border-left: 35px solid transparent;
border-right: 35px solid transparent;
border-bottom: 70px solid #5e5e5e;
```

## css 画图技巧

利用 html 树包含关系，继承相对位置，比如画了一个复杂图形，只需要 transform scale 里面的 inner element 即可

## box

box-sizing 可以设置为 inherit, 这意味着和父元素一样

## @media

@media 被称为媒体查询，根据指定条件应用 css

width 比 960px 小的时候，将 card 的 padding 设置为 2rem

```css
@media (max-width: 960px) {
  .card {
    padding: 2rem;
  }
}
```

### 收起菜单

当页面很窄的时候就把菜单收到旁边一个按钮菜单里，这是可以用 @media 实现的
