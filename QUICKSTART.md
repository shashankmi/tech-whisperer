# 🚀 Tech-Whisperer Quick Start for VS Code

## ⚠️ Important
**This is a web application, NOT a VS Code extension!**  
Open it as a project folder in VS Code, don't try to install it as an extension.

## 📦 First Time Setup

```bash
# 1. Open project in VS Code
code .

# 2. Install dependencies (in VS Code terminal)
npm install

# 3. Install recommended extensions when prompted
# Click "Install All" on the notification

# 4. Start development server
npm run dev
```

Your app will open at http://localhost:8080 🎉

## 🔧 Essential Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Check code quality |
| `npm run preview` | Preview production build |

## ⌨️ Useful VS Code Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Quick file open |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+` ` | Toggle terminal |
| `Ctrl+Shift+B` | Run build task (starts dev server) |
| `F5` | Start debugging |
| `Shift+Alt+F` | Format code |

## 🐛 Quick Fixes

**Can't find modules?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
- Press `Ctrl+Shift+P`
- Type "Reload Window"
- Press Enter

**Port 8080 in use?**
- Stop other dev servers
- Or kill the process: `lsof -ti:8080 | xargs kill`

**Changes not showing?**
- Make sure `npm run dev` is running
- Hard refresh browser: `Ctrl+Shift+R`

## 📁 Project Structure

```
tech-whisperer/
├── src/              ← Your code here
│   ├── components/   ← React components
│   ├── pages/        ← Page components
│   └── lib/          ← Utilities
├── public/           ← Static files (images, etc)
└── .vscode/          ← VS Code configuration
```

## 💡 Tips

- Save files to auto-format (enabled by default)
- Hover over code to see type information
- Use `Ctrl+Click` to jump to definitions
- Type `rafce` + Tab for React component template

## 📚 Need More Help?

- Full guide: [VSCODE_GUIDE.md](./VSCODE_GUIDE.md)
- General info: [README.md](./README.md)
- Project page: https://lovable.dev/projects/7e8b310a-ac23-47d8-b1f7-4bb8f4e79ecf

---

**Happy coding!** 🎨✨
