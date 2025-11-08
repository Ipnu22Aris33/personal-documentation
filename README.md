# VitePress Documentation Site

> A modern documentation site built with VitePress and Tailwind CSS v4.

## ✨ Features

- 🎨 **Modern Theme** - Enhanced with Tailwind CSS v4 and custom components
- 🔄 **Component System** - Custom Vue components for enhanced documentation
- 🌙 **Dark Mode** - Full support for VitePress dark mode
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Type Safe** - Built with TypeScript
- ⚡ **Fast Development** - Powered by Vite for instant HMR
- 🔍 **Local Search** - Built-in search functionality

## 📁 Project Structure

```
vitepress/
├── docs/                           # Documentation source
│   ├── .vitepress/               # VitePress configuration
│   │   ├── config.mts              # Main configuration file
│   │   ├── theme/                  # Custom theme
│   │   │   ├── index.ts            # Theme entry point with component registration
│   │   │   ├── components/         # Vue components (ProjectCard)
│   │   │   └── styles/             # Custom styles (index.css)
│   │   └── public/                 # Static assets
│   ├── index.md                    # Homepage
│   └── projects/                   # Projects documentation
│       ├── example/                # Example project
│       └── index.md                # Projects index
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 📊 Current Status

This VitePress documentation project is currently configured with:

- ✅ **VitePress Core**: Fully functional documentation site
- ✅ **TypeScript Support**: Type-safe development environment
- ✅ **Custom Components**: ProjectCard component registered globally
- ✅ **Navigation**: Configured with Home and Projects links
- ✅ **Local Search**: Built-in VitePress search functionality
- ✅ **GitHub Integration**: Social link configured
- ⚠️ **Tailwind CSS**: Ready for installation (see setup instructions below)

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Development

The site will be available at `http://localhost:5173` after running the development server.

### Optional: Add Tailwind CSS v4

To enable styling with Tailwind CSS v4:

```bash
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography autoprefixer postcss
```

Then configure according to the Tailwind CSS v4 setup instructions in the Configuration section.

### Setup Details

This project includes:
- ✅ Custom component system with global registration (`ProjectCard`)
- ✅ TypeScript support with proper `tsconfig.json`
- ✅ Local search functionality with VitePress built-in search
- ✅ Responsive design with VitePress default theme
- ✅ Navigation menu with dropdown support
- ✅ GitHub social link integration
- ⚠️ Tailwind CSS v4 ready (dependencies need to be installed)

## 📝 Configuration

### VitePress Configuration

The main configuration file is located at `docs/.vitepress/config.mts`. Key settings include:

- **Site metadata**: Title, description, and base URL
- **Navigation**: Top navigation links with dropdown menus
- **Social links**: GitHub integration
- **Search**: Local search configuration
- **Sidebar**: Configured for examples section

#### Current Configuration

```typescript
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    search: { provider: "local" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", items: [{ text: "All Projects", link: "/projects/" }] }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  }
});
```

### Tailwind CSS v4 Configuration

Tailwind CSS v4 is configured using the Vite plugin approach:

- **Vite Plugin**: `@tailwindcss/vite` integrated in `config.mts`
- **Styles**: Imported in `docs/.vitepress/theme/styles/index.css`
- **Typography**: Enhanced with `@tailwindcss/typography` plugin
- **Content Scanning**: Configured to scan Vue, Markdown, TypeScript, and JavaScript files

#### Configuration Details

The Tailwind CSS v4 setup includes:
- **Vite Plugin Integration**: Uses `@tailwindcss/vite` for optimal performance
- **Typography Plugin**: `@tailwindcss/typography` for enhanced text styling
- **Content Paths**: Configured to scan `../../**/*.{vue,md,ts,js}`
- **Import Syntax**: Uses `@import "tailwindcss"` for v4 compatibility

### Custom Components

Custom Vue components can be created in `docs/.vitepress/theme/components/` and registered in `docs/.vitepress/theme/index.ts`.

### TypeScript Configuration

The project includes TypeScript support with:
- **tsconfig.json**: TypeScript configuration for the project
- **Type-safe imports**: Full TypeScript support in Vue components
- **VitePress types**: Proper typing for VitePress configuration and theme extensions

### Styling

- **Tailwind CSS v4**: Integrated via `@tailwindcss/vite` plugin
- **Custom styles**: Located in `docs/.vitepress/theme/styles/index.css`
- **Typography plugin**: Enhanced typography with `@tailwindcss/typography`

## 🔧 Advanced Features

### Tailwind CSS v4 Ready

This project is configured to support Tailwind CSS v4 with the Vite plugin approach:

- **Vite Plugin**: Ready for `@tailwindcss/vite` integration
- **Configuration**: Theme files prepared for Tailwind CSS v4
- **Typography**: Support for `@tailwindcss/typography` plugin

**Note**: Install Tailwind CSS dependencies to enable styling features:
```bash
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography autoprefixer postcss
```

### Component System

Vue components are registered globally in `theme/index.ts`:

```typescript
enhanceApp({ app }) {
  app.component("ProjectCard", ProjectCard);
}
```

Components can be used directly in Markdown files:
```markdown
<ProjectCard title="My Project" description="Project description" />
```

## 📚 Usage Examples

### Basic Markdown

Create documentation pages using standard Markdown syntax:

```markdown
# Getting Started

Welcome to our documentation site.

## Features

- Feature 1
- Feature 2
- Feature 3

## Code Example

```javascript
console.log('Hello, VitePress!');
```
```

### Using Custom Components

Incorporate Vue components in your documentation:

```markdown
# Project Showcase

<ProjectCard 
  :project="{
    title: 'My Project',
    description: 'A cool project description',
    tags: ['Vue', 'TypeScript'],
    docs: '/projects/example',
    demo: 'https://example.com',
    github: 'https://github.com/user/repo'
  }"
/>
```

The ProjectCard component accepts a `project` prop with the following properties:
- `title` (required): Project title
- `description` (required): Project description
- `image`: Optional project image URL
- `tags`: Array of tag strings
- `docs`: Internal documentation link (opens in same tab)
- `demo`: External demo link (opens in new tab)
- `github`: GitHub repository link (opens in new tab)

### Atomic Design Structure

Organize components using atomic design principles:

```
components/
├── atoms/          # Basic building blocks (Button, Input, etc.)
├── molecules/      # Groups of atoms (SearchForm, Card, etc.)
├── organisms/      # Complex components (Header, Footer, etc.)
├── templates/      # Page layouts
└── pages/          # Specific page components
```

## 🛠️ Development

### Project Structure

```
vitepress/
├── docs/                           # Documentation source
│   ├── .vitepress/
│   │   ├── config.mts            # VitePress configuration
│   │   ├── theme/
│   │   │   ├── index.ts          # Theme entry point
│   │   │   ├── components/       # Vue components
│   │   │   │   └── ProjectCard.vue
│   │   │   └── styles/
│   │   │       └── index.css     # Tailwind CSS imports
│   │   └── public/               # Static assets
│   ├── index.md                  # Homepage
│   └── projects/                   # Documentation sections
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

### Available Scripts

- `npm run docs:dev` - Start development server
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview production build

### Deployment

After building with `npm run docs:build`, the static files will be in `docs/.vitepress/dist`. You can deploy these files to any static hosting service:

- **GitHub Pages**: Push the dist folder to your repository's `gh-pages` branch
- **Netlify**: Connect your repository and set the publish directory to `docs/.vitepress/dist`
- **Vercel**: Import your repository and Vercel will auto-detect the VitePress configuration
- **Other hosts**: Upload the contents of `docs/.vitepress/dist` to your web server

## 🎯 Best Practices

1. **Content Organization** - Structure documentation with clear hierarchy and navigation
2. **Component Usage** - Use Vue components to enhance documentation interactivity
3. **Consistent Styling** - Leverage Tailwind CSS utilities for consistent design
4. **Performance** - Use VitePress built-in optimizations for fast loading
5. **Accessibility** - Ensure documentation is accessible and keyboard-navigable
6. **Search Optimization** - Utilize VitePress local search for better discoverability

## 📦 Dependencies

### Core Dependencies

- **@vueuse/motion** - Vue animation utilities

### Development Dependencies

- **vitepress** ^1.6.4 - Static site generator
- **vue** ^3.5.24 - Progressive JavaScript framework
- **typescript** ^5.9.3 - Type-safe JavaScript

### Tailwind CSS Setup

Note: The Tailwind CSS dependencies are not currently installed in this project. To add Tailwind CSS v4 support:

```bash
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography autoprefixer postcss
```

Then configure according to the Tailwind CSS v4 setup instructions above.

## 📄 License

MIT

## 🎯 Summary

This VitePress documentation site provides a solid foundation for creating technical documentation with:

- **Modern Stack**: VitePress + Vue 3 + TypeScript
- **Component System**: Custom Vue components for enhanced interactivity
- **Flexible Configuration**: Easy to customize and extend
- **Production Ready**: Optimized build process and deployment options
- **Developer Experience**: Hot reload, TypeScript support, and component auto-import

The project is ready for immediate use and can be easily extended with additional components, styling, and content as needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🔧 Troubleshooting

### Tailwind CSS Not Working

If Tailwind CSS classes are not being applied:

1. Ensure the Vite development server is running
2. Check that `docs/.vitepress/theme/styles/index.css` contains the Tailwind imports
3. Verify that `config.mts` has the Tailwind Vite plugin configured

**Note**: This project uses Tailwind CSS v4 with the Vite plugin approach, not the traditional PostCSS setup.

### Component Registration Issues

If components are not rendering:

1. Check that components are registered in `docs/.vitepress/theme/index.ts`
2. Ensure component names match the registered names
3. Verify component files exist in the correct directory

### Build Issues

If you encounter build errors:

1. Check TypeScript configuration in `tsconfig.json`
2. Ensure all dependencies are installed with `npm install`
3. Verify that all import paths are correct

---

Built with ❤️ using [VitePress](https://vitepress.dev) and [Tailwind CSS v4](https://tailwindcss.com)