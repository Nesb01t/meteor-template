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

### week4

使用 throw new Error 异常中止控制流, 无论如何用户都应该知道在异常出现的时候发生了什么 (当然也可以判断 null 或者返回一个特殊值, 但如果悄无声息, 用户就不知道发生了什么)

一个类可以用 Iterator 来实现迭代支持 for (String s : strs)

Project 1C:

- 将 ArrayDeque 和 LinkedListDeque 整合到一起
- GuitarHero 算法模拟真实世界吉他发声 (好玩的算法)

### week5

Lab 05(可选): 估计算法用时

- 估计 斐波那契数列 / 数组扩容 消耗的时间
- 直观通过图表展示算法的时间复杂度`

### week6

Lab 06: 并查集

1. 加权快速 (计算权重)
2. 路径压缩 (记忆根节点)
   在每次调用 Find 的时候设置根节点

Homework 2: 蒙特卡洛模拟渗流阈值

数学 / 物理背景相关，也是非常好玩的题目

### week7

Lab 07: BSTMap (Binary Search Tree Map)

- 实现一个二叉搜索树

Project 2A:

- Google NGram 记录了所有历史观察到的单词
- 利用 Tree 实现一个后端返回 Time Seris
- 大量用了 Map 结构

### week8

Lab 08: LLRB (Left-Leaning Red-Black) Trees

- 结合文档中提到的 Lecture Clips 还有一个 Demo 做一个红黑树
- 实现左倾红黑树

Project 2B:

- 完善 Project 2A 中的程序并运行 Web Server 来展示内容
- 根据 hyponyms 和 synset 构建一个连接图

### week10

Lab 09: MyHashMap 自己实现一个哈希表

- 给桶扩容
- 比较 ArrayList / LinkedList / ArrayDeque 的性能

### week11

Lab 11: BYOW (Build your own world)

- 帮助完成 Project 03: 2D 探索世界
- 做一个俄罗斯方块，熟悉图形操作，为 Project 03 准备

控制复杂度:

1. 不要在没有辅助方法的情况下嵌套 for 执行所有操作，虽然技术上可行，但他会融化你的大脑。如果没有层次想象，你的思维就会在复杂性的重压下变成一团黏糊糊的东西

2. DRY(Dont repeat yourself) 和 封装原则在软件工程中无处不在，如果你发现自己一遍又一遍重复某件事，你应该把他视为一个信号，告诉你需要抽象出一个方法来处理这个问题

3. 不要硬编码，用变量、方法、或者类来表示某个概念

4. 不要害怕推导前面的努力全部重来

