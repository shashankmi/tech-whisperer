# Getting Started with Tech-Whisperer in VS Code

This guide will help you set up and use the Tech-Whisperer project in Visual Studio Code.

## Important Note

**This is a web application, not a VS Code extension.** You should open it as a project/folder in VS Code, not try to install it as an extension.

## Quick Start

### 1. Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [VS Code](https://code.visualstudio.com/)

### 2. Open the Project

Choose one method:

**A. From Terminal:**
```bash
cd /path/to/tech-whisperer
code .
```

**B. From VS Code:**
- `File > Open Folder...`
- Select the `tech-whisperer` folder

### 3. Install Dependencies

When you first open the project, VS Code will suggest installing recommended extensions. Click "Install All" to get the best experience.

Then, open the integrated terminal (`Ctrl+` ` or `View > Terminal`) and run:

```bash
npm install
```

### 4. Start Development

Run the development server:

```bash
npm run dev
```

The application will open at [http://localhost:8080](http://localhost:8080)

## VS Code Features Setup

### Recommended Extensions

The project includes recommended extensions that will be suggested automatically. These include:

- **ESLint** - Code quality and error checking
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **Prettier** - Code formatting
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **Path Intellisense** - Autocomplete for file paths
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Error Lens** - Inline error highlighting

### Running Tasks

Press `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac) to run the default build task (starts dev server).

Or press `Ctrl+Shift+P` and type "Run Task" to see all available tasks:
- **npm: dev** - Start development server
- **npm: build** - Build for production
- **npm: lint** - Run linter
- **npm: preview** - Preview production build

### Debugging

To debug in Chrome:
1. Make sure the dev server is running (`npm run dev`)
2. Press `F5` or go to `Run > Start Debugging`
3. This will launch Chrome and attach the debugger
4. Set breakpoints in your code by clicking in the gutter

## Project Structure

```
tech-whisperer/
├── .vscode/              # VS Code configuration
│   ├── extensions.json   # Recommended extensions
│   ├── settings.json     # Workspace settings
│   ├── launch.json       # Debug configuration
│   └── tasks.json        # Task definitions
├── src/                  # Source code
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── lib/             # Utilities and helpers
│   └── App.tsx          # Main application
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Common Commands

Run these in the integrated terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at http://localhost:8080 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run deploy` | Deploy to GitHub Pages |

## Tips & Shortcuts

### VS Code Shortcuts

- `Ctrl+P` - Quick file open
- `Ctrl+Shift+P` - Command palette
- `Ctrl+` ` - Toggle terminal
- `Ctrl+Shift+F` - Search in files
- `F2` - Rename symbol
- `Alt+Up/Down` - Move line up/down
- `Shift+Alt+F` - Format document

### TypeScript IntelliSense

- Hover over any variable/function to see its type
- `Ctrl+Space` - Trigger suggestions
- `Ctrl+.` - Quick fix

### React Development

- Type `rafce` and press Tab - Create React Arrow Function Component
- Type `useEffect` and press Tab - Create useEffect hook
- `Ctrl+Click` on a component to go to its definition

## Troubleshooting

### "Cannot find module" errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Reload VS Code: `Ctrl+Shift+P` > "Developer: Reload Window"

### ESLint not working

1. Make sure the ESLint extension is installed
2. Check the output panel: `View > Output`, select "ESLint" from dropdown
3. Try: `Ctrl+Shift+P` > "ESLint: Restart ESLint Server"

### Tailwind CSS classes not autocompleting

1. Make sure the Tailwind CSS IntelliSense extension is installed
2. Check that `tailwind.config.ts` exists in the project root
3. Reload VS Code window

### Changes not reflecting in browser

1. Make sure `npm run dev` is running in the terminal
2. Check for errors in the terminal
3. Try hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
4. Try clearing browser cache

### TypeScript errors everywhere

1. Make sure you've run `npm install`
2. Open any `.ts` or `.tsx` file
3. Check bottom-right of VS Code - it should show TypeScript version
4. If it shows wrong version, click it and select "Use Workspace Version"

## Need More Help?

- Check the [main README](./README.md) for general project information
- Visit the [Lovable project page](https://lovable.dev/projects/7e8b310a-ac23-47d8-b1f7-4bb8f4e79ecf)
- Check the [Vite documentation](https://vitejs.dev/)
- Check the [React documentation](https://react.dev/)

## Contributing

When making changes:
1. Make sure the dev server is running to see changes live
2. Run `npm run lint` before committing
3. Test your changes in the browser
4. Commit and push - changes will sync with Lovable

Happy coding! 🚀
