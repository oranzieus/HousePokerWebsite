# House Poker Club Website

A premium poker club website built with modern web technologies, featuring game schedules, leaderboards, tournament winners, and photo galleries.

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and development server
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **React Router** - Client-side routing
- **Framer Motion** - Animation library

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager

To check if Node.js is installed, run:
```bash
node --version
npm --version
```

## Getting Started

Follow these steps to download and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/oranzieus/HousePokerWebsite.git
cd HousePokerWebsite
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages listed in `package.json`.

### 3. Start the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:8080` by default. Open this URL in your web browser to view the site.

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- TypeScript type checking

### 4. Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
HousePokerWebsite/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   ├── Leaderboards.tsx
│   │   ├── Winners.tsx
│   │   ├── Schedule.tsx
│   │   ├── Gallery.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- **Home Page** - Hero section with club introduction
- **Leaderboards** - Player rankings and statistics
- **Winners** - Tournament winners showcase
- **Schedule** - Upcoming games and events
- **Gallery** - Photo gallery from poker events
- **Responsive Design** - Mobile-friendly interface
- **Dark Theme** - Elegant dark-themed UI

## Development

### Adding New Components

Components follow the shadcn/ui pattern and are located in `src/components/`. UI primitives are in `src/components/ui/`.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to:
- `src/index.css` - Global styles
- Component files - Using Tailwind utility classes

### Type Safety

TypeScript is configured for strict type checking. Component props and functions should be properly typed.

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, you can change it in `vite.config.ts`:

```typescript
server: {
  host: "::",
  port: 3000, // Change to your preferred port
}
```

### Dependencies Issues

If you encounter dependency issues, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you're using a compatible Node.js version (18.x or higher):

```bash
node --version
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to House Poker Club.

## Support

For questions or issues, please open an issue on the GitHub repository.
