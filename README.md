# Shadcn/UI Landing Page Template

## <a href="https://ui.shadcn.com/" target="_blank">ShadcnUI</a> + <a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.

![shadch-landing-page](https://github.com/dominictayloruk/shadcn-landing-page/assets/61714687/3ba7b51f-9589-4541-800a-5ab7cecad1b5)

Build your React landing page effortlessly with the required sections to your project.

<a href="https://shadcn-landing-page-5g5.pages.dev/" target="_blank">Cloudflare Demo</a>
<a href="https://shadcn-landing-page-dt.vercel.app/" target="_blank">Vercel Demo</a>

## Sections

- [x] Navbar
- [x] Sidebar(mobile)
- [x] Hero
- [x] Sponsors
- [x] About
- [x] Stats
- [x] How It Works
- [x] Features
- [x] Services
- [x] Call-to-Action (CTA)
- [x] Testimonials
- [x] Team
- [x] Pricing
- [x] Newsletter
- [x] Frequently Asked Questions(FAQ)
- [x] Contact form
- [x] Footer

## Features

- [x] Fully Responsive Design
- [x] User Friendly Navigation
- [x] Dark Mode
- [x] Meta tags
- [x] Modern Tech Stack (React 19, Vite 8, TypeScript 7, Tailwind CSS 4)
- [x] Code Quality Tools (Biome, Knip)

## Local install

1. Clone this repository:

```bash
git clone https://github.com/dominictayloruk/shadcn-landing-page.git
```

2. Go into project

```bash
cd shadcn-landing-page
```

3. Install dependencies

```bash
pnpm install
```

4. Run development server

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Biome check (linter + formatter)
- `pnpm check:fix` - Run Biome check with auto-fix
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Run Biome linter with auto-fix
- `pnpm format` - Format code with Biome
- `pnpm format:check` - Check code formatting with Biome
- `pnpm knip` - Analyze unused dependencies and exports

## Tech Stack

### Core

- React 19
- Vite 8
- TypeScript 7

### Styling

- Tailwind CSS 4
- shadcn/ui components
- Lucide React icons

### Development Tools

- Biome 2
- Knip 6

For detailed dependency information, see [PLAN.md](./PLAN.md)

## Deploy to Coolify

Choose Nixpacks as the build pack.

1. Set the source repository:

```
https://github.com/dominictayloruk/shadcn-landing-page.git
```

2. Publish directory:

```
/dist
```

3. Install command:

```
pnpm install
```

4. Build command:

```bash
tsc && vite build
```
