export const META_URL = "https://saladict-app.aichatone.com/en/";
export const META_TITLE = "Saladict";
export const META_KEYWORDS = "Translation, OCR, Text Recognition, TTS, Speech Synthesis, Saladict Translation Software, Cross-platform Translation Tool, OCR Text Recognition, Text Selection Translation, Screenshot Translation, Multi-engine Translation, AI Translation, ChatGPT, Offline Translation, Text Translation, Google Translate, Papago, Free Translation Software, OpenAI, Zhipu AI, Gemini, Ollama, Alibaba Translation, Baidu Translation, Caiyun Translation, Tencent Translator, Tencent Interactive Translation, Volcano Translation, Niutrans, Google Translate, Bing Translator, DeepL, Youdao Translation, Cambridge Dictionary, Yandex, Lingva, Tatoeba, ECDICT";
export const META_DESCRIPTION = "Saladict is a powerful cross-platform text selection translation and OCR software that supports multiple translation engines including DeepL, OpenAI, and Google Translate. It features text selection translation, screenshot translation, text recognition, and text-to-speech synthesis. With its clean interface design and quick operation, it will be your ultimate translation software. Supporting offline translation to ensure privacy and security, Saladict makes cross-language communication more convenient.";

import { loadEnv } from 'vitepress'

const env = loadEnv('', process.cwd())
const UMAMI_ID = env.VITE_UMAMI_DATA_WEBSITE_ID

if (!UMAMI_ID) {
  throw new Error('UMAMI_ID is not set')
}

export const enConfig = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { name: "keywords", content: META_KEYWORDS }],
    ["link", { rel: "alternate", hreflang: "en", href: "https://saladict-app.aichatone.com/en/" }],
    ["link", { rel: "alternate", hreflang: "zh", href: "https://saladict-app.aichatone.com/" }],
    ["link", { rel: "alternate", hreflang: "x-default", href: "https://saladict-app.aichatone.com/" }],
    ["meta", { name: "description", content: META_DESCRIPTION }],
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:image", content: "/img/pot-social-card.png" }],
    ["meta", { property: "og:keywords", content: META_KEYWORDS }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:keywords", content: META_KEYWORDS }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
    ["script", { async: "", src: "https://umami.aichatone.com/script.js", 'data-website-id': UMAMI_ID }],
  ],
  themeConfig: {
    siteTitle: "Saladict",
    nav: [
      { text: "AiHubMix", link: "/en/ads/aihubmix", activeMatch: "/en/ads/" },
      { text: "Guide", link: "/en/docs/", activeMatch: "/en/docs/" },
      { text: "Download", link: "/en/download" },
      { text: "Plugin List", link: "/en/plugin" },
      {
        text: "Community",
        items: [
          { text: "Github Discussions", link: "https://github.com/allentown521/saladict/discussions" },
          { text: "Email", link: "mailto:product@aichatone.com" },
        ],
      },
      { text: "About", link: "/en/about" },
    ],
    sidebar: {
      "/en/docs/": [
        {
          text: "User Guide",
          link: "/en/docs/",
          items: [
            { text: "Install Guide", link: "/en/docs/install" },
            {
              text: "Software Config",
              collapsed: true,
              items: [
                { text: "General", link: "/en/docs/config/general" },
                { text: "Hotkey", link: "/en/docs/config/hotkey" },
                { text: "Translate", link: "/en/docs/config/translate" },
                { text: "Recognize", link: "/en/docs/config/recognize" },
                { text: "Service", link: "/en/docs/config/service" },
                { text: "Backup", link: "/en/docs/config/backup" },
                { text: "Advanced", link: "/en/docs/config/advanced" },
              ],
            },
            { text: "External Calls", link: "/en/docs/invoke" },
            { text: "Plugin System", link: "/en/docs/plugin" },
            { text: "Wayland", link: "/en/docs/wayland" },
            {
              text: "API Service",
              link: "/en/docs/api/",
              collapsed: true,
              items: [
                {
                  text: "Text Translation",
                  collapsed: true,
                  items: [
                    {
                      text: "NiuTrans",
                      link: "/en/docs/api/translate/niutrans",
                    },
                    { text: "Baidu", link: "/en/docs/api/translate/baidu" },
                    { text: "Alibaba", link: "/en/docs/api/translate/alibaba" },
                    { text: "Caiyun", link: "/en/docs/api/translate/caiyun" },
                    { text: "DeepL", link: "/en/docs/api/translate/deepl" },
                    { text: "Google", link: "/en/docs/api/translate/google" },
                    { text: "ChatGLM", link: "/en/docs/api/translate/chatglm" },
                    { text: "OpenAI", link: "/en/docs/api/translate/openai" },
                    { text: "Youdao", link: "/en/docs/api/translate/youdao" },
                    { text: "Tencent", link: "/en/docs/api/translate/tencent" },
                    {
                      text: "Transmart",
                      link: "/en/docs/api/translate/transmart",
                    },
                    {
                      text: "Volcengine",
                      link: "/en/docs/api/translate/volcengine",
                    },
                  ],
                },
                {
                  text: "Text Recogniztion",
                  collapsed: true,
                  items: [
                    { text: "Baidu OCR", link: "/en/docs/api/recognize/baidu" },
                    {
                      text: "Tencent OCR",
                      link: "/en/docs/api/recognize/tencent",
                    },
                    {
                      text: "VolcEngine OCR",
                      link: "/en/docs/api/recognize/volcengine",
                    },
                    {
                      text: "iFlyTek OCR",
                      link: "/en/docs/api/recognize/iflytek",
                    },
                    {
                      text: "Baidu Image Translate",
                      link: "/en/docs/api/recognize/baidu_img",
                    },
                    {
                      text: "Tencent Image Translate",
                      link: "/en/docs/api/recognize/tencent_img",
                    },
                    {
                      text: "iFlyTek LaTeX",
                      link: "/en/docs/api/recognize/iflytek_latex",
                    },
                    {
                      text: "Simple LaTeX",
                      link: "/en/docs/api/recognize/simple_latex",
                    },
                  ],
                },
                {
                  text: "Word Collection",
                  collapsed: true,
                  items: [
                    { text: "Anki", link: "/en/docs/api/collection/anki" },
                    { text: "Eudic", link: "/en/docs/api/collection/eudic" },
                  ],
                },
                {
                  text: "Text to Speech",
                  collapsed: true,
                  items: [{ text: "Lingva", link: "/en/docs/api/tts/lingva" }],
                },
              ],
            },
            { text: "FAQ", link: "/en/docs/faq", collapsed: false, items: [
              { text: "Cannot Run", link: "/en/docs/faq/run" },
              { text: "Selection Problem", link: "/en/docs/faq/selection" },
              { text: "Screenshot Problem", link: "/en/docs/faq/screenshot" },
              { text: "Always Ask for Accessibility Permission", link: "/en/docs/faq/alwaysAskForAccessibilityPermission" },
              { text: "Export Log", link: "/en/docs/faq/log" },
              { text: "macOS 15 Shortcut Problem", link: "/en/docs/faq/macos15Shortcut" },
            ]},
          ],
        },
      ],
    },
    footer: {
      message: `Released under the <a href='https://github.com/allentown521/saladict/blob/master/LICENSE' target='_blank'><b>GPL-3.0</b></a> License<br/>Copyright © ${new Date().getFullYear()}-present <a href='https://saladict.aichatone.com' target='_blank'><b>Saladict</b></a>`
    },
    editLink: {
      pattern:
        "https://github.com/allentown521/saladict-desktop-docs/edit/main/vitepress/:path",
      text: "Edit this page on GitHub",
    },
  },
};
