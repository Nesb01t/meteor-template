---
tag: 'star'
date: '2024/4/17'
---

# cs61b intro

[fa23 课程传送门](https://fa23.datastructur.es/)

一般情况下重要性 Project >>> Homework > Lab

因此如果没有遇到困难，先做 Homework 和 Lab 最后做 Project 就可以了

遇到困难再想办法解决或者回去看 Discussion 和 Lecture

## week1

Lab 01: 配置好 IDEA 和 JUnit

Homework 0: 完成 JUnit 单测作业

Project 0: 直接上强度补全 2048 游戏的代码

## week2

Lab 02: 学会用 Debugger

给了几个炸弹，需要用调试器找到办法让他们不爆炸

不能去修改代码，也不能在代码里面打 Print Log

- 能够用调试器和可视化工具检查代码
- 解释测试失败信息
- 更好地调试代码

使用 Print Log 打印的缺点

1. 修改了代码且后续要清理
2. 确定要打印的内容也是很枯燥的
3. 打印出来的格式不一定好

在调试时遇到 while(i<100000) 这种可以设置条件变量，右键 Debugger 小红点就行

遇到列表不好看，可以尝试借助一些工具来调试

## week3

Lab 03: 学习 Debugger 高级技巧

- 了解堆栈跟踪并隔离错误
- 处理不同类型的异常
- 异常断点、表达式和监视

用位运算执行大小值

Project 1A:

- 了解链表
- 学会运用单元测试 和 TDD 证明数据结构的正确性

Project 1B:

- 学会手动给 Array 扩容
- 并用指针来定位 Array 的 first 和 last 元素位置

| 名词 ADT Abstract Data Type

### week5

使用 throw new Error 异常中止控制流, 无论如何用户都应该知道在异常出现的时候发生了什么 (当然也可以判断 null 或者返回一个特殊值, 但如果悄无声息, 用户就不知道发生了什么)

一个类可以用 Iterator 来实现迭代支持 for (String s : strs)

Project 1C:

- 将 ArrayDeque 和 LinkedListDeque 整合到一起
- GuitarHero 算法模拟真实世界吉他发声 (好玩的算法)
