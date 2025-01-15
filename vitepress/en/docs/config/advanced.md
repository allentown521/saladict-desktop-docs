---
title: Saladict
titleTemplate: Advanced Settings
---

# Advanced Settings

:::warning Note

Advanced settings are designed for users with a certain technical foundation, and ordinary users should not modify them.

:::

## Listening Port

Control the port that Saladict listens to, default is `60606`, this feature is only used for [external calls](/en/docs/invoke.html)

If you are using the `SnipDo` or `PopClip` plugins provided by Saladict, please do not change this setting.

## Development Mode

Development mode is designed for developers to debug, and after enabling it, there will be the following changes:

- Pressing the `F12` shortcut key in the app interface can open the developer tools
- The app interface's about application will display buttons to view logs and view configuration files
- Right-clicking the tray icon will display a button to view logs

## Network Proxy

Currently, only setting `http` proxy is supported, socks proxy is not supported, and you can also use the system proxy.

_Regardless of which proxy is used, the software needs to be restarted after setting_。

- Proxy address: Set the network proxy address
- Proxy port: Set the network proxy port
- Addresses or IPs not using a proxy: Set addresses or IPs not using a proxy, multiple addresses or IPs should be separated by commas
