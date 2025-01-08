---
title: Saladict
titleTemplate: Anki
---

# Anki

Since AnkiWeb does not have an open API, the only way to support Anki is through the Anki client plugin `AnkiConnect`

## Configuration Steps

## Installing the `AnkiConnect` Plugin

1. Open the Anki client
2. Tools-Plugins-Get Plugin
3. Fill in the `AnkiConnect` plugin id `2055492159`, confirm and install
4. Restart the Anki client to take effect
   More information about `AnkiConnect` can be found on the [AnkiConnect website](https://foosoft.net/projects/anki-connect/)

## Installing the `Minimize to tray` Plugin (Optional)

Since `AnkiConnect` requires the Anki client to be running, and the Anki client does not have a background running function, it is necessary to use a plugin to minimize it to the tray

1. Open the Anki client
2. Tools-Plugins-Get Plugin
3. Fill in the `Minimize to tray` plugin id `85158043`, confirm and install
4. Restart the Anki client to take effect

## Enabling Anki Support in Saladict

1. Saladict-Preferences-Service Settings-Vocabulary Book-Add Built-in Service-Anki-Fill in the default port `8765`, confirm and save

Configuration completed, the translation panel will appear an icon for adding to Anki, and clicking it will add the current translation content to Anki.

> Note: The Anki client needs to be kept running in the background
