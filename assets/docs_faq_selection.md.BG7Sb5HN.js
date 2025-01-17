import{_ as s,c as i,o as a,a6 as e}from"./chunks/framework.DLIhdkYY.js";const g=JSON.parse('{"title":"沙拉翻译","titleTemplate":"常见问题","description":"","frontmatter":{"title":"沙拉翻译","titleTemplate":"常见问题"},"headers":[],"relativePath":"docs/faq/selection.md","filePath":"docs/faq/selection.md"}'),t={name:"docs/faq/selection.md"},l=e(`<h1 id="如何解决划词问题" tabindex="-1">如何解决划词问题？ <a class="header-anchor" href="#如何解决划词问题" aria-label="Permalink to &quot;如何解决划词问题？&quot;">​</a></h1><p>部分用户在使用划词翻译时，即便在「系统偏好设置-安全性与隐私-隐私-辅助功能」授权列表里面已经开启了，沙拉翻译 仍旧提示需要开启辅助功能权限。</p><p>以下几个方法应该都能解决问题，从方法 1 开始尝试，如果不行请按顺序逐个尝试。</p><h2 id="方法-1" tabindex="-1">方法 1 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法 1&quot;">​</a></h2><ol><li>进入「系统偏好设置 &gt; 隐私与安全性 &gt; 隐私 &gt; 辅助功能」</li><li>点击左下方的 🔒 将其解锁</li><li>选中右边列表里面的 <code>沙拉翻译</code>，点击下方 <code>-</code> 号删除（如果列表里面没有 <code>沙拉翻译</code>，直接去尝试方法 2）</li><li>如果你安装了多个 <code>沙拉翻译</code>，右边列表里面就可能会有多个 <code>沙拉翻译</code>，全部都删除掉</li><li>点击右上方的 <code>+</code> 号，添加 <code>沙拉翻译</code></li><li>然后重新启动 <code>沙拉翻译</code>，再尝试使用 <code>沙拉翻译</code> 的取词相关功能，并重新赋予 <code>沙拉翻译</code> 「辅助功能」权限</li></ol><h2 id="方法-2" tabindex="-1">方法 2 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法 2&quot;">​</a></h2><ol><li>在启动台搜索「终端」，将其打开</li><li>输入以下命令，并单击键盘 Enter 键执行，用于重置权限</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tccutil</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accessibility</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allen.town.focus.saladict</span></span></code></pre></div><p>如果输出以下结果，代表重置成功</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tccutil</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accessibility</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allen.town.focus.saladict</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accessibility</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> approval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allen.town.focus.saladict</span></span></code></pre></div><ol start="3"><li>重置完成后，先重启电脑</li></ol><p>然后再尝试使用 沙拉翻译 的取词相关功能，并重新赋予 沙拉翻译 「辅助功能」权限</p><h2 id="方法-3" tabindex="-1">方法 3 <a class="header-anchor" href="#方法-3" aria-label="Permalink to &quot;方法 3&quot;">​</a></h2><p>和方法 2 基本一致，但和方法 2 第 2 步的命令不同。</p><p>注意，这个命令会将所有 App 的辅助功能权限重置，如果后续哪个 App 需要辅助功能权限，重新授权即可。</p><ol><li><p>在启动台搜索「终端」，将其打开</p></li><li><p>输入以下命令，并单击键盘 Enter 键执行，用于重置权限</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tccutil</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accessibility</span></span></code></pre></div><ol start="3"><li>重置完成后，先重启电脑</li></ol><p>然后再尝试使用 沙拉翻译 的取词相关功能，并重新赋予 沙拉翻译 「辅助功能」权限</p>`,19),n=[l];function p(h,o,c,d,r,k){return a(),i("div",null,n)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
