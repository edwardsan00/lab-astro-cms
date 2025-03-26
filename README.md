# AstroShop E-commerce

A modern e-commerce platform built with Astro, React, and TailwindCSS.
URL(https://calm-tree-01d3e791e.6.azurestaticapps.net)

## Project Structure

This is a monorepo managed with Nx, structured as follows:

- `app/portal`: Main Astro application with pages and layouts
- `packages/ui`: Shared UI component library (React + TailwindCSS)

## Special Features

- **Independent Landing Pages**: Special category pages like `/ofertas` and `/novedades` that serve as dedicated landing pages with custom layouts
- **Regular Category Pages**: Standard category pages that use dynamic routing with `[category].astro`
- **Responsive Design**: Fully responsive design that works on mobile, tablet, and desktop
- **Utility Functions**: Common helper functions for formatting, transforming data, etc.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd lab-astro
npm install
```

### Development

Start the development server:

```bash
./run.sh dev
```

Or use Nx directly:

```bash
npx nx run portal:dev
```

### Building

Build all packages and applications:

```bash
./run.sh build
```

Or build specific parts:

```bash
# Build only UI library
./run.sh build:ui

# Build only portal app
./run.sh build:portal
```

### Preview Production Build

Preview the production build locally:

```bash
./run.sh preview
```

## Nx Commands

This project uses Nx for dependency management. Some useful commands:

```bash
# List all projects
npx nx list

# Graph project dependencies
npx nx graph

# Run a specific target for a project
npx nx run <project>:<target>

# Run a specific target for all projects
npx nx run-many --target=<target>
```

## UI Component Library

The UI component library is located in `packages/ui` and includes:

- Button
- Card
- Input
- Badge
- Carousel
- ProductCard
- Rating

## Technologies Used

- **Astro**: For static site generation and server-side rendering
- **React**: For interactive UI components
- **TailwindCSS**: For styling
- **TypeScript**: For type safety
- **Nx**: For monorepo management
