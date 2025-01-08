---
title: Saladict
titleTemplate: Translation Settings
---

# Translation Settings

## Source Language

The language of the content to be translated. It's recommended to select `Auto Detect`.

## Target Language

The default target language for translation.

## Second Target Language

When the source language is detected to be the same as the target language, it will automatically translate to the second target language. This is very useful when translating between two languages.

## Language Detection Engine

The engine used for language detection. Local engines are fast and don't require internet connection, but they consume more memory. Please choose based on your needs.

Also, if you cannot access Google, please don't select `Google` as it will prevent translation.

## Auto Copy

Automatically copy content after translation. Supports copying `Original Text`, `Translation`, or `Original + Translation`.

## Incremental Translation

When this option is enabled, keep the translation window open after text selection translation. The next text selection translation will append the selected content to the translation window. This is very useful when translating multi-page content.

## Dynamic Translation

When this option is enabled, translation will be triggered automatically while typing, without needing to click the translate button or press enter.

## Auto Remove Line Breaks

When enabled, line breaks in the selected content for text selection translation will be automatically removed. This is very useful when doing text selection translation in PDFs.

## Remember Target Language

When enabled, changing the target language in the translation panel will update the target language option in settings.

## Font Size

Note that font size only affects the original text and translation in the translation window.

## Window Position

- Follow Mouse: Default mode, the translation window appears at the mouse cursor position.
- Remember Position: The translation window appears at the position where it was last closed.

:::warning Note for Multi-screen Users
If you last closed the translation window on a second screen, and then you disconnect that screen, 沙拉翻译 will still save the position on the second screen. This will cause the translation window to be invisible on the main screen next time. In this case, just switch to `Follow Mouse` mode.
:::

## Remember Window Size

When enabled, the window size will be saved after adjusting the translation window size and will be restored to the last size next time.

## Close Window on Blur

When enabled, the translation window will automatically close when it loses focus (i.e., when clicking anywhere outside the translation window).

## Window Always on Top

When enabled, the translation window will stay on top of other windows by default. In this case, losing focus won't close the window.

## Hide Original Text

Don't display the original text area in the translation panel.

## Hide Language Bar

Don't display the language bar in the translation panel.

## Hide Translation Window

This feature needs to be used with the auto copy function. When enabled, the translation window won't pop up during text selection translation, and the result from the first translation service will be copied to the clipboard after translation is complete.
