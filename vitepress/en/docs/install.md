---
title: Saladict
titleTemplate: Installation Guide
---

# Installation Guide

## Windows

### Manual Installation

- For 32-bit machines, download `Windows x86 (.exe)`. After downloading, double-click to install.

- For 64-bit machines, download `Windows x64 (.exe)`. After downloading, double-click to install.

- For arm64 machines, download `Windows arm64 (.exe)`. After downloading, double-click to install.

### Installation via Winget

Saladict also supports installation through the `winget` package manager. If you have `winget` installed, you can install Saladict directly with this command:

```powershell
winget install allentown521.Saladict
```

## MacOS

### Mac App Store Installation

For M-series Macs, you can install it from Mac App Store

 <a href="https://apps.apple.com/app/6740262076" target="_blank">
  <img src="/img/download_on_mac_app_store.svg" alt="Download on the Mac App Store" style="width: 156px;" />
 </a> 

:::info Feature Limitations

Due to technical limitations, the Mac App Store version does not support [Selection Translation](/en/docs/config/hotkey#selection-translation) and [Translation Using Shortcuts After Selection](/en/docs/config/general#when-text-is-selected-show-translation-icon). If you need these features, please [manually install](#manual-installation-community-version) the community version, or

- Use [PopClip](/en/docs/quick-translate#popclip-macos) to implement global selection translation

- Use [Saladict Browser Extension](https://saladict.aichatone.com/) to implement selection translation and shortcut translation in the browser

We will address this issue as soon as possible. Thank you for your understanding and support.

:::

### Manual Installation (Community Version)

MacOS offers both the `x64` version and the `aarch64` version, which correspond to Macs with `Intel` chips and Macs with `M1/M2` chips respectively.

- If you are using a Mac with an `Intel` chip, please download `MacOS x64(.dmg)`.
- If you are using a Mac with `M1/M2` chip, please download `MacOS aarch64(.dmg)`.

After downloading is complete, open the `.dmg` file and drag the `Saladict` file into the Applications folder.

### Install via Brew

1. Add our tap:

```bash
brew tap Saladict-app/homebrew-tap
```

2. Install Saladict:

```bash
brew install --cask Saladict
```

3. Upgrade Saladict

```bash
brew upgrade --cask Saladict
```

## Linux

:::warning Troubleshooting

- In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes. If you encounter a "Segmentation fault" or Saladict fails to start, please try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or any other place where environment variables can be set) to disable the use of DMABUF.
- Wayland users are unable to use application-specific shortcuts. Please refer to the documentation on [setting system shortcuts](/en/docs/wayland#shortcut-can-t-be-used).

:::

### Debian/Ubuntu

#### Manual Installation

- For 32-bit machines, please download `Linux x86 (.deb)`

- For 64-bit machines, please download `Linux x64 (.deb)`

- For aarch64 machines, please download `Linux aarch64  (.deb)`

- For armv7 machines, please download `Linux armv7 (.deb)`

Then use `apt-get` for installation.

```bash
sudo apt-get install ./saladict_{version}_{arch}.deb
```

## Manual Compilation

### Required Tools

- [rust](https://www.rust-lang.org/) >= 1.70.0
- [pnpm](https://pnpm.io/) >=8.1.0
- [nodejs](https://nodejs.org/) >=18.0.0

### Compilation Steps

1. Clone Repository

```bash
git clone https://github.com/allentown521/saladict.git
```

2. Installing dependencies (Linux Only)

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator3-dev librsvg2-dev patchelf libxdo-dev libxcb1 libxrandr2 libdbus-1-3
```

3. Start Compilation

```bash
cd Saladict-desktop

pnpm install

pnpm tauri build
```

4. After compilation is completed, you can find the installation package for the corresponding platform in the `src-tauri/target/Release/bundle` directory.
