---
title: Saladict
titleTemplate: FAQ
---

# How to Resolve Selection Issues?

Some users may still receive prompts requesting accessibility permissions for Saladict even after enabling it in "System Settings > Privacy & Security > Privacy > Accessibility".

The following methods should resolve the issue. Start with Method 1, and if it doesn't work, try each method in sequence.

## Method 1

1. Go to "System Settings > Privacy & Security > Privacy > Accessibility"
2. Click the 🔒 in the bottom left to unlock
3. Select `Saladict` from the right list and click the `-` button to remove it (if `Saladict` is not in the list, proceed to Method 2)
4. If you have multiple installations of `Saladict`, there might be multiple entries in the right list - remove them all
5. Click the `+` button in the top right to add `Saladict`
6. Restart `Saladict`, try using the text selection features again, and grant accessibility permissions when prompted

## Method 2

1. Search for and open "Terminal" in Launchpad
2. Enter the following command and press Enter to reset permissions:

```bash
tccutil reset Accessibility allen.town.focus.saladict
```

If you see the following output, the reset was successful:

```bash
➜ tccutil reset Accessibility allen.town.focus.saladict

Successfully reset Accessibility approval status for allen.town.focus.saladict
```

3. After resetting, restart your computer

Then try using Saladict's text selection features again and grant accessibility permissions when prompted

## Method 3

Similar to Method 2, but with a different command in step 2.

Note: This command will reset accessibility permissions for ALL apps. You'll need to re-grant permissions to any apps that require accessibility access.

1. Search for and open "Terminal" in Launchpad

2. Enter the following command and press Enter to reset permissions:

```bash
tccutil reset Accessibility
```

3. After resetting, restart your computer

Then try using Saladict's text selection features again and grant accessibility permissions when prompted