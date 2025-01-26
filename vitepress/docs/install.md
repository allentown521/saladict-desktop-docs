---
title: 沙拉翻译
titleTemplate: 安装指南
---

# 安装指南

## Windows

### 通过 Microsoft Store 安装

 <a href="https://apps.microsoft.com/detail/9pfzvl2bqx1s" target="_blank">
  <img src="/img/download_on_microsoft_store.png" alt="Download on the Microsoft Store" style="width: 156px;" />
 </a> 

### 手动下载安装

- 32 位机器请下载 `Windows x86 (.exe)`，下载完成后双击安装即可。

- 64 位机器请下载 `Windows x64 (.exe)`，下载完成后双击安装即可。

- arm64 机器请下载 `Windows arm64 (.exe)`，下载完成后双击安装即可。

### 通过 winget 安装

Saladict 也支持通过 `winget` 包管理器安装，如果您已经安装了 `winget`，可以直接通过以下命令安装 Saladict:

```powershell
winget install allentown521.Saladict
```

## MacOS

### Mac App Store 安装

对于 M 系列的 Mac，可以前往 Mac App Store 安装

 <a href="https://apps.apple.com/app/6740262076" target="_blank">
  <img src="/img/download_on_mac_app_store.svg" alt="Download on the Mac App Store" style="width: 156px;" />
 </a> 

:::info 功能限制

由于技术限制，Mac App Store 版本不支持[划词翻译](/docs/config/hotkey#划词翻译)以及[当文本被选中时显示翻译图标](/docs/config/general#当文本被选中时显示翻译图标)，如果您对这两个功能有需求，请 [手动安装](#手动安装) 社区版，或者

- 配合 [PopClip](/docs/quick-translate#popclip-macos) 实现全局划词翻译

- 配合 [沙拉翻译浏览器插件](https://saladict.aichatone.com/) 实现在浏览器使用时，实现划词翻译和快捷键翻译

我们会尽快解决这个问题，感谢您的理解与支持。

:::

### 手动安装

MacOS 提供了 `x64` 版本和 `aarch64` 版本，分别对应 `intel` 芯片的 Mac 和 `M1/M2` 芯片的 Mac

- 如果您使用 Intel 芯片的 Mac，请下载 `MacOS x64(.dmg)`
- 如果您使用 M1/M2 芯片的 Mac，请下载 `MacOS aarch64(.dmg)`

下载完成之后打开 `dmg` 文件，将 `Saladict` 拖到 `Application` 内即可。

### 通过 Brew 安装

1. 添加我们的 tap:

```bash
brew tap Saladict-app/homebrew-tap
```

2. 安装 Saladict:

```bash
brew install --cask Saladict
```

3. 更新 Saladict

```bash
brew upgrade --cask Saladict
```

## Linux

:::warning 故障排除

- 在最新版本的 [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生，如果遇到 `段错误` 或 沙拉翻译 无法启动的情况，请尝试在 `/etc/environment` （或者其他设置环境变量的地方）中加入 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 环境变量关闭 DMABUF 的使用。
- Wayland 用户无法使用应用内快捷键，请参考文档[设置系统快捷键](/docs/wayland#快捷键无法使用)

:::

### Debian/Ubuntu

#### 手动下载安装

- 32 位机器请下载 `Linux x86 (.deb)`

- 64 位机器请下载 `Linux x64 (.deb)`

- aarch64 机器请下载 `Linux aarch64  (.deb)`

- armv7 机器请下载 `Linux armv7 (.deb)`

然后使用 `apt-get` 进行安装

```bash
sudo apt-get install ./pot_{version}_{arch}.deb
```

## 手动编译

### 所需工具

- [rust](https://www.rust-lang.org/) >= 1.70.0
- [pnpm](https://pnpm.io/) >=8.1.0
- [nodejs](https://nodejs.org/) >=18.0.0

### 编译步骤

1. 克隆仓库

```bash
git clone https://github.com/allentown521/saladict.git
```

2. 安装构建依赖 (Linux Only)

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator3-dev librsvg2-dev patchelf libxdo-dev libxcb1 libxrandr2 libdbus-1-3
```

3. 开始编译

```bash
cd Saladict-desktop

pnpm install # 安装前端依赖

pnpm tauri build # 编译打包
```

4. 编译完成之后，可以在`src-tauri/target/Release/bundle`目录下找到对应平台的安装包
