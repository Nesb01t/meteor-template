---
tag: 'vue'
date: '2024/3/12'
---

# vue-router

## 基础

1. 使用 router-link 组件进行导航
   且使用 router-view 来展示路由页面

2. router 通过 createRouter 创建并在 app 中使用

3. 动态路由匹配
   用户 id 不同如 `/users/:id`
   其中的值将会以 params 形式展示

4. 路由参数变化时需要手动 watch

   - 当路由参数变化时组件实例会被重复使用
   - 但也意味着生命周期 hook 不会被重复调用
   - 可以用 watch 监听 params，也可以 beforeRouteUpdate

5. 嵌套路由 children

   - 如果在 user 里面加上 router-view 就可以创建嵌套路由
   - 可以填空的 children name

6. 编程式导航
   很多时候需要用 js 直接操作导航 🔗

   - 如果使用组合式 API，使用 useRouter() 来访问路由
   - router-link :to 相当于 router.push(...)
   - push 的可以是一个路由对象 (带 params 和 query)
   - push 方法返回的是一个 Promise 对象，导航之后才知道是否成功
   - 另外还有 replace 和 go, 这模仿了 window.history API

7. 重定向和别名配置

   - 通过添加 alias 和 redirect 来进行重定向

8. 路由组件传参
   - 在组件中使用 useRouter 会使组件和路由紧密耦合
   - 一定程度上我们可以配置 props 来解除这种行为
   - 和添加 alias 一样添加 props: true, 此时 route.params 就被视作组件的 props
   - 如果 props 就是一个对象，那么就直接变成组件的 props

## 历史记录模式

1. Hash 模式
   使用 createWebHashHistory，加了一个 # 符号，对 SEO 有不好影响

2. Memory 模式
   不会假定自己处于浏览器模式，因此不会和 URL 交互也不会自动触发初始导航，非常适合 Node 和 SSR 模式，使用 createMemoryHistory 创建，需要手动 app.use(router) 之后 push 到初始路由
   - 但这种模式不会有历史记录，也就无法前进和后退
3. HTML5 模式
   使用 createHistory 创建，他不会有 #
   - 由于应用是一个 SPA，如果没有配置好，访问 user/id 的时候就会得到一个 404 错误..
   - 唯一要做的就是在服务器上添加一个简单的回退路由
   - 如果 URL 不匹配任何静态资源，它仍应提供与你 index.html 中相同的画面，这就解决了

## 导航守卫

router 的导航守卫主要以跳转或取消的方式工作，植入路由守卫的方式有很多：全局的，单个路由独享，组件级的

- 全局的使用 router.beforeEach 注册一个全局前置守卫

  ```ts
  router.beforeEach((to, from) => {
    return false; // 返回 false 来取消导航
  });
  ```

- 守卫是异步解析执行，按照顺序调用，导航在所有守卫 resolve 之前均处于等待中状态
- 也可以 return 一个路由地址，这会中断一个导航前往新的导航
- 如果返回 undefined 或者 true 就会照常导航
- next 被 RFC 讨论移除了
- beforeResolve 在被解析后调用
- afterEach 后置钩子

## 守卫中的全局注入

从 Vue3.3 开始可以在导航守卫中使用 inject() 方法，在注入 pinia 之类的东西时很有用

- 在 app.provide 中提供的所有内容都可以在 router 钩子上面通过 inject() 得到

## 路由和组件级的守卫

- 你可以在路由上直接配置守卫钩子
- beforeEach 只在进入路由的时候触发，不会在 params，query 改变时触发
- 组件级使用 setup，参考后面组合式 API 部分
- 完整的路由生命周期参考 [vue-router 官网](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B)

## 路由 meta

有时我们希望把信息附加到路由上，可以通过接受对象的 meta 属性来实现，在路由地址和导航守卫上都可以被访问到

```js
{
   path: "new",
   component: PostNew,
   meta: { requiresAuth: true }
}
```

## 导航和数据获取

有时进入某个路由我们希望从服务器获取数据，例如 fetchUsers，可以通过 2 个方式来实现

- 导航之后获取，在组件生命周期中定义
- 导航之前获取，在路由进入的守卫中获取数据，获取完成之后执行导航

从技术角度都不错，就看用户体验是哪种了
