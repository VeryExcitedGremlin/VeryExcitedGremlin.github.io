import { useState } from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThemeDemo from "./components/ThemeDemo";

function App() {
  return (
    <>
      <ThemeProvider>
        <section>
          <h2>1. Theme Context (Basic Usage)</h2>
          <ThemeDemo />
        </section>
      </ThemeProvider>
    </>
  );
}

export default App;
