## Courses

- [Learn JavaScript Fundamentals (Codecademy)](https://www.codecademy.com/learn/introduction-to-javascript)
  - Do Sections 1-5, 7

## Docs

- https://www.codecademy.com/resources/docs/javascript/operators
- https://www.codecademy.com/resources/docs/general/conditionals
- [Understanding JavaScript by Debugging](https://www.youtube.com/watch?v=bx8Pc-Si-3g)

---

## Other Tools

- [jsbubbl - scope visualizer](https://jsbubbl.es/)

## Tools - Live Feedback

### 1. Install Node.js and npm

Node.js is required for both plugins to run JavaScript code.

#### macOS (via Homebrew)

1. Open Terminal
2. Run:

```bash
brew install node
```

3. Confirm installation:

```bash
node -v
npm -v
```

#### Windows

1. Visit [https://nodejs.org](https://nodejs.org/)
2. Download Windows Installer .msi
3. Run the installer (make sure the box to install npm is checked)
4. Open powershell and confirm:

```cmd
node -v
npm -v
```

Note: If you run into an error you may need to open an administrator powershell and run the following:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

### 2. Install one of these VSCode Plugins

#### Quokka.js (Live JavaScript Coding)

- Plugin ID: `WallabyJs.quokka-vscode`

**Steps:**

1. Open VSCode
2. Go to the Extensions panel (`Cmd+Shift+X` or `Ctrl+Shift+X`)
3. Search: `WallabyJs.quokka-vscode
4. Click **Install**
5. To start Quokka in a file:

   - Open a JavaScript file
   - Press `Cmd/Ctrl + Shift + P`, then select one of the following:
     - **Quokka.js: Start on Current File**
     - **Quokka.js: New File**

#### JavaScript REPL

- Plugin ID: `achil.vscode-javascript-repl`

**Steps:**

1. Open VSCode
2. Go to the Extensions panel
3. Search: `achil.vscode-javascript-repl`
4. Click **Install**
5. To launch REPL:

   - Press `Cmd/Ctrl + Shift + P` , then select one of the following:
     - **JS Repl: Run** (to start on current file)
     - **JS Repl: New JavaScript File (.js)**
