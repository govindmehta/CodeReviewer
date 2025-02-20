# 🚀 AI-Powered Code Review Editor  

An interactive code editor with built-in AI-powered code review functionality! This project allows users to write, edit, and analyze their code, receiving instant feedback from an AI model. The sleek dark-themed UI provides a seamless experience for developers.  

---

## 📌 Features  

✅ **Live Code Editor** – Write and edit JavaScript/TypeScript code with syntax highlighting  
✅ **AI-Powered Code Review** – Get instant feedback on code quality, errors, and improvements  
✅ **Minimal & Dark-Themed UI** – Elegant and distraction-free interface  
✅ **Syntax Highlighting** – Powered by Prism.js for a smooth coding experience  
✅ **Markdown Support** – AI feedback is displayed in a well-formatted markdown output  

---

## 🛠️ Tech Stack  

- **React (Vite)** – Frontend framework  
- **React-Simple-Code-Editor** – Lightweight code editor  
- **Prism.js** – Syntax highlighting  
- **Axios** – API requests to AI backend  
- **Markdown Rendering** – Displays AI feedback in formatted text  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
git clone https://github.com/govindmehta/CodeReviewer.git <br>
cd CodeReviewer

### 2️⃣ Install dependencies
npm install

### 3️⃣ Run the project
npm run dev <br>
The application will be available at http://localhost:5173/

## 🔗 Backend Setup
This project requires an AI-powered backend to analyze code. Make sure you have an API running at:
http://localhost:3000/ai/get-review
You can modify the endpoint in App.tsx if needed.

🎨 Dark-themed UI with a smooth experience

💡 Future Improvements<br>
🚀 Support for multiple languages (Python, Java, C++, etc.)<br>
🚀 More advanced AI analysis (Security vulnerabilities, performance optimizations)<br>
🚀 Save & Load code snippets<br>


🔗 Contributions, feedback, and improvements are welcome! 🎉<br>
If you find this useful, don't forget to ⭐ star the repo! 🚀✨
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> fbc7b06 (Added new files)
