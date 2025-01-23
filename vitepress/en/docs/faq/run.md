---
title: Saladict
titleTemplate: FAQ
---

# Cannot Run

If the software cannot run, please refer to the following solutions

## Windows Won't Start

:::warning No interface after startup, clicking the tray icon has no response

- Cause

  Saladict depends on WebView2. If WebView2 is uninstalled or disabled, the interface cannot be displayed. The symptom is that Saladict can start, but clicking the tray menu has no response.

- Solutions

  ### Windows 11 Users

  If you used third-party software to disable Edge, please check if WebView2 was also disabled. Enable WebView2 again.

  If you uninstalled WebView2, you can download and install the WebView2 package from Microsoft's official website.

  If you are using an Enterprise edition system where installing WebView2 is inconvenient or not possible, please try downloading the version with built-in WebView2 from [Release](https://github.com/allentown521/saladict/releases/latest): `saladict_{version}_{arch}_fix_webview2_runtime-setup.exe`

  ### Windows 10 Users

  Download and install WebView2 package from Microsoft's official website or refer to the Enterprise edition solution in the [Windows 11 Users](#windows-11-users) section.

  ### Others

  If the issue persists, try running in Windows 7 compatibility mode.

:::

## Linux Won't Start

:::warning Nvidia Driver Issue

- Cause

  In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete DMABUF implementation in Nvidia proprietary drivers, startup failures and crashes may occur.

- Solution

  If you encounter `segmentation fault` or Saladict fails to start, try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or wherever you set environment variables) to disable DMABUF usage.

:::

## Removed by Antivirus Software

:::warning Removed by Antivirus Software

- Cause

  The software is falsely flagged by some antivirus software. We can assure you that the software does not contain any malicious code. The false positive might be due to the software using certain system libraries that are mistakenly identified as malicious code by antivirus software.

- Solution

  Restore from the antivirus software and add the software to the whitelist.

:::

## Configuration File Format Error

:::warning Configuration File Format Error

- Cause

  If invalid shortcuts are set, or if the configuration file format is incorrect due to various reasons (your own modifications or abnormal software exit), the software will not start.

- Solution

  Back up the configuration file and then delete the original configuration file. The application will work normally when opened again.

:::

## Windows 7 Not Supported

:::warning Windows 7 Not Supported

  Sorry, the software does not support Windows 7 systems.

:::
