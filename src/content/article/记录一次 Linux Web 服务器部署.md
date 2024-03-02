---
tag: 'linux'
---

### 服务器

我选择了华为云香港 1h2g，基本满足建站和学习用途

- 系统选择 Ubuntu 22.04 其他默认

### 备案

地区不一样访问速度也不一样，自行取舍~

- 购买香港、新加坡等地云服务器可以直接访问
- 境内服务器则需要对域名进行备案

### 连接服务器

1. 打开终端

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f231f4794f24e6eb96d6bb3ead045e0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=594&h=235&s=19950&e=png&b=111111)

2. 连接

```bash
ssh -l root [服务器公网IP]
```

其中 root 是你的 Ubuntu 系统用户名，一般云服务器默认就是 root，可以在购买时留意一下

之后会要求输入密码，输入之后 enter 即可

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16a2a8c2b2ea4d3891d8b1ce04cb387f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=520&h=64&s=4055&e=png&b=0d0d0d)

如图，连接成功之后会显示欢迎

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7773e9fc43a41e092d9343e121207ed~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=870&h=580&s=60119&e=png&b=0c0c0c)

### 安装软件

键入 `apt update` 更新数据源，不恰当但大致可以理解为 **更新应用商店**

随后就可以用 apt 安装软件了，既然建站首先安装 nodejs、npm

> 高版本用这个配置，或者改用 nvm
>
> curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
>
> bash /tmp/nodesource_setup.sh

- apt install nodejs
- apt install git (如果没有的话，键入 git 看有无该指令的反馈即可)

之后用 npm 安装 pnpm `npm i -g pnpm`

### 运行网站

这里用 nuxt.js 脚手架进行测试，你可以用 vite、vue、react 替代

执行 `pnpm dlx nuxi@latest init [项目文件夹名]` 初始化 nuxt 项目，过程中会询问你一些选项、设置

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79700afb683f48cfa7f54a5cde0cc8d9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=851&h=381&s=30580&e=png&b=0c0c0c)

创建成功后运行即可

- cd work // 进入项目文件夹目录
- pnpm run dev --host // 运行（带上 host 支持开发时远程访问）

运行成功！

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c9a2607e2b74d0aabfa76fdb82083eb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=748&h=356&s=32324&e=png&b=0d0d0d)

### 访问

服务器设置告一段落，接下来尝试访问

确保你的服务器放通了 **3000** 端口（后续可以更改）

打开浏览器访问 `你的服务器IP:端口` 例如 123.12.123.123:3000

成功！

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9bbbf6eb00b476c936d1c5048dca7d8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1713&h=1068&s=176462&e=png&b=ffffff)