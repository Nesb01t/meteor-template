---
tag: 'astro'
date: '2024-3-2'
---

### 图标用法

1. 参考第三方 astro-icon 包
2. 需要安装图标包比如 `@ant-design/icons`
3. Icon 组件 props

```ts
interface IconProps {
  name: string;
  title?: string;
  size?: number;
  width?: number;
  height?: number;
}
```

### daisyUI

主题配置文件 `tailwind.config.js` 中配置

- badge 分类
- card 文章内容, project
