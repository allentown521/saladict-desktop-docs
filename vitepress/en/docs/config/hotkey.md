---
title: Saladict
titleTemplate: Hotkey
---

# Hotkey Settings

All four basic functions of the software support setting hotkeys separately.
Note that Saladict only supports standard combination keys and does not support non-standard hotkeys like double-clicks, nor will it in the future. If you have such a requirement, please use third-party key mapping to implement it.

## Hotkey Setting Failure

### Wayland

Tauri's hotkey scheme does not currently support Wayland, so Saladict's hotkey settings cannot be used under Wayland. Please refer to [External Invocation](/en/docs/invoke.html) to use the `curl` command to call Saladict in the system's custom hotkeys.