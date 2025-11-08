// https://vitepress.dev/guide/custom-theme
import { h, Component } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./styles/index.css";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),

  enhanceApp({ app }) {
    const layouts = import.meta.glob<{ default: Component }>(
      "./layouts/**/*.vue",
      { eager: true }
    );

    const components = import.meta.glob<{ default: Component }>(
      "./components/**/*.vue",
      { eager: true }
    );

    autoRegister(app, layouts, "./layouts/");
    autoRegister(app, components, "./components/");
  },
} satisfies Theme;

const toPascalCase = (str: string) =>
  str
    .split(/[/\\.-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const autoRegister = (
  app: any,
  modules: Record<string, { default: Component }>,
  base: string
) => {
  for (const [path, module] of Object.entries(modules)) {
    const cleanPath = path.replace(base, "").replace(/\.vue$/, "");
    const name = toPascalCase(cleanPath);
    app.component(name, module.default);
  }
};
