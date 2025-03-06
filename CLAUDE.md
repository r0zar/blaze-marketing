# Blaze Marketing Development Guide

## Build & Development Commands
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm format` - Format code with Prettier

## Architecture
This is a Next.js marketing website for the Signet Chrome extension. It includes demo integration with the Signet SDK.

## Code Style Guidelines
- **TypeScript**: Use strict typing with full type annotations
- **Imports**: Group by external → internal, React/Next first
- **Formatting**: 2-space indentation, semicolons required
- **Naming**: 
  - PascalCase for components/types/interfaces
  - camelCase for variables/functions
  - kebab-case for file names
- **Components**: Functional components with React hooks
- **Styling**: Tailwind CSS with utility-first approach
- **Project Structure**: Group by feature/component type
- **Package Manager**: pnpm recommended