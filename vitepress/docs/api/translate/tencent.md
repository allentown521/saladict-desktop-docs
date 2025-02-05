---
title: Saladict
titleTemplate: 腾讯翻译君
---

# 腾讯翻译君

:::info
文档内容可能会过时，请以腾讯云平台官网说明为准。
:::

## 价格

每月的前 500 万字符免费，超出的部分会按照 58 元 / 百万字符收取费用，费用由腾讯翻译在它自己的腾讯云官方网站收取，与 沙拉翻译 无关。

由于付费版是按月计费的，这意味着在一个自然月内即使已经用完了免费额度，腾讯云也会继续扣费，直到下月初结算时才会有提醒，所以请密切关注当月使用量。如果你希望在腾讯云每月扣款时得到通知，那么建议前往腾讯云的费用中心充值 1 元，然后设置费用预警为 1 元，这样当月扣款时会给出提示。

## 申请步骤

### 第一步：进行个人认证

在使用腾讯云机器翻译之前，需要进行个人认证。已经认证过的用户可以跳过这个步骤。

打开腾讯云官网并登录，登录成功后，鼠标移动到页面右上角的头像上，选择【账号信息】进行个人认证。

![1](./asset/tencent1.png)

由于我已经认证过了，所以没法继续往下截取认证步骤。大概步骤就是会让你选择认证类型，选择【个人认证】，然后按照要求填写个人信息即可。

### 第二步：开通腾讯云机器翻译服务

打开腾讯云机器翻译服务介绍，点击【立即使用】按钮。登录之后，会进入腾讯机器翻译服务控制台。

第一次进入会让你选择是开通付费版还是试用版，如下图：

![2](./asset/tencent2.png)

自 2022 年 4 月 28 日起，腾讯翻译君不再提供【免费试用】的选项，所以目前能且只能选择【开通付费版】。

### 第三步：创建访问密钥

开通之后，将鼠标悬停在网页右上角的头像上，然后选择访问管理，然后在左侧菜单选择访问密钥 - API 密钥管理，进入之后会有一个弹窗提示：

![3](./asset/tencent3.png)

简单点说就是在这里创建的密钥可以调用你账号里的所有腾讯云资源，为了保险起见，最好是创建一个子账号，然后只给这个子账号分配机器翻译服务，最后使用子账号创建密钥，这样会更安全。

<details><summary>使用主账号创建密钥（更便捷，但不太保险）</summary>
<p>

选择【继续使用】，然后点击【新建密钥】按钮，表格里就会添加新的密钥，如下图：
![4](./asset/tencent4.png)

</p>
</details>

<details><summary>使用子账号创建密钥（更安全，但步骤繁琐）</summary>
<p>

选择【切换使用子账号密钥】，会跳转到新建用户页面，选择自定义创建，接下来有四个步骤。

第一步：选择类型

选择【可访问资源并接收消息】，然后点击【下一步】。

第二步：填写用户信息

设置用户信息：填写用户名，备注填写“供 沙拉翻译 - 腾讯翻译君使用”。
访问方式：勾选【编程访问】。
可接收消息类型：我全都取消选择了，你可以看情况选择。
完成之后点击【下一步】。

第三步：设置用户权限

搜索“机器翻译”，勾选【QcloudTMTFullAccess（机器翻译（TMT）全读写访问权限）】这一项即可，然后点击【下一步】。

第四步：审阅信息

这一步只需要点击【完成】按钮即可，然后就会看到这个子账户的【SecretId】和【SecretKey】，如下图：
![5](./asset/tencent5.png)

</p>
</details>

### 第四步：将密钥填写进 沙拉翻译 当中

将刚才创建的【SecretId】和【SecretKey】填写进 沙拉翻译 的【设置页】-【接口设置】-【腾讯翻译君密钥 ID】和【腾讯翻译君密钥值】即可。

## 相关链接

[腾讯云机器翻译服务介绍](https://curl.qcloud.com/Ykn2htRP)

[腾讯云机器翻译服务定价文档](https://curl.qcloud.com/JAXtzpXl)
