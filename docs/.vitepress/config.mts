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
      {
        text: "Projects",
        items: [{ text: "All Projects", link: "/projects/" }],
      },
    ],

    sidebar: {
      "/examples/": [
        {
          text: "Projects",
          items: [
            {
              text: "Examples",
              collapsed: true,
              items: [
                {
                  text: "Markdown Examples",
                  link: "/examples/markdown-examples",
                },
                {
                  text: "API Examples",
                  link: "/examples/api-examples",
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
