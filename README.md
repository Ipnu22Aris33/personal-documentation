# VitePress Project Showcase

> A modern, customizable VitePress theme with dynamic project showcase and filtering system.

## ✨ Features

- 🎨 **Custom Theme** - Extended from VitePress default theme
- 🔄 **Auto Component Registration** - Automatic registration of layouts and components
- 🏷️ **Dynamic Filtering** - Filter projects by categories with URL hash support
- 📦 **Project Cards** - Beautiful project cards with images, tags, and links
- 🎯 **Smart Navigation** - Client-side routing for smooth page transitions
- 🌙 **Dark Mode** - Full support for VitePress dark mode
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Type Safe** - Built with TypeScript

## 📁 Project Structure

```
.vitepress/
├── theme/
│   ├── index.ts                 # Theme entry point
│   ├── layouts/
│   │   └── Project.vue          # Project showcase layout
│   ├── components/
│   │   └── ProjectCard.vue      # Project card component
│   └── styles/
│       └── index.css            # Global styles
└── config.ts                    # VitePress configuration
```

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Start dev server
npm run docs:dev
```

### Basic Usage

Create a project showcase page:

```md
---
layout: Project
title: My Projects
description: Collection of my awesome projects
defaultFilter: All
projects:
  - title: Blog Platform
    description: Full-stack blogging platform
    categories: [Backend, Frontend]
    tags: [Next.js, Prisma, PostgreSQL]
    docs: /docs/blog-platform
    demo: https://blog.example.com
    github: https://github.com/user/blog
    image: /images/blog.jpg
  
  - title: E-Commerce API
    description: RESTful API for online store
    categories: Backend
    tags: [Node.js, Express, MongoDB]
    docs: /docs/ecommerce-api
    github: https://github.com/user/api
---
```

## 📝 Project Configuration

### Frontmatter Options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | `string` | ✅ | Must be `"Project"` |
| `title` | `string` | ❌ | Page title (default: "Projects") |
| `description` | `string` | ❌ | Page description |
| `showHeader` | `boolean` | ❌ | Show/hide header (default: `true`) |
| `defaultFilter` | `string` | ❌ | Default filter tab (default: "All") |
| `projects` | `array` | ✅ | Array of project objects |

### Project Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Project title |
| `description` | `string` | ✅ | Project description |
| `categories` | `string \| string[]` | ❌ | Single or multiple categories |
| `tags` | `string[]` | ❌ | Technology tags |
| `docs` | `string` | ❌ | Documentation link (internal) |
| `demo` | `string` | ❌ | Demo link (external) |
| `github` | `string` | ❌ | GitHub repository link |
| `image` | `string` | ❌ | Project image path |

## 🎨 Customization

### CSS Variables

Customize the layout using CSS variables:

```css
:root {
  --project-max-width: 1200px;
  --project-title-size: 2.5rem;
}
```

### Custom Styling

Add custom styles in your markdown:

```md
---
layout: Project
title: My Projects
---

<style>
:root {
  --project-max-width: 1400px;
}

.project-header {
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  padding: 3rem;
  border-radius: 1rem;
}
</style>
```

## 🔧 Advanced Features

### Multiple Categories

Projects can belong to multiple categories:

```md
projects:
  - title: Full-Stack App
    categories: [Backend, Frontend, Mobile]
    # Will appear in all three category filters
```

### Category Filtering

Filters are automatically generated from project categories. Click a filter to see only projects in that category.

**URL Hash Support:**
- `/projects#all` - Show all projects
- `/projects#backend` - Show only backend projects
- `/projects#frontend` - Show only frontend projects

### Auto Component Registration

All Vue components in `./layouts/` and `./components/` are automatically registered:

```
./layouts/CustomLayout.vue  → <LayoutCustomLayout />
./components/Button.vue     → <Button />
```

## 📚 Examples

### Minimal Example

```md
---
layout: Project
projects:
  - title: Simple Project
    description: A simple project
    tags: [Vue, TypeScript]
---
```

### Full Example

```md
---
layout: Project
title: 🚀 Project Showcase
description: Collection of my professional projects
defaultFilter: All
showHeader: true
projects:
  - title: E-Commerce Platform
    description: Full-featured online shopping platform
    categories: [Fullstack, Backend, Frontend]
    tags: [Next.js, Node.js, PostgreSQL, Redis, Stripe]
    image: /images/ecommerce.jpg
    docs: /docs/ecommerce
    demo: https://shop.example.com
    github: https://github.com/user/ecommerce
  
  - title: Mobile Weather App
    description: Real-time weather forecast application
    categories: Mobile
    tags: [React Native, TypeScript, OpenWeather API]
    image: /images/weather.jpg
    docs: /docs/weather-app
    demo: https://weather.example.com
    github: https://github.com/user/weather
---

<style>
:root {
  --project-max-width: 1300px;
}
</style>
```

### Without Header

```md
---
layout: Project
showHeader: false
projects:
  - title: My Project
    description: Custom header in markdown
---

# Custom Header

My custom header content here...
```

## 🛠️ Development

### File Structure

```
project/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       ├── index.ts
│       ├── layouts/
│       │   └── Project.vue
│       ├── components/
│       │   └── ProjectCard.vue
│       └── styles/
│           └── index.css
├── docs/
│   ├── index.md
│   └── projects/
│       └── index.md
├── public/
│   └── images/
└── package.json
```

### Scripts

```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  }
}
```

## 🎯 Best Practices

1. **Use Internal Links for Docs** - Use relative paths like `/docs/project` for smooth navigation
2. **External Links for Demo/GitHub** - These will open in new tabs automatically
3. **Consistent Image Sizes** - Use 16:9 aspect ratio images for best results
4. **Category Naming** - Use consistent category names across projects
5. **Tag Organization** - List most important technologies first

## 📦 Dependencies

- VitePress
- Vue 3
- TypeScript

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using VitePress