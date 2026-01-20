---
title: 图片裂图？图床链接失效？你一定得知道的补救措施！
published: 2026-01-20
description: 图片裂图链接无法生效，看完教程你直接顿悟！
image: api
tags:
  - 博客
category:
draft: true
lang: ""
---
# 图片裂图？图床链接失效？你一定得知道的补救措施！

今天在使用 Markdown 发布文章时，突然发现上传到**图床图片裂图**（即图片无法正常加载）   
头脑风暴后发现问题所在
## 开启了IUAM?
**在使用 Cloudflare 等服务时开启了"I'm Under Attack Mode"**（IUAM）     
那么你的图片就会被 **Cloudflare 的防火墙**拦截导致无法显示，此时你若直接打开**图床提供的链接** 就会如图所示进入到5秒盾质询


![image.png](https://img.grushtom.com/file/1768907314771_image.png)
聪明的你立刻想到，一定是**质询界面**影响了图片读取！
## 为什么会出现裂图？

"**I'm Under Attack Mode**" 会对所有访问你站点的请求进行 **JS 验证**，它能够防止恶意 bot 访问，但是**不适用于 Markdown 渲染**的图片请求。这是因为：
- Markdown 渲染器无法执行 JS，导致**无法通过 Cloudflare 的安全检查**。
- 如果 Cloudflare 阻止了这些请求，你的图床图片就会显示不出来，造成裂图现象。

## 如何不关闭IUAM加载图片？

你不希望关闭 IUAM，但又想让图床图片正常加载，**最简单有效的方式**就是通过 **Cloudflare 自定义规则**来**白名单你的图床链接**。

### 1. 创建防火墙规则

在 Cloudflare 控制面板中，你可以为你的图床域名设置一个规则，跳过安全检查。
#### 步骤：

1. 进入 **Cloudflare Dashboard**，选择你的站点。
2. 进入 **Security** > **Security Rules** > **自定义规则**。
3. 点击 **添加规则 自定义规则**。
 ![image.png](https://img.grushtom.com/file/1768908137737_image.png)
#### 规则配置：
**解释一下**
主机名值 填写自己的图床地址 **如：xxx.xxx.com**
URI路径选择包括 填写自己的文件存储目录 **如：xxx.xxx.com/file/xxxxxx.png**那么就填写 */file/*即可

![image.png](https://img.grushtom.com/file/1768908341406_image.png)


2. 验证
无痕窗口测试：直接在浏览器中访问图片 URL，确保图片能够加载。
**Edge中 Ctrl+Shift+N快速开启无痕窗口**
Markdown 测试：在博客中插入图片并查看效果。

![Test Image](https://img.grushtom.com/file/1768904958375_ticket.png)

这样，你就能兼顾安全性和图床的可用性，无需妥协。
