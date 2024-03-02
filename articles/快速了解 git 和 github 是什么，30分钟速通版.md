---
tag: 'markdown'
date: '2024/3/2'
---

# 安装 git
安装git和安装node、qq这种软件是一样的，到官网去下载安装就好了，记得选择正确的版本，mac和win需要下载的版本是不一样的。
- [git下载页面](https://git-scm.com/download)

# 配置 git
熟悉环境变量的小伙伴应该了解这一步的重要性，如果没有相关经验也不要紧，配置git可以暂时理解成类似qq的登录，这个登录也是有记住密码自动登录选项的。

使用这2个命令来配置你的身份(名称和邮箱)
- git config --global user.name "woshishei"
- git config --global user.email woshishei@example.com

这个命令在终端输入，这里需要了解一下终端如何使用：打开你的终端可以看见 `C:\` 这样的路径，这就相当于，你打开了这个 `C:\` 文件夹；

当你在终端输入指令 `mkdir 新建文件夹`，首先会在你这个路径下操作，也就是创建了一个文件夹，他的路径是 `C:\新建文件夹`，接下来git初始化仓库等等，也是在你终端所在路径操作的；

注意到上面的指令有一个 `--global`，这个指令是对git进行全局配置，他就会把你的名字和邮箱存在git自己管理的某个区域，如果不写 `--global`，那就是控制你当前所在文件夹下的git仓库的信息了。

# 第一个 git 仓库
- 通过命令 `git init` 可以把当前文件夹变成一个仓库，不需要联网你就可以使用大部分的功能。
- 或者找到别人的项目，通过另一个命令获取开源仓库代码，比如 `git clone https://github.com/nesb01t/RPALite.git`，这样就会把代码下载下来，同时也已经是一个 git 仓库。

这样操作获得的2种仓库，在本地都可以使用绝大部分功能，到这里你应该已经学会了如何下载别人的开源代码了。

# git 基本功能 / 本地仓库
接下来介绍一个文件跟踪的概念，git 版本管理会追踪文件，通过追踪后续你进行的修改/删除/创建等操作，来定义不同的版本。

比如今天你写了version1.0，明天写了version1.2，git 就会发现，1.0到1.2进行了哪些更改？git 追踪的是这些文件的变动。
- 跟踪文件: git add [name]
- 取消跟踪: git rm [name]
- 保留在目录但不被跟踪: git rm --cache [name]

## add 修改跟踪文件并放入暂存区
随后，当你修改了 `跟踪中` 的文件，文件便会进入 `已修改` 状态；

此时再输入 **git add [name]**，他就会变成 `已暂存` 状态，并自动放入 git 的暂存区。

如果你手滑了，也可以输入 **git reset HEAD [name]**，就恢复 `已修改` 状态了。

此时我们注意到，一个 git 仓库里实际上有4种类型的文件：
1. 未跟踪：和 git 仓库没有任何关系的文件
2. 未修改：被跟踪的文件，但并没有参与修改
3. 已修改：和上个版本不同的文件，也就是经过修改了
4. 暂存：在暂存区，等待提交到新版本的文件
## commit 提交暂存区，产生新版本
那么怎么提交暂存区的代码呢？使用命令 **git commit** 提交暂存，此时会有几个可能：
- 如果你用的是vscode集成的git工具，他会让你直接在框里输入本次提交的信息
- 如果你用的是git bash或者终端，会进入vim模式输入本次提交的信息，重点介绍一下如何用vi/vim来提交：
    1. 按 **i** 键进入输入模式
    2. 输入本次提交的信息
    3. 按 **Esc** 键，然后按 **冒号-w-q**
- 你也可以用 **git commit -m "提交的信息"** 来避免上面2个可能的发生，对于初学者来说vi/vim可能会比较别扭，这里推荐直接使用 **git commit -m "提交的信息"**
```bash
PS E:\CloudShip> git commit -m "Test"
[backend-dev 97a49ef] Test
 1 file changed, 1 insertion(+)
```
如果你手滑了，输入 **git reset HEAD~ --soft** 就可以撤回这次提交

你可能会有疑问，这个reset是什么，head又是什么，暂时先记住前面的命令的功能，涉及到的内容后面会深入讲。

## status 查看文件的修改和暂存状态
输入 **git status** 你就可以看到当前有哪些文件被修改过了：
- 显示的红色文件代表：修改但没暂存
- 显示的绿色文件代表：暂存但没提交
```bash
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   backend/controller/auth.js
```
## diff 查看已修改而未进入暂存区的文件状态
上面的 **diff** 指令可以看哪些文件有变动；
而使用命令 **git diff** 可以看到 `已修改/未进入暂存区` 的文件里面具体到每一行的变动。
```bash
diff --git a/backend/controller/auth.js b/backend/controller/auth.js
index 0bb29d4..71e2806 100644
--- a/backend/controller/auth.js
+++ b/backend/controller/auth.js
@@ -36,6 +36,7 @@ class AuthController {
       ctx.status = 200;
       ctx.body = "creating new account";
       return;
+      return;
     }
```
## log 查看过去的提交日志
输入命令 **git log** 可以查看历史的提交记录，比如：
```bash
commit d56ba11a294d229a0993facc2591a720faa04274 (HEAD -> backend-dev)
Author: nesb01t <nesb01t@hotmail.com>
Date:   Sat Apr 15 12:23:11 2023 +0800

    test
```

这里 commit 后面的 **d56ba11a294d229a0993facc2591a720faa04274** 是一个哈希值，是唯一的，我们可以通过这个哈希值找到我们本次的一个提交；

下面则包含了作者，日期，提交时输入的信息。

通过 **git log --pretty=oneline** 可以美化我们的输出到一行，还可以自定义格式等等，请自行查阅：
```bash
791fd226f01affae4c4e6224b8760dd5799622ac update List
43e319e0fcb412c19dccc0c832ac35352a75af3b Merge pull request #35 from Nesb01t/frontend-yjh
5911ab7f3b62dea34051803ef745c59db1fceb06 Merge pull request #34 from Nesb01t/backend-dev
bdd956e133fe0a5de6b92f374a99b78385cb5b53 Update 第一周
a5132f098fbae9a7d0888818b9eedbfc1b5d90b9 Merge pull request #33 from Nesb01t/frontend-yjh
2c983d840864dd099c49e54d029c38bf41bab01b Login and studentinfo
```
# git 远程仓库
首先你需要准备一个 github / gitee 账号，这个 github / gitee 属于 `代码仓库托管平台`，git 的出现让程序员之间的协作变得更加容易，因为我们可以远程在同一段代码上进行不同的工作，最后再合并代码，这个 github / gitee 就是用来保存这坨代码的地方，而 git 是这个平台工作的核心机制。

打开 github 平台，点击 **new repository** 就可以新建一个仓库。

完成必要信息的填写后，注意选择 **Public** 就是开源，接下来你的代码将能被所有人看见，共享给 github 平台上的每一位用户。

创建成功以后，你的仓库就会获得一个专属的链接，比如 `https://github.com/nesb01t/RPALite.git`

## remote 链接远程仓库
- 输入 **git remote** 可以查看现在有哪些远程仓库链接。
- 通过命令 **git remote add [name] [link]** 可以添加远程仓库链接，比如 `git remote add origin  https://github.com/nesb01t/RPALite.git`
- 通过命令 **git remote rename [name] [newName]** 可以更改远程仓库名字

## push 推送代码到远程仓库
通过命令 **git push [remoteName] [branchName]** 可以将代码推送到远程仓库，比如 `git push origin master`，意思是推送到名为 **origin** 的仓库，推送的分支是 **master**，分支将会在后面进行更细的解释。

## [可选] 利用 ssh 公私钥进行远程鉴权
当你连接远程仓库进行登录时，可能遇到 `账号+密码` 无法使用的情况，这时候可以使用更方便并且更安全的 ssh 登录，这里篇幅较多，暂时不展开讲，请感兴趣的小伙伴自行尝试 google 研究~

# git 分支管理

## 分支的概念
每次我们进行 commit 提交活动，都会产生一个哈希值，类似这样 `39a14`，`92c8a` 的值，代表了你某次提交的整个对象；

分支就是包含了这个哈希值的文件，也可以简单理解成 **指向某个提交对象的指针**；

当我们初始化仓库时，也就新建了一个 **master** 分支；
第二次提交时，**master** 分支也就跟着一起进行向前的移动！

## 新分支的产生
当我们新建一个分支 **newBranch**，在这个新建的分支上进行修改，此时就会形成2个不同的分支，一个是**master**，另一个是**newBranch**；

## 分支模型中，常见的流模型
一般有这么几个分支：
- master - 主分支，比如1.0 -> 1.0.1 -> 1.1
- hot fixes - 修复bug分支
- release - 推动版本前进的运行分支
- develop - 构成release的开发分支
- feature - 构成develop的小特性更新分支

这几个分支从下往上一层层汇到一起，形成了分支模型，比如：
- 从1.0作为起始点，分出了develop分支进行1.1版本的开发，同时分出了hot fixes进行1.0版本的bug修复，随后合并到master分支产生了1.0.1版本；
- 从1.0分出的develop分支，里面产生了多个feature分支，合并到一起的develop分支最终汇总到一起形成一个release，待release成熟以后合并到master分支产生了1.1版本；

## log 查看分支
```bash
commit ab829b0e37904181952f37cdddf9169b1697efae (HEAD -> master, origin/master)
Author: nesb01t <nesb01t@hotmail.com>
Date:   Mon Apr 17 17:24:06 2023 +0800

    Update 4月16更新
```
当你输入 **git log**，这个括号里就是我们的分支，会发现我们在 **master** 分支；

后面还有一个 **origin/master** 代表远程仓库上也是这个 **master** 分支；

这个 **HEAD** 的意思是我们现在在这个 **master** 分支上，而不是 **origin/master** 分支。

## status 查看分支
输入 **git status**，可以看见：
```bash
On branch master
Your branch is up to date with 'origin/master'.
```
代表我们现在在 **master** 分支上，和远端的 **origin/master** 同步；

## branch 查看分支
常用的是输入 **git branch** / **git branch --list** 来 `查看本地` 有哪些分支：
```bash
  backend-dev
* master
  origin
  ```
其中这个带 **星号** 的就是我们当前所在的分支~

## branch 创建分支
直接输入 **git branch newBranch1**，就 `创建` 了一个叫 newBranch1 的新分支；
```bash
  backend-dev
* master
  origin
  newBranch1
```
## checkout 切换分支
输入 **git checkout newBranch1**，就 `切换` 到了 newBranch1 分支；
此时输入 **git branch** 就可以看到现在切换成功了：
```bash
  backend-dev
  master
  origin
* newBranch1
```
另外输入 **git checkout -b newBranch2**，可以直接新建一个分支 `并切换` 到那个新建好的分支上~

## merge 合并分支
我想让 **master** 和 **Feature1** 进行合并，怎么操作呢？
1. 切换到 **master** 分支
2. 输入 ``git merge Feature1``

分支中的冲突：当2个分支同时修改了一个文件，即有可能产生冲突，一般提示为
```bash
Auto-merging <文件名>
CONFLICT (content): Merge conflict in test_file
Automatic merge failed; fix conflicts and then commit the result.
```
此时先输入 **git status** 确认哪里有冲突，``手动解决冲突`` 之后 **commit** 即可

## stash 暂存功能
当你的代码写到一半，需要回到 master 分支进行操作：此时你是无法直接切换的，因为你的工作目录中有被修改的文件！

你可以通过 **commit** 把现在写到一半的代码进行提交，但更好的方法是直接 **stash** 放置到暂存区

1. 当你代码写到一半，此时输入 **git checkout Feature1**，会提示在切换分支之前，请你 commit 或者 stash 代码；
2. 输入 git stash 之后即可暂存，此时你输入 **git status** 会发现目录是干净的，再 checkout 即可~
3. 当你完成，再回来怎么恢复呢？输入 **git stash apply** 即可恢复之前编辑的状态。

如果你保存了好几次，即输入了好几次 **git stash**，你可以通过 git stash list 来回看之前提交的几次 **stash** 暂存区代码。


# git 撤销操作
很多时候会遇到需要撤销操作，见下~
## reset 回弹
- **git reset head~** 文件已修改，但不再是暂存状态了
- **git reset head~ --soft** 暂存状态仍存在
- **git reset head~ --hard** 直接放弃数据，不推荐使用

## head 和 波浪线 ~
在指令 git reset head~ 中，head 指的是当前最新的一次提交，head~ 指的是 head 上一次的提交，同理可以使用 head~2 代表上上次的提交。

## rebase 变基
比如说我开发了A分支，同事开发了B分支，我们可以使用合并，也可以使用变基~
1. 切换到 B 分支
2. 输入 git rebase A
3. 此时就会把 B 分支的修改移动到 A 上

远程慎用，当你的同事在你上面盖第二层楼，你变基，等同事盖完有可能发现你这个第一层没了。

# 总结
多做项目上手操作，无他唯手熟尔
