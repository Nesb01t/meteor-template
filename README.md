# Meteor Template

基于 Astro + React 的博客模板

## 添加文章

克隆本仓库后

1. 修改 .gitmodules 中的 url 为你的文章仓库地址
2. 执行以下命令
3. 提交 git 更改即可

```bash
git submodule sync
git submodule update --init --recursive
```

## 更新文章

在子模块仓库提交后，一次性更新所有子模块即可

```bash
git submodule update --remote --merge
```

## 部署

有几种比较基础便捷的部署方式

1. 使用 vercel 部署，直接将本仓库导入 vercel 即可，缺点是访问有限
2. 使用 github pages 部署，能够访问且可以自定义 https 域名，但部分地区访问较慢
3. 自购服务器（如腾讯云、阿里云等）部署，进行备案

## CI/CD

等待更新 vercel 和 github pages 部署方法，可自行进行配置

目前暂时使用自购服务器跑 crontab 来更新文章，蓝链 [nescraft.cn](https://nescraft.cn)
