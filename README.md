# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7e8b310a-ac23-47d8-b1f7-4bb8f4e79ecf

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7e8b310a-ac23-47d8-b1f7-4bb8f4e79ecf) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Using this project in VS Code

**Important:** This is a **web application**, not a VS Code extension. You should open it as a regular project in VS Code, not try to install it as an extension.

### Prerequisites

1. **Install Node.js and npm** - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
2. **Install VS Code** - [Download from code.visualstudio.com](https://code.visualstudio.com/)

### Opening the Project in VS Code

You have several options:

**Option 1: Using Command Line**
```sh
# Clone and open in VS Code
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
code .
```

**Option 2: Using VS Code Directly**
1. Open VS Code
2. Go to `File > Open Folder...`
3. Navigate to and select your cloned repository folder
4. Click "Select Folder"

**Option 3: Clone from within VS Code**
1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type "Git: Clone" and press Enter
4. Paste your repository URL
5. Choose a folder location
6. Click "Open" when prompted

### Setting Up Your Development Environment

Once the project is open in VS Code:

1. **Install dependencies:**
   - Open the integrated terminal (`Ctrl+` ` or View > Terminal)
   - Run: `npm install`

2. **Install recommended VS Code extensions** (VS Code will prompt you):
   - ESLint
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features
   - React snippets

3. **Start the development server:**
   - In the terminal, run: `npm run dev`
   - The app will open at `http://localhost:8080`
   - Changes you make will automatically reload in the browser

### Available Commands

Run these in the VS Code integrated terminal:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality
- `npm run deploy` - Deploy to GitHub Pages

### Troubleshooting

**"Module not found" errors?**
- Make sure you've run `npm install` first
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Port 8080 already in use?**
- Stop any other development servers
- Or change the port in `vite.config.ts`

**TypeScript errors?**
- Ensure you have TypeScript installed: `npm install -g typescript`
- Reload VS Code window: `Ctrl+Shift+P` > "Developer: Reload Window"

**Can't see changes in browser?**
- Make sure `npm run dev` is running
- Check the terminal for any error messages
- Try hard refresh in browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7e8b310a-ac23-47d8-b1f7-4bb8f4e79ecf) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
