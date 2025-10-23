Great news: your files already scream **React + TypeScript + Tailwind**. The UI folder looks like a copy of **shadcn/ui** (Radix-driven React components), and your CSS uses Tailwind v4-style tokens (`@theme`, `@custom-variant`). That tells us:

* **Framework:** React (not Vue/Svelte)
* **Bundler:** Vite (simple + fast)
* **Language:** TypeScript (`.tsx` everywhere)
* **Styling:** Tailwind CSS **v4** (because of `@theme` etc.)
* **No router needed** (your `App.tsx` swaps “home/project” with state)
* **Icons/Charts:** `lucide-react`, `recharts`

Below I’ll 1) explain why the structure is like this, 2) show how to adapt it with the **fewest edits**, and 3) give exact, copy-paste steps to get `npm run dev` working.

---

# Why the structure looks like this

* `components/ui/*` — these are **shadcn/ui**-style React components (Card, Dialog, Tabs, etc.) built on **@radix-ui/** primitives. That’s why you’ll need a handful of Radix packages.
* `components/*` — your page sections (Hero, Projects, About, …) that **render those UI primitives** and pull icons from `lucide-react`.
* `projects/*` — content modules that export typed “sections” (pure React nodes) rendered by `ProjectDetail`.
* `styles/globals.css` — Tailwind-first styling with **Tailwind v4 syntax** (`@theme`, CSS vars, `@layer base`, `@apply`). You just need to add the Tailwind import line at the top.
* `App.tsx` — the app’s root page, switching between home and a project detail using local state. No routing library is required.

In short: it’s a **React + Tailwind v4** single-page portfolio that uses **shadcn/ui** components.

---

# Minimal-change plan

We’ll create a **Vite + React + TypeScript** project and drop your code into `src/`. We’ll install **Tailwind v4** and the few libraries your UI components expect. Two tiny edits are needed:

1. **Tailwind import at the top** of `styles/globals.css`
2. Fix a bad chart import that looks like this in `components/ui/chart.tsx` (or similar):

```ts
import * as RechartsPrimitive from "recharts";
```

→ Change it to:

```ts
import * as RechartsPrimitive from "recharts";
```

…and we’ll pin `recharts` in `package.json` instead.

Everything else can stay as-is.

---

# Do this step-by-step (tested commands)

> Prereqs: Node.js 20+ (LTS) and npm. (Works on macOS, Linux, or Windows/WSL.)

### 1) Scaffold a Vite React+TS app

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
```

### 2) Install runtime deps your components use

```bash
npm i react react-dom lucide-react recharts \
@radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio \
@radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible \
@radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
@radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar \
@radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress \
@radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select \
@radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch \
@radix-ui/react-tabs @radix-ui/react-tooltip \
cmdk embla-carousel-react sonner framer-motion react-day-picker date-fns \
class-variance-authority clsx tailwind-merge
```

> Notes
>
> * That looks like a lot, but it matches the feature set in `components/ui/*` so you don’t have to rip anything out.
> * If you later delete unused UI files, you can prune deps.

### 3) Install Tailwind v4 (no config files needed)

```bash
npm i -D tailwindcss
```

Open `src/main.tsx` and **import your CSS**:

```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css' // ← add this line

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

Open `src/styles/globals.css` and make the **first line**:

```css
@import "tailwindcss";
```

(Keep all your existing CSS below—`@theme`, `@layer base`, etc. are Tailwind v4 features and will work.)

### 4) Move your code into `src/`

Copy your folders/files so you end up with:

```
src/
  App.tsx
  components/** (all files)
  projects/**   (all files)
  styles/globals.css
  Attributions.md
  guidelines/How-to-Add-Projects.md
```

> If Vite created its own `App.tsx`, overwrite it with yours.

### 5) Fix the one bad import in the chart component

Find `components/ui/chart.tsx` (or wherever you saw it) and replace:

```ts
import * as RechartsPrimitive from "recharts";
```

with:

```ts
import * as RechartsPrimitive from "recharts";
```

### 6) Pin package versions (optional but recommended)

Open `package.json` and ensure:

```json
"dependencies": {
  "recharts": "2.15.2",
  "lucide-react": "^0.468.0"
  // ...others as installed
}
```

### 7) Run it

```bash
npm run dev
```

Open the printed local URL (usually [http://localhost:5173](http://localhost:5173)).

---

# What each piece is doing (plain-English)

* **Vite**: It’s the dev server + bundler. It reads `index.html`, loads `src/main.tsx`, mounts `<App />`, and hot-reloads when you save files.
* **React (with TypeScript)**: You write UI as components in `.tsx`. Your `App.tsx` is the root. No router is required because you already manage views via React state and `window.history.pushState`.
* **Tailwind CSS v4**: Utility classes like `px-6 py-3 rounded-full`. Your `globals.css` defines color tokens and typography with `@theme` and `@layer`—v4 features. Importing `"tailwindcss"` at the top activates Tailwind.
* **shadcn/ui + Radix**: The `components/ui/*` files are prebuilt, accessible React components that wrap **@radix-ui** primitives. That’s why we installed those `@radix-ui/*` packages.
* **lucide-react**: The icons (`ArrowDown`, `Github`, etc.).
* **recharts**: Used by your `ui/chart.tsx`. We import from `"recharts"` (not a versioned path) and lock the version via `package.json`.

---

# Common pitfalls & quick fixes

* **Styles don’t apply** → Make sure `./styles/globals.css` is imported in `src/main.tsx`, and that the first line of that CSS file is `@import "tailwindcss";`.
* **“Module not found: recharts”** → You missed the import fix; it should be `import * as RechartsPrimitive from "recharts";`.
* **Radix component not found** → Ensure the matching `@radix-ui/react-...` package listed above is installed.
* **Type errors on props** → You’re in TS. If it’s noisy, you can start with `skipLibCheck: true` in `tsconfig.json` and tighten later.

---

# Why not Next.js, Vue, Svelte, Router, PostCSS, etc.?

* **Next.js**: Great for SSR/SEO, but you don’t need routing or server features here. More config, more moving parts.
* **Vue/Svelte**: Your code is `.tsx` React. Porting would mean rewriting everything.
* **React Router**: Your app uses a **single page + local state**. Add a router only if you want proper URLs for sections later.
* **PostCSS config**: Tailwind v4 works without a manual PostCSS/Tailwind config. Keep it simple.

---

# Tiny “sanity” files (for reference)

**`index.html`** (Vite created this; leave it as-is):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
  </head>
  <body class="dark"> <!-- optional: start in dark mode -->
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**`src/main.tsx`** (already shown above)
**`src/styles/globals.css`** (first line only):

```css
@import "tailwindcss";
/* then your existing variables, @theme, @layer, etc. */
```

---

If you want, send me the exact contents of `components/ui/chart.tsx` and I’ll confirm the one-line import fix, plus I can generate a ready-to-paste `package.json` with all the deps pinned.
