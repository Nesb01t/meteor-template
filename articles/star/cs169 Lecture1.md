---
tag: 'star'
date: '2024/4/26'
---

# cs169

课程专注现代的敏捷开发，并利用云平台提供 SaaS

使用了 Ruby/Rails 作为开发语言

[课程资料链接](https://saasbook.info)

## Lecture 1 Introduction to Software as a Service, Agile Development and Cloud Computing

这节课会教什么:

1. pickup new languages and frameworks quickly
2. learn how to work as a part of team
3. learn how to write clear and maintainable code

为什么我们可以建造飞机或吊桥这样有良好安全记录的工程，而软件工程往往包含大量 bugs 甚至致命的导致数据丢失的 bug?

- 早期软件工程试图从土木或建筑中找到同样的规划模式
- 但 hardware 一旦完成就很难改变，而软件不同
- 2000年初，软件设计师提出了 agile development，它拥抱变化而不是将其视作敌人

接下来我们探索 plan and document 和 agile 之间的区别

### 1.1

学习软件工程和之前正常的编码（比如一些 hobby project）有什么差异？

- 构建可持续的代码，使未来接手的人能够继续开发
- 以团队为单位工作，而不是个人

优秀的工程师具有的特性？

- 对他的工作有热情
- 以数据导向
- 以进步
- 对技术开放
- 帮助他人理解代码
- 创造共享性的成功
- 创造 "safe haven"
- 给予良好的反馈

拥有的技术？Technical Skills

- 优雅的问题解决方式
- 创造性的思考
- 预见未来的技术需要

### 1.2 ~ 1.3

P&D -> Agile

与客户沟通，每两周都进行迭代升级，直到客户开心为止

- 行为驱动的设计 / user stories
- 测试有限 test-first div

### 1.4

质量保证:

- fitness for use 意味着对客户和生产者有价值
- easy for developer to debug and enhance

## 1.5

提高效率的技巧

1. code that writes code 代码生成器 (generate at runtime)
2. clarity via conciseness 减少别人的心智负担
3. reuse 复用，不要做别人做过的工作
4. automation and tools 自动化工具

当你在编写足够 clever 且简洁的代码时，考虑他的可读性，有没有产生心智负担

如果在阅读代码时就足够困难了，那么 debugging 时会变得难上加难

## 1.7

讲了 Saas 和上云，以 Amazon 为例：你的需求总是在变的，圣诞节和节后的客流量显然不同，你不总是需要 100% 的资源

从 2007 年开始你可以购买计算机以小时计费，1000 个电脑跑 1 小时和 1 个电脑跑 1000 小时的价格是一样的

- 由于这些数据中心的提供者拥有数以万计的大型服务器，在大多数情况下，他们对计算集群的控制可能会比你雇佣一个专业的运维人员更好
- 在购买服务器的同时你也得到了这些管理资源的人力
- 我们可以立刻扩大或缩小我们的计算规模
- 同时的，你也需要将这种可伸缩性设计到软件中

## 1.8

如何部署 Sass?

为什么要用一些前端框架?

- 提供美感, 对于非专业人士，即使用默认值也不会显示太差
- 提供响应式，支持 mobile 是非常关键的
- 提供 accessbility (a11y)
