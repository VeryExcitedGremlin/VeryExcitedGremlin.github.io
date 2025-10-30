# useEffect Cleanup Demo

This demo shows what happens when you forget to clean up side effects in React.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How to See the Bug

1. **Open browser console** - Press `F12`
2. **Click the RED button** - "Mount Bad Timer (No Cleanup)"
3. **Wait 3-5 seconds** - Watch RED console messages appear
4. **Click "Unmount Bad Timer"** - Component disappears from page
5. **KEEP WATCHING CONSOLE** - RED messages KEEP APPEARING (This is the bug!)

The timer keeps running even after the component is gone. This is a memory leak.

## How to See the Fix

1. **Click the GREEN button** - "Mount Good Timer (With Cleanup)"
2. **Wait 3-5 seconds** - Watch GREEN console messages appear
3. **Click "Unmount Good Timer"** - See GREEN cleanup messages
4. **CONSOLE STOPS** - No more timer messages (Properly fixed!)

The cleanup function stops the timer when the component unmounts.

## The Problem (BadTimer.jsx)

```javascript
useEffect(() => {
  setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  // Missing cleanup - interval keeps running forever
}, []);
```

## The Solution (GoodTimer.jsx)

```javascript
useEffect(() => {
  const timerId = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  // Cleanup function - stops the timer when component unmounts
  return () => clearInterval(timerId);
}, []);
```

## What You'll Learn

- How to use cleanup functions in useEffect
- Why cleanup prevents memory leaks
- When you need cleanup (timers, event listeners, subscriptions)
