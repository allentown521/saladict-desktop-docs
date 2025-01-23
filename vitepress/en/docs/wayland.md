---
title: Saladict
titleTemplate: Wayland
---

# Wayland

Due to the varying levels of support for Wayland among different distributions, Saladict itself cannot achieve perfect compatibility. Here are some solutions to common issues that can be implemented through proper configuration, allowing Saladict to run perfectly on Wayland.

```
Ubuntu 22.04 start using Wayland as the display server, if you need to use X11 as the display server:
1. Click the gear icon on the login interface
2. Select "Ubuntu on Xorg" (use X11 instead of Wayland)
3. Then login

This can solve the following problems
```

## Shortcut can't be used

Due to the fact that Tauri's shortcut scheme does not support Wayland, the shortcut settings within the Saladict application cannot be used under Wayland. You can set system shortcuts to trigger Saladict by sending a request with curl. For more details, please refer to [External Calls](/en/docs/invoke).

## Screenshot cannot be used

In some pure Wayland DE/WM (such as Hyprland), the built-in screenshot feature of Saladict cannot be used. In this case, you can use other screenshot tools instead. For more details, please refer to [OCR without internal screenshot](/en/docs/invoke#ocr-without-internal-screenshot).

Below is an example of configuration in Hyprland (capturing screenshots using `grim` and `slurp`):

```ini
bind = ALT, X, exec, grim -g "$(slurp)" ~/.cache/allen.town.focus.saladict/pot_screenshot_cut.png && curl "127.0.0.1:60606/ocr_recognize?screenshot=false"
bind = ALT, C, exec, grim -g "$(slurp)" ~/.cache/allen.town.focus.saladict/pot_screenshot_cut.png && curl "127.0.0.1:60606/ocr_translate?screenshot=false"
```

Other desktop environments/window managers also have similar operations.

## The translation window follows the mouse position

Due to the current inability of Saladict to obtain correct mouse coordinates under Wayland, its internal implementation cannot work. For certain desktop environments/window managers, window rules can be set to achieve window following mouse position. Here we take Hyprland as an example:

```ini
windowrulev2 = float, class:(pot), title:(Translator|OCR|PopClip|Screenshot Translate) # Translation window floating
windowrulev2 = move cursor 0 0, class:(pot), title:(Translator|PopClip|Screenshot Translate) # Translation window follows the mouse position.
```
