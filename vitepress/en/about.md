---
title: Saladict
titleTemplate: About
layout: doc
editLink: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const emailIcon = '<svg viewBox="0.48 0.48 23.04 23.04"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
const moneyIcon = '<svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 100-5h-4a.5.5 0 110-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 000 5h4a.5.5 0 110 1H8.5z"></path></svg>'

const members = [
  {
    avatar: 'https://www.github.com/allentown521.png',
    name: 'Allentown',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/allentown521' },
      { icon: {svg: emailIcon }, link:'mailto: product@saladict.net' },
      { icon: {svg: moneyIcon }, link:'https://ko-fi.com/focusapps' }
    ]
  }
]
</script>

# About
## About Focus Apps

Focus Apps is an innovative software development team. We started on the Android platform, expanded to iOS, and continuously pushed boundaries, now covering the Web platform and Chrome browser extensions. We firmly believe that technology should make life simpler, work more efficient, and learning easier.

### Android Platform

- [**FocusReader**](https://play.google.com/store/apps/details?id=allen.town.focus.reader): Redefining the RSS reading experience, supporting major RSS platforms like Feedly, Inoreader, and FreshRSS, making information retrieval smarter and more efficient.
- [**Focust**](https://play.google.com/store/apps/details?id=allen.town.focus.twitter): A boundary-breaking Twitter/X client that brings you a purer social experience.
- [**FocusRed**](https://play.google.com/store/apps/details?id=allen.town.focus.red): A reimagined Reddit browsing experience that makes content discovery enjoyable.

### iOS Platform

- [**FocustTwitter**](https://apps.apple.com/us/app/focusx-for-twitter/id6450184089): A lightweight yet powerful Twitter/X client that perfectly balances functionality and simplicity.
- [**FocusReddit**](https://apps.apple.com/us/app/focus-for-reddit/id6453024842): A meticulously crafted Reddit client that makes browsing effortless.

### Web Platform

- [**AIChatOne**](https://aichatone.app): A revolutionary AI conversation platform that supports multi-AI collaboration, sparking infinite possibilities and helping you get the best answers.

### Browser Extensions

- [**Saladict**](https://saladict.aichatone.com): A translation tool that breaks language barriers, supporting word selection, lookup, webpage, and PDF translation, making learning and work free from language obstacles.
- [**DF Tube**](https://chromewebstore.google.com/detail/df-tube-new-distraction-f/kchgllkpfcggmdaoopkhlkbcokngahlg): Reshape your YouTube experience, focusing on what truly matters.
- [**Marinara**](https://chromewebstore.google.com/detail/marinara-new-%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95%EF%BC%88pomodo/eandalcihlejmcokgmmbkaopglpfncbo): An intelligent Pomodoro technique assistant that makes time management more scientific and efficient.
- [**Rofocus**](https://chromewebstore.google.com/detail/rofocus-new-increase-your/ngdnagmkbllpeiihbiojaeiopffnknna): Create your own focus space, enhancing work efficiency with ambient sounds and music.
- [**CoffeeLings**](https://chromewebstore.google.com/detail/coffeelings-new/giijdhhgccgcdpfkkdagemjgeepdfpgb): An elegant and minimalist mood journal that gently records each day.

## Our Vision

At Focus Apps, we aspire to be the navigators of the digital age. We aim to:

- Create digital tools that change lives, making technology truly serve people.
- Redefine the possibilities of efficiency and focus through innovation.
- Build a smarter, more interconnected, and more human-centered digital world.

## Our Mission

We are unwavering in our commitment to:

- Continuously innovate and create an exceptional user experience.
- Solve real problems with technology, making the complex simple.
- Always listen to user feedback, evolving and improving.
- Adhere to high engineering standards, ensuring product reliability.
- Make every product an indispensable part of users' daily lives.

## Join Our Journey

Every Focus Apps product embodies our pursuit of perfection. We invite you to:

- Explore our products and discover new possibilities of efficiency and enjoyment.
- Join our user community to share your thoughts and suggestions.
- Be part of the change and help us define the future of technology.

Let us work together to harness the power of technology and create a better digital life experience.
## Our team members

<VPTeamMembers size="small" :members="members" />

## More contributors

<a href='https://github.com/allentown521/saladict/graphs/contributors' target='_blank'><img src='https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true' alt='contributors' style='width: 100%' /></a>
