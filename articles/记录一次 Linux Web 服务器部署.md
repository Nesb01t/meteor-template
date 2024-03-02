---
tag: 'linux'
date: '2024-3-2'
---

### 服务器

我选择了华为云香港 1h2g，基本满足建站和学习用途

- 系统选择 Ubuntu 22.04 其他默认

### 备案

地区不一样访问速度也不一样，自行取舍~

- 购买香港、新加坡等地云服务器可以直接访问
- 境内服务器则需要对域名进行备案

### 连接服务器

打开终端连接

```bash
ssh -l root [服务器公网IP]
```

其中 root 是你的 Ubuntu 系统用户名，一般云服务器默认就是 root，可以在购买时留意一下

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

创建成功后运行即可

- cd work // 进入项目文件夹目录
- pnpm run dev --host // 运行（带上 host 支持开发时远程访问）

### 访问

服务器设置告一段落，接下来尝试访问

确保你的服务器放通了 **3000** 端口（后续可以更改）

打开浏览器访问 `你的服务器IP:端口` 例如 123.12.123.123:3000
