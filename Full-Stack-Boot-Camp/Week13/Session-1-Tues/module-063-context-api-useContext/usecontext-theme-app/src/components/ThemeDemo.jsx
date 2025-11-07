import { useTheme } from "../contexts/ThemeContext";

export default function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-demo ${theme}`}>
      <h3>Theme Demonstration</h3>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <p>This component automatically updates when the theme changes!</p>

      <div className="theme-showcase">
        <div className="color-box">Background color changes with theme</div>
        <div className="text-sample">Text color adapts to theme</div>
      </div>

      <button onClick={toggleTheme} className="theme-toggle-local">
        Toggle Theme Locally
      </button>

      <div className="context-explanation">
        <h4>Context API in Action:</h4>
        <ul>
          <li>This component uses useTheme() custom hook</li>
          <li>No props needed - direct access to theme state</li>
          <li>Automatically re-renders when theme changes</li>
          <li>Can trigger theme changes from anywhere</li>
        </ul>
      </div>
    </div>
  );
}
