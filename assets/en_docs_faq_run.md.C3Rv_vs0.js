import{_ as e,c as t,o as a,a6 as o}from"./chunks/framework.DLIhdkYY.js";const w=JSON.parse('{"title":"Saladict","titleTemplate":"FAQ","description":"","frontmatter":{"title":"Saladict","titleTemplate":"FAQ"},"headers":[],"relativePath":"en/docs/faq/run.md","filePath":"en/docs/faq/run.md"}'),i={name:"en/docs/faq/run.md"},r=o('<h1 id="cannot-run" tabindex="-1">Cannot Run <a class="header-anchor" href="#cannot-run" aria-label="Permalink to &quot;Cannot Run&quot;">​</a></h1><p>If the software cannot run, please refer to the following solutions</p><h2 id="windows-won-t-start" tabindex="-1">Windows Won&#39;t Start <a class="header-anchor" href="#windows-won-t-start" aria-label="Permalink to &quot;Windows Won&#39;t Start&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">No interface after startup, clicking the tray icon has no response</p><ul><li><p>Cause</p><p>Saladict depends on WebView2. If WebView2 is uninstalled or disabled, the interface cannot be displayed. The symptom is that Saladict can start, but clicking the tray menu has no response.</p></li><li><p>Solutions</p><h3 id="windows-11-users" tabindex="-1">Windows 11 Users <a class="header-anchor" href="#windows-11-users" aria-label="Permalink to &quot;Windows 11 Users&quot;">​</a></h3><p>If you used third-party software to disable Edge, please check if WebView2 was also disabled. Enable WebView2 again.</p><p>If you uninstalled WebView2, you can download and install the WebView2 package from Microsoft&#39;s official website.</p><p>If you are using an Enterprise edition system where installing WebView2 is inconvenient or not possible, please try downloading the version with built-in WebView2 from <a href="https://github.com/allentown521/saladict/releases/latest" target="_blank" rel="noreferrer">Release</a>: <code>Saladict_{version}_{arch}_fix_webview2_runtime-setup.exe</code></p><h3 id="windows-10-users" tabindex="-1">Windows 10 Users <a class="header-anchor" href="#windows-10-users" aria-label="Permalink to &quot;Windows 10 Users&quot;">​</a></h3><p>Download and install WebView2 package from Microsoft&#39;s official website or refer to the Enterprise edition solution in the <a href="#windows-11-users">Windows 11 Users</a> section.</p><h3 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-label="Permalink to &quot;Others&quot;">​</a></h3><p>If the issue persists, try running in Windows 7 compatibility mode.</p></li></ul></div><h2 id="linux-won-t-start" tabindex="-1">Linux Won&#39;t Start <a class="header-anchor" href="#linux-won-t-start" aria-label="Permalink to &quot;Linux Won&#39;t Start&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Nvidia Driver Issue</p><ul><li><p>Cause</p><p>In the latest version of <a href="https://archlinux.org/packages/extra/x86_64/webkit2gtk" target="_blank" rel="noreferrer">Webkit2Gtk</a> (2.42.0), due to incomplete DMABUF implementation in Nvidia proprietary drivers, startup failures and crashes may occur.</p></li><li><p>Solution</p><p>If you encounter <code>segmentation fault</code> or Saladict fails to start, try adding the environment variable <code>WEBKIT_DISABLE_DMABUF_RENDERER=1</code> in <code>/etc/environment</code> (or wherever you set environment variables) to disable DMABUF usage.</p></li></ul></div><h2 id="removed-by-antivirus-software" tabindex="-1">Removed by Antivirus Software <a class="header-anchor" href="#removed-by-antivirus-software" aria-label="Permalink to &quot;Removed by Antivirus Software&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Removed by Antivirus Software</p><ul><li><p>Cause</p><p>The software is falsely flagged by some antivirus software. We can assure you that the software does not contain any malicious code. The false positive might be due to the software using certain system libraries that are mistakenly identified as malicious code by antivirus software.</p></li><li><p>Solution</p><p>Restore from the antivirus software and add the software to the whitelist.</p></li></ul></div><h2 id="configuration-file-format-error" tabindex="-1">Configuration File Format Error <a class="header-anchor" href="#configuration-file-format-error" aria-label="Permalink to &quot;Configuration File Format Error&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Configuration File Format Error</p><ul><li><p>Cause</p><p>If invalid shortcuts are set, or if the configuration file format is incorrect due to various reasons (your own modifications or abnormal software exit), the software will not start.</p></li><li><p>Solution</p><p>Back up the configuration file and then delete the original configuration file. The application will work normally when opened again.</p></li></ul></div><h2 id="windows-7-not-supported" tabindex="-1">Windows 7 Not Supported <a class="header-anchor" href="#windows-7-not-supported" aria-label="Permalink to &quot;Windows 7 Not Supported&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Windows 7 Not Supported</p><p>Sorry, the software does not support Windows 7 systems.</p></div>',12),s=[r];function n(l,d,c,u,p,h){return a(),t("div",null,s)}const m=e(i,[["render",n]]);export{w as __pageData,m as default};
