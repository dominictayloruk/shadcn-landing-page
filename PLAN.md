# Project Status & Plan

## Project Status

✅ **All systems operational** - Dependencies installed successfully, build working, no known issues.

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

## Development Tools

- **Knip** - Configured to detect unused dependencies, files, and exports
- **Biome** - Code linting and formatting
- **TypeScript** - Type checking

## Project Structure

```
shadcn-landing-page/
├── src/
│   ├── components/     # React components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite config
├── tailwind.config.js # Tailwind config
└── README.md          # Documentation
```

## Tech Stack

### Core

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript 7
- **CSS Framework:** Tailwind CSS 4

### UI Components

- **Component Library:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Notifications:** Sonner

### Forms & Validation

- **Form Management:** React Hook Form 7
- **Validation:** Zod 4

### Development Tools

- **Linting & Formatting:** Biome 2
- **Dependency Analysis:** Knip 6

## Known Issues

None currently.
