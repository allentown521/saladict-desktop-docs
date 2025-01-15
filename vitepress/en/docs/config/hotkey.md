---
title: Saladict
titleTemplate: Hotkey Settings
---

# Hotkey Settings

The four basic functions of the software all support setting separate hotkeys.
Note that Saladict only supports standard key combinations and does not support non-standard shortcuts like double-clicks. This will not be supported in the future either. If needed, please use third-party key mapping tools to achieve this.

## Selection Translation

After selecting text with the mouse, press the shortcut key to open the translation window and translate the selected text.

> Mac App Store version does not support this feature. Please use [Quick Selection Translate](/en/docs/quick-translate#saladict-macos) feature.

## Input Translation

Press the shortcut key to open the translation window.

## OCR Recognition

Press the shortcut key to open the screenshot interface and automatically recognize the text in the screenshot.

## OCR Translation

Press the shortcut key to open the screenshot interface and automatically translate the text in the screenshot.

## Variable Name Format Conversion

Variable name format conversion aims to help users automatically convert between different naming conventions, by standardizing variable names, it helps the translation software better understand the context, thus improving the accuracy of translation. This feature supports multiple common naming conventions, including snake_case, CamelCase, PascalCase, kebab-case and dot.notation.

- Select text in the translation editing box, and press `Shift+Alt+U` shortcut key.

:::warning Note

- This shortcut key cannot be customized
- This shortcut key is only valid in the translation editing box

:::

## Hotkey Setting Failed

### Wayland

Tauri's hotkey solution does not yet support Wayland, so the hotkey settings in Saladict cannot be used under Wayland. Please refer to [External Invocation](/en/docs/invoke.html) to use `curl` commands in system custom shortcuts to invoke Saladict.