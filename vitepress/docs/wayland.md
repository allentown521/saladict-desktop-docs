---
title: 沙拉翻译
titleTemplate: Wayland
---

# Wayland

由于各大发行版对于 Wayland 的支持程度不同，所以 沙拉翻译 本身没法做到特别完美的支持，这里可以提供一些常见问题的解决方案，通过合理的设置之后，沙拉翻译 也可以在 Wayland 下完美运行。

```
Ubuntu 22.04 开始默认使用 Wayland 作为显示服务器，如果需要使用 X11 作为显示服务器：
1. 在登录界面点击齿轮图标
2. 选择 "Ubuntu on Xorg"（使用 X11 而不是 Wayland）
3. 然后登录

这样可以解决以下几个问题
```

## 快捷键无法使用

由于 Tauri 的快捷键方案并没有支持 Wayland，所以 沙拉翻译 应用内的快捷键设置在 Wayland 下无法使用。 您可以设置系统快捷用 curl 发送请求来触发 沙拉翻译，详见[外部调用](/docs/invoke)

## 截图无法使用

在一些纯 Wayland 桌面环境/窗口管理器(如 Hyprland)上，沙拉翻译 内置的截图无法使用，这时可以通过使用其他截图工具代替，详见 [不使用软件内截图](/docs/invoke#不使用软件内截图)

下面给出在 Hyprland 下的配置示例(通过 grim 和 slurp 实现截图)：

```ini
bind = ALT, X, exec, grim -g "$(slurp)" ~/.cache/allen.town.focus.saladict/pot_screenshot_cut.png && curl "127.0.0.1:60606/ocr_recognize?screenshot=false"
bind = ALT, C, exec, grim -g "$(slurp)" ~/.cache/allen.town.focus.saladict/pot_screenshot_cut.png && curl "127.0.0.1:60606/ocr_translate?screenshot=false"
```

其他桌面环境/窗口管理器也是类似的操作

## 划词翻译窗口跟随鼠标位置

由于目前 沙拉翻译 在 Wayland 下还无法获取到正确的鼠标坐标，所以内部的实现无法工作。 对于某些桌面环境/窗口管理器，可以通过设置窗口规则来实现窗口跟随鼠标位置，这里以 Hyprland 为例：

```ini
windowrulev2 = float, class:(pot), title:(Translator|OCR|PopClip|Screenshot Translate) # Translation window floating
windowrulev2 = move cursor 0 0, class:(pot), title:(Translator|PopClip|Screenshot Translate) # Translation window follows the mouse position.
```
