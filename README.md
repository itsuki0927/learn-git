# GIT 学习笔记

## 三棵树 Three trees

### 工作区

写代码的文件目录

### 暂存区

git add 工作区的变更内容 -> 暂存区

### 仓库

git commit 暂存区的变更内容 -> 仓库

## 比较操作 diff

- `git diff` 比较工作区与暂存区的差异

- `git diff --cached` 比较暂存区与仓库的差异

## 提交操作 commit

- `git commit -m xxxx` 提交更新
- `git commit -a -m xxxx` 跳过使用暂存区域提交更新

## 移除操作 rm

- `git rm <fileName></fileName>` 删除文件(需要在暂存区,会删除文件)
- `git rm --force <fileName>` 移除之前修改过/已经放到暂存区的文件(会删除文件)
- `git rm --cached <fileName>` 移除暂存区文件(保存在磁盘,并不想让 Git 继续跟踪)
- `git rm -r dirName` 删除文件夹(需要在暂存区)

## 重命名操作 mv

- `git mv oldFileName newFileName` 重命名文件

## 查看操作 log

- `git log` 查看版本
- `git log -p -number` 查看(每次/-number)提交所引入的差异
- `git log --stat` 查看每次提交的简略信息

  **常用选项**
  | 选项 | 说明 |
  | :-------------: | :---------------------------------------------------------------------------------------------------------: |
  | -p | 按补丁格式显示每个提交引入的差异。 |
  | --stat | 显示每次提交的文件修改统计信息。 |
  | --shortstat | 只显示 --stat 中最后的行数修改添加移除统计。 |
  | --name-only | 仅在提交信息后显示已修改的文件清单。 |
  | --name-status | 显示新增、修改、删除的文件清单。 |
  | --abbrev-commit | 仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。 |
  | --relative-date | 使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。 |
  | --graph | 在日志旁以 ASCII 图形显示分支与合并历史。 |
  | --pretty | 使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定义自己的格式）。 |
  | --oneline | `--pretty=oneline --abbrev-commit` 合用的简写。 |

[更多 log 配置文档](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)

## 撤销操作 reset

- `git commit --amend` 重新提交(漏掉了几个文件没有添加,或者提交信息写错了,第二次提交将替换第一次提交的结果)

- `git reset HEAD <fileName>` 取消暂存区的文件

- `git checkout -- <fileName>` 撤销对文件的修改,将它还原成上次提交的样子

## 远程仓库 Remote

- `git remote -v` 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL

- `git remote add <remoteName> <url>` 添加远程仓库

- `git remote show <remote>` 查看某个远程仓库

- `git remote rename <oldRemoteName> <newRemoteName>` 远程仓库重命名

- `git remote remove <remoteName>` 远程仓库移除

- `git fetch <remote>` 访问远程仓库，从中拉取所有你还没有的数据

- `git push <remoteName> <branchName>` 推送到远程分支

## 打标签 Tag

### 基本概念

Git 支持两种标签: 轻量标签与附注标签

### 轻量标签

像一个不会改变的分支 -- 它只是某个特定提交的引用

### 附注标签

存储在 Git 数据库中的一个完整对象,它们是可以被校验的.

### 命令

- `git tag` 列出已有标签

- `git tag <tagName>` 创建轻量标签

- `git tag -a <tagName> -m <message>` 创建附注标签

- `git tag -a <tagName> <hashCode>` 给指定 commit 打标签

- `git show <tagName>` 查看指定标签

- `git push <remoteName> --tags` 将全部标签推送到远程仓库

- `git push <remoteName> --delete <tagName>` 删除远程标签

- `git tag -d <tagName>` 删除指定标签

- `git push <remoteName> <tagName>` 将指定标签推送到远程仓库

## 分支 Branch

### merge

merge: 合并分支会让两个分支的每一次提交都按照提交时间排序,并且会将两个分支的最新一次 commit 点进行合并成一个新的 commit,
最终的分支树呈现非整条线性直线的形式

### rebase 变基

变基: 当前执行 rebase 分支的所有基于原分支提交点之后的 commit 打散成一个个的 patch,
并重新生成一个新的 commit hash 值,再次基于原分支目前的最新 commit 点上进行提交,
并不根据两个分支上实际的每次提交的时间点排序,rebase 完成后,
切到基分支进行合并到另一个时也不会生成一个新的 commit 点,可以保持整个 Git 状态树的完美线性

![rebaseImage](https://git-scm.com/book/en/v2/images/basic-rebase-2.png)

原理: 首先找到这两个分支(当前分支`experiment`,变基操作的目标基底分支`master`)的最近共同祖先`C2`,
然后对比当前分支相对于该祖先的历次提交,提交相对应的修改并存为临时文件,然后将当然分支执行目标基底`C3`,
最后以此将之前另存为临时文件的修改依序应用.

简而言之: 这里就是提取`C4`中引入的补丁和修改,然后在`C3`的基础上应用一次.

### 命令

- `git branch <branchName>` 创建分支

- `git branch` 列出所有分支(--merged 已经合并分支/--no-merged 未合并分支)

- `git branch -d <branchName>` 删除指定分支

- `git checkout -b <branchName>` 创建并切换到该分支

- `git checkout <branchName>` 切换到指定分支

- `git merge <branchName>` 合并到当前分支

## 储藏 Stash

### 基本概念

保存当前工作进度，会把暂存区和工作区的改动保存起来

### 命令

- `git stash`、`git stash push` 推送 stash 到 stash 栈

- `git stash -u/--include-untracked` 贮藏已修改、暂存的已跟踪文件和**未跟踪文件**

- `git stash push -m <message>` 添加到 stash 栈,并加一个 message

- `git stash list` 查看 stash 栈

- `git stash apply` 应用最上层 stash

- `git stash apply <stashName>` 应用指定 stash

- `git stash apply --index`

- `git stash pop` 移除栈顶 stash

- `git stash drop <stashName>` 移除指定 stash

- `git stash clear` 清空 stash 栈

- `git stash branch <branchName>` 用 stash 的修改创建一个新的分支,创建成功后删除此 stash

- `git stash branch <branchName> <stashName>` 指定 stashName 的修改创建一个新的分支,创建成功后删除此 stash
