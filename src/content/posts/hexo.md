---
title: Hexo+GithubPages部署博客
published: 2026-01-12
description: 深入了解如何使用Hexo框架+Github Pages搭建一个属于你的个人博客，新手必看系列
image: api
tags:
  - 博客
  - 使用指南
  - Hexo
  - GithubPages
category: 文章示例
draft: false
lang: ""
pinned: false
---

# 使用HEXO + Github Pages搭建个人博客

## 功能特点

- 无需服务器
- 免费
- 主题，插件很多
- 开源社区 Hexo用户群体多 便于讨论或提出问题

# Step.1

## 下载node.js，git

此处跳过

# Step.2

## 下载Hexo并配置

确保nodejs git安装成功后，下载Hexo [Hexo官网](https://hexo.io/zh-cn/index.html)


先创建一个新的文件夹hexo，用于存放hexo相关文件

然后根据指令，输入

```bash
$ npm install hexo-cli -g #用于安装hexo 如果你有经验，可以使用 hexo库安装部分组件
```

确保没有出现error报错，进行下一步

```bash
$ hexo init blog
```

这一步默认从github上下载blog资源，慢是正常的，挂梯子会更快

没有出现报错，继续下一步

```bash
$ cd blog #进入blog目录
$ npm install #确保没有报错
$ hexo server #可缩写 hexo s
```

之后使用命令行中的链接打开，打开成功？

恭喜你，你成功搭建了一个属于自己的个人博客

好的。接下来让我们更近一步！
## 目录
- [前置准备](#前置准备)
- [环境安装](#环境安装)
- [创建Hexo项目](#创建hexo项目)
- [配置Hexo](#配置hexo)
- [配置GitHub Pages](#配置github-pages)
- [部署博客](#部署博客)
- [常用命令](#常用命令)
- [主题配置](#主题配置)
- [自定义域名](#自定义域名)

## 前置准备

### 1. 注册GitHub账号
- 访问 [GitHub官网](https://github.com)
- 点击"Sign up"注册新账号
- 记住用户名，将用于生成博客地址

### 2. 创建GitHub仓库
- 登录GitHub后，点击右上角"+" → "New repository"
- 仓库名格式：`用户名.github.io`
- 例如：用户名为`john`，则仓库名为`john.github.io`
- 选择"Public"，勾选"Add a README file"

## 环境安装

### 1. 安装Node.js
```bash
# Windows/macOS用户
# 访问 https://nodejs.org 下载LTS版本安装

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证安装
node -v
npm -v
```

### 2. 安装Git
```bash
# Windows: 下载 https://git-scm.com/download/win
# macOS: brew install git
# Ubuntu/Debian: sudo apt install git

# 验证安装
git --version
```

### 3. 配置Git
```bash
# 设置用户信息
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"

# 生成SSH密钥
ssh-keygen -t rsa -b 4096 -C "你的邮箱"
# 将公钥添加到GitHub
cat ~/.ssh/id_rsa.pub
```

## 创建Hexo项目

### 1. 安装Hexo CLI
```bash
npm install -g hexo-cli
```

### 2. 初始化博客
```bash
# 创建博客目录
hexo init my-blog
cd my-blog

# 安装依赖
npm install

# 启动本地服务器
hexo server
# 访问 http://localhost:4000 查看效果
```

## 配置Hexo

### 1. 基本配置（_config.yml）
```yaml
# Site
title: 你的博客标题
subtitle: 博客副标题
description: 博客描述
keywords: 关键词1, 关键词2
author: 你的名字
language: zh-CN
timezone: Asia/Shanghai

# URL
url: https://用户名.github.io
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code

# Writing
new_post_name: :title.md
default_layout: post

# Extensions
theme: landscape  # 默认主题

# Deployment
deploy:
  type: git
  repo: https://github.com/用户名/用户名.github.io.git
  branch: main
```

### 2. 安装部署插件
```bash
npm install hexo-deployer-git --save
```

## 配置GitHub Pages

### 1. 设置仓库
1. 进入仓库设置：Settings → Pages
2. Source选择：Deploy from a branch
3. Branch选择：main
4. 文件夹选择：/(root)
5. 点击Save

### 2. 检查Pages状态
- 访问 `https://用户名.github.io`
- 初次部署需要几分钟生效

## 部署博客

### 1. 生成静态文件
```bash
# 清理旧文件
hexo clean

# 生成新文件
hexo generate
# 或简写
hexo g
```

### 2. 部署到GitHub
```bash
# 部署命令
hexo deploy
# 或简写
hexo d

# 组合命令（常用）
hexo clean && hexo g && hexo d
```

### 3. 验证部署
- 访问 `https://用户名.github.io`
- 查看博客是否正常显示

## 常用命令

### 创建新文章
```bash
hexo new "文章标题"
# 简写
hexo n "文章标题"
```

### 创建新页面
```bash
hexo new page about
# 会在source/about/index.md创建关于页面
```

### 本地预览
```bash
hexo server
# 简写
hexo s
# 指定端口
hexo s -p 8080
```

### 草稿功能
```bash
# 创建草稿
hexo new draft "草稿标题"

# 预览草稿
hexo server --draft

# 发布草稿
hexo publish "草稿标题"
```

## 主题配置

### 1. 安装主题（以NexT为例）
```bash
cd my-blog
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

### 2. 启用主题
```yaml
# _config.yml中修改
theme: next
```

### 3. 配置主题
- 复制主题配置：`cp themes/next/_config.yml _config.next.yml`
- 修改`_config.next.yml`进行自定义配置

### 4. 推荐主题
- Next: https://github.com/theme-next/hexo-theme-next
- Butterfly: https://github.com/jerryc127/hexo-theme-butterfly
- Fluid: https://github.com/fluid-dev/hexo-theme-fluid

## 自定义域名

### 1. 购买域名
- 在阿里云、腾讯云等平台购买域名

### 2. 添加CNAME文件
```bash
# 在source目录创建CNAME文件
echo "你的域名.com" > source/CNAME
```

### 3. 配置DNS
```
记录类型：CNAME
主机记录：www
记录值：用户名.github.io
```

### 4. 更新GitHub Pages设置
1. 进入仓库Settings → Pages
2. 在Custom domain填入你的域名
3. 勾选Enforce HTTPS

## 故障排除

### 常见问题
1. **页面404错误**
   - 检查仓库名是否正确
   - 等待几分钟让GitHub Pages生效

2. **部署失败**
   ```bash
   # 检查Git配置
   git config --list
   
   # 重新安装部署插件
   npm uninstall hexo-deployer-git
   npm install hexo-deployer-git
   ```

3. **样式丢失**
   ```bash
   # 清理缓存重新生成
   hexo clean && hexo g
   ```

### 获取帮助
- Hexo官方文档：https://hexo.io/zh-cn/docs/
- GitHub Pages文档：https://docs.github.com/pages
- 主题文档：查看各主题的GitHub仓库

---

## 后续优化建议

### 1. SEO优化
- 添加sitemap插件
- 配置robots.txt
- 添加Google Analytics

### 2. 功能增强
- 安装评论系统（评论系统类型: twikoo, waline, giscus(github discussions), disqus, artalk都很不错）
- 添加搜索功能
- 配置RSS订阅

### 3. 自动化部署
- 使用GitHub Actions自动部署
- 配置Travis CI持续集成

**提示**：每次修改配置后，记得运行`hexo clean && hexo g && hexo d`重新部署。