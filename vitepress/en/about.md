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
    avatar: 'https://www.github.com/pylogmon.png',
    name: 'Pylogmon',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Pylogmon' },
      { icon: {svg: emailIcon }, link:'mailto:pylogmon@saladict-app.aichatone.com' },
      { icon: {svg: moneyIcon }, link:'https://ko-fi.com/pylogmon' }
    ]
  },
  {
    avatar: 'https://www.github.com/ccslykx.png',
    name: 'Ccslykx',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/ccslykx' },
      { icon: {svg: emailIcon }, link:'mailto:ccslykx@saladict-app.aichatone.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/xtyuns.png',
    name: 'xtyuns',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/xtyuns' },
      { icon: {svg: emailIcon }, link:'mailto:xtyuns@saladict-app.aichatone.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Layouwen.png',
    name: 'Avan',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/Layouwen' },
      { icon: {svg: emailIcon }, link:'mailto:avan@saladict-app.aichatone.com' }
    ]
  },
  {
    avatar: 'https://www.github.com/Integral-Tech.png',
    name: 'Integral',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/Integral-Tech' },
      { icon: {svg: emailIcon }, link:'mailto:integral@saladict-app.aichatone.com' }
    ]
  }
]
</script>

# About

## Our team members

<VPTeamMembers size="small" :members="members" />

## More contributors

<a href='https://github.com/allentown521/saladict/graphs/contributors' target='_blank'><img src='https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true' alt='contributors' style='width: 100%' /></a>
