---
title: Saladict
titleTemplate: DeepL
---

# DeepL

:::info

文档内容可能会过时，请以 DeepL 官网说明为准。
:::

## 价格

DeepL 的订阅类型分为两种：针对个人和团队和研发人员（DeepL API），Saladict 能且只能使用研发人员（DeepL API）。

研发人员（DeepL API）又分为两种：

- Free（推荐）：每个月提供 50 万免费字符，超出后则不能再使用，直到下个月刷新免费额度。
- Pro：没有免费额度。25 美元 / 一百万字符，且每月还需要额外支付 5.49 美元的订阅费。

注意：与国内的翻译服务不同，DeepL 的免费额度重置日期在月中，一般为每个月的 14 日。换句话说，当国内的翻译服务在每个月的第一天重置免费额度时，DeepL 已经用了 16 天了。

## 申请步骤

### 第一步：获取开通过 DeepL API 的账号

如果你想自己注册 DeepL 账号并开通 DeepL API，那么首先你需要有一张在 DeepL 支持的国家或地区发行的 VISA / MASTER 信用卡。DeepL 目前不支持使用国内发行的信用卡开通 DeepL API，鉴于此，我建议直接在网上购买开通了 DeepL API Free 的账号。

再次提醒，请确认你购买的是开通了研发人员（DeepL API）的账号，一般会标有“程序员”、“API Free”这样的字眼。

如果你有符合条件的信用卡，那么你可以自行在 DeepL 官网注册账号并开通 DeepL API。我暂时无法提供图文步骤，因为我也没有国外的信用卡 😂。

### 第二步：获取 Auth Key

当你有了开通过 DeepL API 的账号后：

1. 打开 https://www.deepl.com/zh/account/summary
2. 如果你没有登录，那么点击右上角的【登录】并登录你的账号。注意：可能需要关闭代理软件才能登录成功。
3. 登录账号后，往下翻就可以找到需要的 Auth Key 了。

### 第三步：将 Auth Key 填写进 Saladict

打开 沙拉翻译 的【设置页】-【接口设置】，找到【DeepL】填写即可。
