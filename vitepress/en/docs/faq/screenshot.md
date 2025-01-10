---
title: Saladict
titleTemplate: FAQ
---

# How to Resolve Screenshot Issues?

Users may encounter various problems when taking screenshots, such as:

- White screen, black screen, or gray screen when taking screenshots with Saladict
- Repeated prompts requesting screen recording permission, which persists even after revoking and regranting permission
- Unable to add Saladict to the authorization list in "System Settings > Privacy & Security > Privacy > Screen Recording"

The following methods should resolve these issues. Start with Method 1, and if it doesn't work, try each method in sequence.

## Method 1

1. Go to "System Settings > Privacy & Security > Privacy > Screen Recording"
2. Click the 🔒 in the lower left to unlock
3. Select `Saladict` from the list on the right, click the `-` button to remove it (if `Saladict` is not in the list, proceed to Method 2)
4. If you have multiple installations of `Saladict`, there might be multiple entries in the list - remove them all
5. Click the `+` button in the upper right to add `Saladict`
6. Restart `Saladict`, then try using Saladict's text capture features and grant screen recording permission again


## Method 2

1. Search for "Terminal" in Launchpad and open it
2. Enter the following command and press Enter to reset permissions

```bash
tccutil reset ScreenCapture allen.town.focus.saladict
```

If you see the following output, the reset was successful

```bash
➜ tccutil reset ScreenCapture allen.town.focus.saladict

Successfully reset ScreenCapture approval status for allen.town.focus.saladict
```

3. After resetting, restart your computer first

Then try using Saladict's text capture features and grant screen recording permission again

## Method 3

This is similar to Method 2, but with a different command in step 2.

Note: This command will reset screen recording permissions for ALL apps. You'll need to re-authorize any apps that require screen recording permission afterward.

1. Search for "Terminal" in Launchpad and open it

2. Enter the following command and press Enter to reset permissions

```bash
tccutil reset ScreenCapture
```

3. After resetting, restart your computer first

Then try using Saladict's text capture features and grant screen recording permission again