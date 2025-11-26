---
title: 沙拉翻译
titleTemplate: 关于
layout: doc
editLink: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const emailIcon = '<svg viewBox="0.48 0.48 23.04 23.04"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
const moneyIcon = '<svg viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-9v-1h3v-2h-2.586l2.122-2.121-1.415-1.415L12 8.586 9.879 6.464 8.464 7.88 10.586 10H8v2h3v1H8v2h3v2h2v-2h3v-2h-3z"></path></svg>'

const members = [
  {
    avatar: 'https://www.github.com/allentown521.png',
    name: 'Allentown',
    title: '发起者',
    links: [
      { icon: 'github', link: 'https://github.com/allentown521' },
      { icon: {svg: emailIcon }, link:'mailto: product@saladict.net' },
      { icon: {svg: moneyIcon }, link:'https://ko-fi.com/focusapps' }
    ]
  }
]
</script>

# 关于
## 关于 Focus Apps

Focus Apps 是一个充满创新精神的软件开发团队。我们始于Android平台，拓展至iOS，并不断突破边界，现已涵盖Web平台和Chrome浏览器扩展。我们坚信：科技应该让生活更简单，让工作更高效，让学习更轻松。

### Android 平台

- [**FocusReader**](https://play.google.com/store/apps/details?id=allen.town.focus.reader): 重新定义RSS阅读体验，支持Feedly、Inoreader、FreshRSS等多个主流RSS平台，让信息获取更智能、更高效
- [**Focust**](https://play.google.com/store/apps/details?id=allen.town.focus.twitter): 突破界限的Twitter/X客户端，为你带来更纯粹的社交体验
- [**FocusRed**](https://play.google.com/store/apps/details?id=allen.town.focus.red): 重新构想的Reddit浏览体验，让内容发现充满乐趣

### iOS 平台

- [**FocustTwitter**](https://apps.apple.com/us/app/focusx-for-twitter/id6450184089): 轻盈但强大的Twitter/X客户端，完美平衡功能与简约
- [**FocusReddit**](https://apps.apple.com/us/app/focus-for-reddit/id6453024842): 精心打造的Reddit客户端，让浏览变得轻松自如

### Web 平台

- [**AIChatOne**](https://aichatone.app): 革命性的AI对话平台，支持多AI协同，激发无限可能，帮助你获得最优质的答案

### 浏览器扩展

- [**Saladict**](https://saladict.aichatone.com): 突破语言藩篱的翻译利器，支持划词、查词、网页和PDF翻译，让学习和工作不再有语言障碍
- [**DF Tube**](https://chromewebstore.google.com/detail/df-tube-new-distraction-f/kchgllkpfcggmdaoopkhlkbcokngahlg): 重塑你的YouTube体验，专注于真正重要的内容
- [**Marinara**](https://chromewebstore.google.com/detail/marinara-new-%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95%EF%BC%88pomodo/eandalcihlejmcokgmmbkaopglpfncbo): 智能番茄工作法助手，让时间管理更科学，效率更上一层楼
- [**Rofocus**](https://chromewebstore.google.com/detail/rofocus-new-increase-your/ngdnagmkbllpeiihbiojaeiopffnknna): 打造专属你的专注空间，用环境音效和音乐提升工作效率
- [**CoffeeLings**](https://chromewebstore.google.com/detail/coffeelings-new/giijdhhgccgcdpfkkdagemjgeepdfpgb): 优雅简约的心情日志，让每一天都被温柔记录

## 我们的愿景

在Focus Apps，我们立志成为数字时代的引航者。我们期望：

- 创造改变生活的数字工具，让科技真正服务于人
- 用创新重新定义效率与专注的可能
- 打造一个更智能、更互联、更富有人性化的数字世界

## 我们的使命

我们矢志不渝地：

- 持续创新，打造卓越的用户体验
- 用科技解决实际问题，让复杂变简单
- 始终倾听用户声音，不断进化和改进
- 坚持高品质的工程标准，确保产品可靠性
- 让每一款产品都成为用户日常生活中不可或缺的伙伴

## 加入我们的旅程

每一款Focus Apps产品都承载着我们对完美的追求。我们邀请你：

- 探索我们的产品，发现效率与乐趣的新可能
- 加入我们的用户社区，分享你的想法和建议
- 成为变革的一部分，与我们一起定义科技的未来

让我们携手，用科技的力量，创造更美好的数字生活体验。
## 我们的团队成员

<VPTeamMembers size="small" :members="members" />

## 更多贡献者

<a href='https://github.com/allentown521/saladict/graphs/contributors' target='_blank'><img src='https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true' alt='贡献者' style='width: 100%' /></a>
