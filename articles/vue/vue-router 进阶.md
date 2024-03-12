---
tag: 'vue'
date: '2024/3/12'
---
## vue-router

### 组合式 API 用法

使用 useRoute 和 useRouter

route 对象是一个响应式对象，他的任何属性都可以被监听，大多数情况下应该监听期望改变的参数例如 `route.params.id`

- 导航守卫可以使用 `import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'`
- useLink 和 RouterLink 的 v-slot 值相仿，可以作为 hook 直接使用

### RouterView 插槽

在这里可以套 keep-alive 和 transition, 也可以传递一些 props 进去
- 另外可以把模板引用 ref 写在 component 上面，否则将会被 RouterView 的实例填充而不是路由组件本身

```html
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```

Vue 可能会自动复用组件而忽略过渡，加一个 key 属性就可以了
```html
<router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
```


### 保留滚动条
当你切换路由时想让页面滚动到顶部或是保持原先的滚动位置，可以给 route 提供一个 scrollBehavior 方法

```js
// 返回到顶部
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 返回一个 scrollToOptions 对象
    return { top: 0 }
  },
})

// 始终在元素 #main 上方滚动 10px
scrollBehavior(to, from, savedPosition) {
  return {
    // 也可以这么写
    // el: document.getElementById('main'),
    el: '#main',
    // 在元素上 10 像素
    top: 10,
  }
}

// 变得更流畅
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    }
  }
}

// 延迟滚动
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})
```

### 路由懒加载
如果我们能把不同路由的组件分成不同的代码块，当路由访问才加载，打包就会更高效

Vue Router 支持开箱即用的动态导入
```js
// 将
// import UserDetails from './views/UserDetails.vue'
// 替换成
const UserDetails = () => import('./views/UserDetails.vue')
```

如果你使用的是 webpack 之类的打包器，它将自动从代码分割中受益。

如果你使用的是 Babel，你将需要添加 syntax-dynamic-import 插件，才能使 Babel 正确地解析语法。

### (exp!) 类型化路由

vue-router v4.1 的新功能

### 导航故障

如果我们希望跳转到某个页面，然后关闭菜单栏

这样会导致不管有没有 push 成功都会直接关闭

```js
await router.push('/my-profile')
this.isMenuOpen = false
```

可以使用如下代码来检测

```js
const navigationResult = await router.push('/my-profile')

if (navigationResult) {
  // 导航被阻止
} else {
  // 导航成功 (包括重新导航的情况)
  this.isMenuOpen = false
}
```
还有一些更高级的检测请查看官网 [Vue Router 官网](https://router.vuejs.org/zh/guide/advanced/navigation-failures.html)

### 动态路由

可以通过新建、删除路由来实现更高级的功能

[Vue Router 官网](https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html)