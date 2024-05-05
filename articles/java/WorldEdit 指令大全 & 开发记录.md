---
tag: 'java'
date: '2024/3/2'
---

# 服务端 & 客户端 运行配置

- 服务端 - Spigot 1.14.4
- 插件版本 - WorldEdit 7.2.12
- 客户端 - Forge 1.14.4 + VoxelMap + WorldEditCUI for Forge 2 edition

# 通用指令

`//flora` 生成花海 (类似骨粉)
`//naturalize` 自然化 (生成地表结构)
`//paste -a` 复制时只覆盖空气

# 好用刷子

## 圆球刷 Brush Sphere (/br sp)

Tips: 在使用圆球刷之前推荐进行 `/mask 方块名` 进行蒙版选择 (简易理解: 进行we操作时, 只会影响mask指令里面的方块)

丛林&橡木树叶刷[不会枯萎] (世界树)
`/br sphere jungle_leaves[persistent=true],oak_leaves[persistent=true],air 3`

50%空气 更加稀疏的版本 (世界树)
`/br sphere jungle_leaves[persistent=true],oak_leaves[persistent=true],air,air 3`

原石&苔石 (地表装饰)
`/br sphere cobblestone,mossy_cobblestone 2`

泥土替换装饰 (自然化山脉)
`/br sphere 8%dirt,1%cobblestone,1%stone,1%mossy_cobblestone,1%coarse_dirt 2`

爬墙叶子 (自然化山脉)
`/br sphere 3%oak_leaves[persistent=true],1%air 2`

沙子球 (自然化山脉)
`/br sphere sand 3`

## 地板刷子 Brush Cyl (/br cyl)

森林小径 (橡木林副本)
`/br cyl 8%grass_block,1%podzol,1%stone,1%gravel,1%coarse_dirt 3`

## 树木刷子 (/tree)

- deltree 删除树
- tree/bigtree 普通橡木
