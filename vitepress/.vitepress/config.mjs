import { defineConfig } from "vitepress";
import { enConfig } from "./config/en";
import { zhConfig } from "./config/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Saladict",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/logo/icon.svg",
    siteTitle: "Saladict",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          en: {},
        },
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/allentown521/saladict" }],
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      ...zhConfig,
    },
    en: {
      label: "English",
      lang: "en",
      ...enConfig,
    },
  },
  sitemap: {
    hostname: "https://app.saladict.net",
    transformItems: (items) => {
      return items.map((item) => {
        return {
          ...item,
          changefreq: 'weekly',
          priority: item.url === '/' ? 1.0 : 0.8
        }
      })
    }
  }
});
