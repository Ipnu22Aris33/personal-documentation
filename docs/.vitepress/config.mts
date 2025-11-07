import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/projects/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Projects",
        items: [
          {
            text: "Examples",
            collapsed: true,
            items: [
              {
                text: "Markdown Examples",
                link: "/projects/markdown-examples",
              },
              {
                text: "API Examples",
                link: "/projects/api-examples",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
