---
title: 沙拉翻译
titleTemplate: 常见问题
---

# 无法运行

软件无法运行时，请参考以下内容解决

## Windows 无法启动

:::warning 启动后没有界面，点击托盘图标没有反应

- 原因

  沙拉翻译依赖于 WebView2，如果卸载或禁用了 WebView2，将无法显示界面，表现为 沙拉翻译 可以启动，但是点击托盘菜单没有反应。

- 解决方案

  ### win11 用户

  如果是利用第三方软件禁用了 Edge，请检查是否同时禁用了 WebView2，将 WebView2 取消禁用。

  如果是卸载了 WebView2，可以在微软官网下载安装包重新安装 WebView2。

  如果是企业版系统不方便安装或无法安装 WebView2，请尝试在 [Release](https://github.com/allentown521/saladict/releases/latest) 下载内置 WebView2 的版本 `Saladict_{version}_{arch}_fix_webview2_runtime-setup.exe`

  ### win10 用户

  在微软官网下载安装包安装 WebView2 或者参考 [win11 用户](#win11-用户) 的企业版系统解决方案。

  ### 其他

  若问题仍然存在请尝试使用 Windows7 兼容模式启动。

:::

## Linux 无法启动

:::warning Nvidia 驱动问题

- 原因

  在最新版本的 [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生。

- 解决方案

  如果遇到 `段错误` 或 沙拉翻译 无法启动的情况，请尝试在 `/etc/environment` （或者其他设置环境变量的地方）中加入 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 环境变量关闭 DMABUF 的使用。

:::

## 被杀毒软件删除

:::warning 被杀毒软件删除

- 原因

  软件被某些杀毒软件误报，可以肯定的是，软件没有携带任何恶意代码，杀毒软件误报的原因可能是由于软件使用了某些系统库，而这些库被杀毒软件误报为恶意代码。

- 解决方案

  在杀毒软件中还原，并将软件加入白名单

:::

## 配置文件格式错误

:::warning 配置文件格式错误

- 原因

  如果设置了不可用的快捷键，或者因为各种原因(你自己修改、或者软件异常退出)导致配置文件格式不正确，软件将无法启动。

- 解决方案

  备份配置文件之后将原配置文件删除，再次打开应用就正常了。

:::

## Win7 无法使用

:::warning 不支持 Win7 系统

  抱歉，软件不支持 Win7 系统

:::
