import{_ as a,c as t,o as e,a6 as r}from"./chunks/framework.DLIhdkYY.js";const f=JSON.parse('{"title":"Saladict","titleTemplate":"百度翻译","description":"","frontmatter":{"title":"Saladict","titleTemplate":"百度翻译"},"headers":[],"relativePath":"docs/api/translate/baidu.md","filePath":"docs/api/translate/baidu.md"}'),i={name:"docs/api/translate/baidu.md"},o=r('<h1 id="百度翻译" tabindex="-1">百度翻译 <a class="header-anchor" href="#百度翻译" aria-label="Permalink to &quot;百度翻译&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>文档内容可能会过时，请以百度翻译官网说明为准。</p></div><h2 id="价格" tabindex="-1">价格 <a class="header-anchor" href="#价格" aria-label="Permalink to &quot;价格&quot;">​</a></h2><p>百度翻译官方接口有三个版本：标准版、高级版和尊享版。</p><p>尊享版需要企业认证，不适用于个人用户，所以这个文档里没有介绍尊享版。</p><p>标准版每月只有 5 万免费字符，当你完成个人认证后，就可以切换到高级版，高级版每月有 100 万字符免费。用完免费额度后，超出的部分会按照 49 元 / 百万字符收取费用，费用由百度翻译在它自己的百度翻译开放平台收取，与 沙拉翻译 无关。</p><p>建议前往百度翻译平台的我的服务 - 通用文本翻译开启“免费额度用量提醒”。比如如果你有 100 万字符的免费额度，那么你可以将提醒数量设置为 90 万字，这样当你当月消耗了 90 万字时，百度翻译会短信 / 邮件提醒你。</p><p>百度翻译是按天计费的，还建议在百度翻译开放平台里充值 1 元，然后在财务总览页面设置余额低于 1 元就短信提醒。但是请注意，按天计费意味着在一天之内无论产生了多少使用量都不会有实时提醒，只会在每天结算的时候（一般是凌晨一点）才会有提醒。</p><h2 id="申请步骤" tabindex="-1">申请步骤 <a class="header-anchor" href="#申请步骤" aria-label="Permalink to &quot;申请步骤&quot;">​</a></h2><h3 id="第一步-登录百度翻译开放平台" tabindex="-1">第一步：登录百度翻译开放平台 <a class="header-anchor" href="#第一步-登录百度翻译开放平台" aria-label="Permalink to &quot;第一步：登录百度翻译开放平台&quot;">​</a></h3><p>打开百度翻译开放平台 <a href="https://fanyi-api.baidu.com/" target="_blank" rel="noreferrer">https://fanyi-api.baidu.com/</a> 并登录你的百度账号，登录成功后点击「管理控制台」。</p><h3 id="第二步-注册成为百度翻译开发者" tabindex="-1">第二步：注册成为百度翻译开发者 <a class="header-anchor" href="#第二步-注册成为百度翻译开发者" aria-label="Permalink to &quot;第二步：注册成为百度翻译开发者&quot;">​</a></h3><p>第一次进入管理控制台会让你注册成为百度翻译开发者。选择「个人开发者」并填写表单后点击「下一步」。 注册成功后会让你进行身份认证，如果你不想用高级版可以点「取消」，否则就需要认证。</p><h3 id="第三步-开通「通用翻译服务」" tabindex="-1">第三步：开通「通用翻译服务」 <a class="header-anchor" href="#第三步-开通「通用翻译服务」" aria-label="Permalink to &quot;第三步：开通「通用翻译服务」&quot;">​</a></h3><p>注册成功后，打开控制台 <a href="https://fanyi-api.baidu.com/api/trans/product/desktop" target="_blank" rel="noreferrer">https://fanyi-api.baidu.com/api/trans/product/desktop</a>，点击「立即开通」按钮，然后：</p><p>选择「通用翻译（适用于文本翻译）」并点击「下一步」 选择「开通标准版」 填写应用名称&quot;Saladict&quot;然后点击「提交申请」，会提示「开通成功」</p><h3 id="可选步骤-切换为高级版接口" tabindex="-1">可选步骤：切换为高级版接口 <a class="header-anchor" href="#可选步骤-切换为高级版接口" aria-label="Permalink to &quot;可选步骤：切换为高级版接口&quot;">​</a></h3><p>完成前三个步骤之后，你就可以使用标准版接口了，但如果你想使用高级版接口，可以打开百度翻译开放平台控制台 <a href="https://fanyi-api.baidu.com/api/trans/product/desktop" target="_blank" rel="noreferrer">https://fanyi-api.baidu.com/api/trans/product/desktop</a>，点击写有「标准版」的下拉框即可切换为高级版。第一次切换为高级版的时候会让你进行身份认证。</p><h3 id="第四步-在-沙拉翻译-中填写百度翻译-appid-和-密钥" tabindex="-1">第四步：在 沙拉翻译 中填写百度翻译 APPID 和 密钥 <a class="header-anchor" href="#第四步-在-沙拉翻译-中填写百度翻译-appid-和-密钥" aria-label="Permalink to &quot;第四步：在 沙拉翻译 中填写百度翻译 APPID 和 密钥&quot;">​</a></h3><p>打开百度翻译开放平台控制台 <a href="https://fanyi-api.baidu.com/api/trans/product/desktop" target="_blank" rel="noreferrer">https://fanyi-api.baidu.com/api/trans/product/desktop</a>，将页面最底部的「APP ID」和「密钥」填写进 沙拉翻译 的【设置页】-【接口设置】-【百度翻译 Appid】和【百度翻译密钥】中。</p><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><p><a href="https://fanyi-api.baidu.com/" target="_blank" rel="noreferrer">百度翻译开放平台</a></p><p><a href="https://fanyi-api.baidu.com/product/112" target="_blank" rel="noreferrer">百度翻译通用翻译 API 定价文档</a></p>',23),p=[o];function d(n,l,s,h,c,u){return e(),t("div",null,p)}const _=a(i,[["render",d]]);export{f as __pageData,_ as default};
