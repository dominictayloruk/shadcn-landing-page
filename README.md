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
npm install
```

**Note:** If you encounter a peer dependency error with `@typescript-eslint` packages, try one of these solutions:

```bash
# Option 1: Delete lock file and reinstall (recommended)
rm package-lock.json
npm install

# Option 2: Use legacy peer deps flag
npm install --legacy-peer-deps
```

4. Run project

```bash
npm run dev
```

## Troubleshooting

### Dependency Resolution Error

If `npm install` fails with an `ERESOLVE` error related to TypeScript ESLint packages:

1. **Clean install** (recommended):

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Use legacy peer deps**:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Check Node version**: Ensure you're using Node.js 18+ and npm 9+
   ```bash
   node --version
   npm --version
   ```

For more details, see [PLAN.md](./PLAN.md)

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
npm install
```

4. Build command:

```bash
tsc && vite build
```
