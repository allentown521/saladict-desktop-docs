import{_ as e,c as a,o as t,a6 as r}from"./chunks/framework.CuWwSu3D.js";const o="/assets/aihubmix1.kYB52G4W.png",i="/assets/aihubmix2.DlB7Zb3a.png",p="/assets/aihubmix3.B-2-d1xY.png",_=JSON.parse('{"title":"Pot","titleTemplate":"OpenAI","description":"","frontmatter":{"title":"Pot","titleTemplate":"OpenAI"},"headers":[],"relativePath":"docs/api/translate/openai.md","filePath":"docs/api/translate/openai.md"}'),n={name:"docs/api/translate/openai.md"},l=r('<h1 id="openai" tabindex="-1">OpenAI <a class="header-anchor" href="#openai" aria-label="Permalink to &quot;OpenAI&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>教程来源于<a href="https://hcfy.app/" target="_blank" rel="noreferrer">划词翻译</a>，一个很棒的网页翻译插件</p><p>文档内容可能会过时，请以 OpenAI 官网说明为准。</p></div><h2 id="价格" tabindex="-1">价格 <a class="header-anchor" href="#价格" aria-label="Permalink to &quot;价格&quot;">​</a></h2><p>OpenAI API（gpt-3.5-turbo）一次性提供 5 美元的免费额度，而它的价格为 0.002 美元 / 1000 tokens，其中 1000 tokens 大约为 750 个英文单词。有关 “token” 的详细解释见 OpenAI 文档：<a href="https://platform.openai.com/docs/guides/chat/managing-tokens" target="_blank" rel="noreferrer">Managing tokens</a></p><blockquote><p>注意：OpenAI 提供的免费额度是会在三个月后过期清零的，具体过期时间可以在 <a href="https://platform.openai.com/account/usage" target="_blank" rel="noreferrer">https://platform.openai.com/account/usage</a> 查看。</p></blockquote><h2 id="申请步骤" tabindex="-1">申请步骤 <a class="header-anchor" href="#申请步骤" aria-label="Permalink to &quot;申请步骤&quot;">​</a></h2><h3 id="第一步-准备一个-openai-账号" tabindex="-1">第一步：准备一个 OpenAI 账号 <a class="header-anchor" href="#第一步-准备一个-openai-账号" aria-label="Permalink to &quot;第一步：准备一个 OpenAI 账号&quot;">​</a></h3><p>请自行准备一个 OpenAI 账号。</p><h3 id="第二步-创建-secret-key" tabindex="-1">第二步：创建 Secret Key <a class="header-anchor" href="#第二步-创建-secret-key" aria-label="Permalink to &quot;第二步：创建 Secret Key&quot;">​</a></h3><p>打开 <a href="https://platform.openai.com/account/api-keys%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B2%A1%E7%99%BB%E5%BD%95%E7%9A%84%E8%AF%9D%E4%BC%9A%E8%AE%A9%E4%BD%A0%E7%99%BB%E5%BD%95" target="_blank" rel="noreferrer">https://platform.openai.com/account/api-keys，如果没登录的话会让你登录</a> 点击【Create new secret key】按钮，会出现一个弹窗，里面显示了 Secret Key 复制 Secret Key</p><h3 id="第三步-在-pot-中填写-openai-的-secret-key" tabindex="-1">第三步：在 pot 中填写 OpenAI 的 Secret Key <a class="header-anchor" href="#第三步-在-pot-中填写-openai-的-secret-key" aria-label="Permalink to &quot;第三步：在 pot 中填写 OpenAI 的 Secret Key&quot;">​</a></h3><p>将 Secret Key 填写进 pot 的【设置页】-【接口设置】-【Open AI ApiKey】即可。</p><h2 id="关于-open-ai-api-连接不上的解决方案" tabindex="-1">关于 Open AI api 连接不上的解决方案 <a class="header-anchor" href="#关于-open-ai-api-连接不上的解决方案" aria-label="Permalink to &quot;关于 Open AI api 连接不上的解决方案&quot;">​</a></h2><h3 id="方法-1-通过-cloudflare-反向代理" tabindex="-1">方法 1：通过 Cloudflare 反向代理 <a class="header-anchor" href="#方法-1-通过-cloudflare-反向代理" aria-label="Permalink to &quot;方法 1：通过 Cloudflare 反向代理&quot;">​</a></h3><p>参考 <a href="https://github.com/x-dr/chatgptProxyAPI" target="_blank" rel="noreferrer">chatgptProxyAPI</a></p><p>pot 已经提供了自定义域名的设置，在设置中填写你自己的域名即可。</p><h3 id="方法-2-开启代理" tabindex="-1">方法 2：开启代理 <a class="header-anchor" href="#方法-2-开启代理" aria-label="Permalink to &quot;方法 2：开启代理&quot;">​</a></h3><p>pot 提供了软件内代理设置(软件内代理对 OpenAI 流式输出无效，若使用流式输出需要开启系统代理)</p><h3 id="方法-3-使用第三方服务-推荐" tabindex="-1">方法 3：使用第三方服务（推荐） <a class="header-anchor" href="#方法-3-使用第三方服务-推荐" aria-label="Permalink to &quot;方法 3：使用第三方服务（推荐）&quot;">​</a></h3><p>由于本应用支持设置自定义请求域名，所有您可以直接设置使用第三方的服务</p><h4 id="aihubmix" tabindex="-1">AiHubMix <a class="header-anchor" href="#aihubmix" aria-label="Permalink to &quot;AiHubMix&quot;">​</a></h4><ol><li><p>打开<a href="https://aihubmix.com/register?aff=trJY" target="_blank" rel="noreferrer">AiHubMix</a>官网注册并登录</p></li><li><p>点击 <code>顶部导航栏-充值</code> ,购买代理APIkey并兑换额度</p><p><img src="'+o+'" alt="AiHubMix"></p></li><li><p>购买完成后点击 <code>顶部导航栏-令牌-创建令牌</code></p><p><img src="'+i+'" alt="AiHubMix"></p></li><li><p>在 pot 中将自定义域名设置为 <code>orisound.cn</code> 或 <code>aihubmix.com</code></p></li><li><p>在设置中填入创建的令牌密钥保存即可</p><p><img src="'+p+'" alt="AiHubMix"></p></li></ol><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><p><a href="https://platform.openai.com/" target="_blank" rel="noreferrer">OpenAI 开放平台</a></p><p><a href="https://openai.com/pricing" target="_blank" rel="noreferrer">GhatGPT API（gpt-3.5-turbo）定价文档</a></p>',25),c=[l];function s(h,d,u,m,b,f){return t(),a("div",null,c)}const k=e(n,[["render",s]]);export{_ as __pageData,k as default};
