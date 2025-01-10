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

Saladict also supports installation through the `winget` package manager. If you have `winget` installed, you can install 沙拉翻译 directly with this command:

```powershell
winget install Saladict.app
```

## MacOS

### Mac App Store Installation

For M-series Macs, it is strongly recommended to download and install from the [App Store](https://apps.apple.com/us/app/6740262076).

:::warning Troubleshooting

- "Saladict" can't be opened because the developer cannot be verified.

  Click the `Cancel` button, then go to `Settings -> Privacy & Security`, click the `Still Open` button, and then click `Open` in the pop-up window. After this, there will be no more warning prompts when opening Saladict.

- If you cannot find these options in `Privacy & Security`, or get error prompts about broken files on Apple Silicon machines, open `Terminal.app` and enter this command (you may need to enter your password), then restart Saladict:

  ```bash
  sudo xattr -d com.apple.quarantine /Applications/Saladict.app
  ```

:::

### Manual Installation

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

- In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes. If you encounter a "Segmentation fault" or 沙拉翻译 fails to start, please try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or any other place where environment variables can be set) to disable the use of DMABUF.
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
sudo apt-get install ./pot_{version}_{arch}.deb
```

#### Install via the Spark App Store.

Download and install the [Spark App Store](https://www.spark-app.store/).

Simply search for "Saladict" in the store and click on the installation button.

### Arch/Manjaro

#### Install via [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation)

Use `AUR helper`：

```bash
yay -S Saladict-translation # 或 Saladict-translation-bin

# paru -S Saladict-translation # 或 Saladict-translation-bin
```

#### Install via `archlinuxcn`

If you are using the `archlinuxcn` repository, you can directly install it using pacman:

```bash
sudo pacman -S Saladict-translation
```

### Flatpak

:::warning

The tray icon is missing in Flatpak version.

:::

<a href='https://flathub.org/apps/com.pot_app.pot'>
    <img width='240' alt='Download on Flathub' src='https://flathub.org/api/badge?locale=en'/>
</a>

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
