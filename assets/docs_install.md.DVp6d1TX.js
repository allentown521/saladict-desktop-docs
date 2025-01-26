import{_ as a,c as i,o as s,a6 as e,ad as t,ae as l}from"./chunks/framework.TqvRFY8P.js";const F=JSON.parse('{"title":"沙拉翻译","titleTemplate":"安装指南","description":"","frontmatter":{"title":"沙拉翻译","titleTemplate":"安装指南"},"headers":[],"relativePath":"docs/install.md","filePath":"docs/install.md"}'),n={name:"docs/install.md"},h=e('<h1 id="安装指南" tabindex="-1">安装指南 <a class="header-anchor" href="#安装指南" aria-label="Permalink to &quot;安装指南&quot;">​</a></h1><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><h3 id="通过-microsoft-store-安装" tabindex="-1">通过 Microsoft Store 安装 <a class="header-anchor" href="#通过-microsoft-store-安装" aria-label="Permalink to &quot;通过 Microsoft Store 安装&quot;">​</a></h3><a href="https://apps.microsoft.com/detail/9pfzvl2bqx1s" target="_blank"><img src="'+t+'" alt="Download on the Microsoft Store" style="width:156px;"></a><h3 id="手动下载安装" tabindex="-1">手动下载安装 <a class="header-anchor" href="#手动下载安装" aria-label="Permalink to &quot;手动下载安装&quot;">​</a></h3><ul><li><p>32 位机器请下载 <code>Windows x86 (.exe)</code>，下载完成后双击安装即可。</p></li><li><p>64 位机器请下载 <code>Windows x64 (.exe)</code>，下载完成后双击安装即可。</p></li><li><p>arm64 机器请下载 <code>Windows arm64 (.exe)</code>，下载完成后双击安装即可。</p></li></ul><h3 id="通过-winget-安装" tabindex="-1">通过 winget 安装 <a class="header-anchor" href="#通过-winget-安装" aria-label="Permalink to &quot;通过 winget 安装&quot;">​</a></h3><p>Saladict 也支持通过 <code>winget</code> 包管理器安装，如果您已经安装了 <code>winget</code>，可以直接通过以下命令安装 Saladict:</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">winget install allentown521.Saladict</span></span></code></pre></div><h2 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h2><h3 id="mac-app-store-安装" tabindex="-1">Mac App Store 安装 <a class="header-anchor" href="#mac-app-store-安装" aria-label="Permalink to &quot;Mac App Store 安装&quot;">​</a></h3><p>对于 M 系列的 Mac，可以前往 Mac App Store 安装</p><a href="https://apps.apple.com/app/6740262076" target="_blank"><img src="'+l+`" alt="Download on the Mac App Store" style="width:156px;"></a><div class="info custom-block"><p class="custom-block-title">功能限制</p><p>由于技术限制，Mac App Store 版本不支持<a href="/docs/config/hotkey.html#划词翻译">划词翻译</a>以及<a href="/docs/config/general.html#当文本被选中时显示翻译图标">当文本被选中时显示翻译图标</a>，如果您对这两个功能有需求，请 <a href="#手动安装">手动安装</a> 社区版，或者</p><ul><li><p>配合 <a href="/docs/quick-translate.html#popclip-macos">PopClip</a> 实现全局划词翻译</p></li><li><p>配合 <a href="https://saladict.aichatone.com/" target="_blank" rel="noreferrer">沙拉翻译浏览器插件</a> 实现在浏览器使用时，实现划词翻译和快捷键翻译</p></li></ul><p>我们会尽快解决这个问题，感谢您的理解与支持。</p></div><h3 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-label="Permalink to &quot;手动安装&quot;">​</a></h3><p>MacOS 提供了 <code>x64</code> 版本和 <code>aarch64</code> 版本，分别对应 <code>intel</code> 芯片的 Mac 和 <code>M1/M2</code> 芯片的 Mac</p><ul><li>如果您使用 Intel 芯片的 Mac，请下载 <code>MacOS x64(.dmg)</code></li><li>如果您使用 M1/M2 芯片的 Mac，请下载 <code>MacOS aarch64(.dmg)</code></li></ul><p>下载完成之后打开 <code>dmg</code> 文件，将 <code>Saladict</code> 拖到 <code>Application</code> 内即可。</p><h3 id="通过-brew-安装" tabindex="-1">通过 Brew 安装 <a class="header-anchor" href="#通过-brew-安装" aria-label="Permalink to &quot;通过 Brew 安装&quot;">​</a></h3><ol><li>添加我们的 tap:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Saladict-app/homebrew-tap</span></span></code></pre></div><ol start="2"><li>安装 Saladict:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Saladict</span></span></code></pre></div><ol start="3"><li>更新 Saladict</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Saladict</span></span></code></pre></div><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">故障排除</p><ul><li>在最新版本的 <a href="https://archlinux.org/packages/extra/x86_64/webkit2gtk" target="_blank" rel="noreferrer">Webkit2Gtk</a> (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生，如果遇到 <code>段错误</code> 或 沙拉翻译 无法启动的情况，请尝试在 <code>/etc/environment</code> （或者其他设置环境变量的地方）中加入 <code>WEBKIT_DISABLE_DMABUF_RENDERER=1</code> 环境变量关闭 DMABUF 的使用。</li><li>Wayland 用户无法使用应用内快捷键，请参考文档<a href="/docs/wayland.html#快捷键无法使用">设置系统快捷键</a></li></ul></div><h3 id="debian-ubuntu" tabindex="-1">Debian/Ubuntu <a class="header-anchor" href="#debian-ubuntu" aria-label="Permalink to &quot;Debian/Ubuntu&quot;">​</a></h3><h4 id="手动下载安装-1" tabindex="-1">手动下载安装 <a class="header-anchor" href="#手动下载安装-1" aria-label="Permalink to &quot;手动下载安装&quot;">​</a></h4><ul><li><p>32 位机器请下载 <code>Linux x86 (.deb)</code></p></li><li><p>64 位机器请下载 <code>Linux x64 (.deb)</code></p></li><li><p>aarch64 机器请下载 <code>Linux aarch64 (.deb)</code></p></li><li><p>armv7 机器请下载 <code>Linux armv7 (.deb)</code></p></li></ul><p>然后使用 <code>apt-get</code> 进行安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./pot_{version}_{arch}.deb</span></span></code></pre></div><h2 id="手动编译" tabindex="-1">手动编译 <a class="header-anchor" href="#手动编译" aria-label="Permalink to &quot;手动编译&quot;">​</a></h2><h3 id="所需工具" tabindex="-1">所需工具 <a class="header-anchor" href="#所需工具" aria-label="Permalink to &quot;所需工具&quot;">​</a></h3><ul><li><a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">rust</a> &gt;= 1.70.0</li><li><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> &gt;=8.1.0</li><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">nodejs</a> &gt;=18.0.0</li></ul><h3 id="编译步骤" tabindex="-1">编译步骤 <a class="header-anchor" href="#编译步骤" aria-label="Permalink to &quot;编译步骤&quot;">​</a></h3><ol><li>克隆仓库</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/allentown521/saladict.git</span></span></code></pre></div><ol start="2"><li>安装构建依赖 (Linux Only)</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libgtk-3-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libwebkit2gtk-4.0-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libayatana-appindicator3-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> librsvg2-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patchelf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxdo-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxcb1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxrandr2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libdbus-1-3</span></span></code></pre></div><ol start="3"><li>开始编译</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Saladict-desktop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装前端依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tauri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 编译打包</span></span></code></pre></div><ol start="4"><li>编译完成之后，可以在<code>src-tauri/target/Release/bundle</code>目录下找到对应平台的安装包</li></ol>`,43),o=[h];function p(d,r,c,k,g,b){return s(),i("div",null,o)}const m=a(n,[["render",p]]);export{F as __pageData,m as default};
