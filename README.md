# GIT 学习笔记

- `git diff --cached` 比较缓存区的变化
- `git commit -m xxxx` 提交更新
- `git commit -a -m xxxx` 跳过使用暂存区域提交更新
- `git rm fileName` 删除文件(需要在暂存区,会删除文件)
- `git rm --force fileName` 移除之前修改过/已经放到暂存区的文件(需要在暂存区,会删除文件)
- `git rm --cached fileName` 移除暂存区文件(保存在磁盘,并不想让 Git 继续跟踪)
- `git rm -r dirName` 删除文件夹(需要在暂存区)
- `git mv oldFileName newFileName` 重命名文件
