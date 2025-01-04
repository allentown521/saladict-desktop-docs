---
title: Saladict
titleTemplate: General Settings
---

# General Settings

## Auto Start

Automatically start Saladict when system boots.

## Check Updates on Start

Check for new versions every time the software starts. If a new version is available, you will be prompted to update.

## Listen Port

Controls the port that Saladict listens on, default is `60828`. This feature is only used for [External Invocation](/en/docs/invoke.html)

If you are using the `SnipDo` or `PopClip` plugins provided by Saladict, please do not change this setting.

## Application Language

Change the application interface display language. To help improve Saladict translations, please visit [Weblate](https://hosted.weblate.org/engage/pot-app/)

## Application Theme

Control the application light/dark theme. If `Follow System` is selected, the interface theme will be consistent with the system settings.

Note: On Linux systems, it will be consistent with Gtk3 theme. If detection is incorrect, please check your Gtk3 theme settings.

## Tray Click Event

Control the tray icon click event. This feature is not available on Linux.

## Transparency Effect

Control whether the left navigation bar in the settings page is transparent.

## Network Proxy

Currently only supports `http` proxy, socks proxy is not supported yet. You can also use system proxy.

_Regardless of which proxy you use, you need to restart Saladict after setting it_.

- Proxy Address: Set network proxy address
- Proxy Port: Set network proxy port
- Addresses or IPs not using proxy: Set addresses or IPs that don't use proxy, separate multiple entries with English commas
