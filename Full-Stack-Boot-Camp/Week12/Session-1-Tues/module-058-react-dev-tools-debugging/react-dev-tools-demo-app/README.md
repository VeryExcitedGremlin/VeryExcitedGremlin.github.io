# React DevTools & Debugging Demo

Learn React debugging with hands-on examples and professional DevTools techniques.

## Quick Start

```bash
npm install
npm run dev
# Open the URL shown in your terminal (Vite will auto-select an available port)
```

## Prerequisites

**Install React Developer Tools Extension:**
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

**Verify Installation:**
1. Start the app and open it in your browser
2. Press F12 to open DevTools
3. Look for ⚛️ Components tab (should appear after Console, Elements, etc.)
4. If you don't see it: refresh the page or check that the extension is enabled

## What You'll Learn

✅ Install and configure React DevTools
✅ Navigate component trees and inspect props/state
✅ Debug state changes and data flow
✅ Use breakpoints and console debugging
✅ Understand React StrictMode
✅ Debug custom hooks and common issues

## Demo Sections

### Section 1: Installation & Setup
**Practice:** Open Components tab, inspect UserProfile, watch props/state change in real-time
**Success:** You can edit component props directly in DevTools

### Section 2: Component Tree Navigation
**Practice:** Explore component hierarchy, search for components, track data flow
**Success:** You can find any component quickly and understand parent-child relationships

### Section 3: Debugging State & Props
**Practice:** Track state changes, debug prop drilling, analyze re-renders
**Success:** You can trace why a component re-rendered and what props changed

### Section 4: StrictMode Testing
**Practice:** Understand double execution, debug cleanup functions, handle component lifecycle
**Success:** You understand why effects run twice in development and how to write proper cleanup

### Section 5: Advanced Debugging
**Practice:** Find the stale closure bug, use breakpoints, debug form validation
**Success:** You can identify and fix the BuggyCounter using DevTools

## Common Issues

**Can't see Components tab?**
- Refresh the page
- Check extension is installed and enabled
- Make sure you're in development mode (npm run dev)

**StrictMode running effects twice?**
- This is intentional in development
- Helps catch bugs early
- Write proper cleanup functions

**Component tree looks wrong?**
- Check for JavaScript errors in Console
- Refresh DevTools panel
- Ensure components are properly exported

## Tips

- Keep Components tab open while developing
- Use search (Ctrl+F) to find components quickly
- Click component names to see source code
- Edit props in DevTools to test edge cases
- Watch console for lifecycle logs
