---
tag: 'java'
date: '2024/3/10'
---

## 版本声明

- minecraft 1.20.4
- spigot r0.1
- skript 2.8.3
- skript-gui 1.3

## 初始用法

打开一个基础菜单，skript-gui 内置了避免交互等事件钩子

```java
create a gui with virtual chest inventory with 3 rows named "永恒试炼传送门"
open last gui for {_p}
```

[SkriptLang 官网 物品和附魔速查](https://docs.skriptlang.org/classes.html#itemtype)

### 设置 GUI 模型

我们预先设定 GUI 的模型，方便管理，只需要

1. 加上 shape
2. 定义 shape x

```java
create a gui with virtual chest inventory with 3 rows named "永恒试炼传送门" and shape "xxxxxxxxx","x-------x", "xxxxxxxxx":
    make gui "x" with dirt named "&7 "
open last gui for {_p}
```

### 附加代码

上面我们定义了 GUI 的形状，加入代码也是非常简单的

只需要加一层 indent，往里面写就好了，这样点击的时候就能看到 "你好" 了

```java
create a gui with virtual chest inventory with 3 rows named "永恒试炼传送门" and shape "xxxxxxxxx","x-------x", "xxxxxxxxx":
    make gui "x" with dirt named "&7 ":
        send "你好" to {_p}
open last gui for {_p}
```

## 钩子上下文

当点击 GUI 的时候有很多值可以被使用

- gui slot 包括玩家背包，因此可能不是 unique 的
- gui raw slot 返回被点击的格子 index
- gui hotbar slot 快捷键 1-9
- gui inventory 是否点击的是背包
- gui inventory action 试图做的事
  [官网 InventoryAction](https://docs.skriptlang.org/classes.html#inventoryaction)
- gui click
  [官网 ClickType](https://skriptlang.github.io/Skript/classes.html#clicktype)
- gui cursor [item] 玩家鼠标上的东西
- gui item 玩家点击的东西
- gui slot type
  [官网 SlotType](https://github.com/APickledWalrus/skript-gui/wiki/6.-Other-Information#slot-types)
- gui player 点击玩家
- gui viewers/players 正在看背包的玩家
- gui slot id 例如之前的 shape "X"
- gui
  原文 the GUI of the slot, usable in "run on gui close"

## 后续

将在使用中发布在另一篇文章
