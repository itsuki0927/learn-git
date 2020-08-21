# GIT 学习笔记

## 比较操作

- `git diff --cached` 比较缓存区的变化

## 提交操作

- `git commit -m xxxx` 提交更新
- `git commit -a -m xxxx` 跳过使用暂存区域提交更新

## 移除操作

- `git rm <fileName></fileName>` 删除文件(需要在暂存区,会删除文件)
- `git rm --force <fileName>` 移除之前修改过/已经放到暂存区的文件(会删除文件)
- `git rm --cached <fileName>` 移除暂存区文件(保存在磁盘,并不想让 Git 继续跟踪)
- `git rm -r dirName` 删除文件夹(需要在暂存区)

## 重命名操作

- `git mv oldFileName newFileName` 重命名文件

## 查看操作

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

## 撤销操作

- `git commit --amend` 重新提交(漏掉了几个文件没有添加,或者提交信息写错了,第二次提交将替换第一次提交的结果)

- `git reset HEAD <fileName>` 取消暂存区的文件

- `git checkout -- <fileName>` 撤销对文件的修改,将它还原成上次提交的样子

## 远程仓库

- `git remote -v` 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL

- `git remote add <remoteName> <url>` 添加远程仓库

- `git remote show <remote>` 查看某个远程仓库

- `git remote rename <oldRemoteName> <newRemoteName>` 远程仓库重命名

- `git remote remove <remoteName>` 远程仓库移除

- `git fetch <remote>` 访问远程仓库，从中拉取所有你还没有的数据

- `git push <remoteName> <branchName>` 推送到远程分支

## 打标签

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
