import "./App.css";
import { useState, useReducer } from "react";
import { ArticleStats } from "./components/ArticleStats";
import Logo from "./logo.svg";

function App() {
  const [text, setText] = useState("");
  const [showExplanation, toggleExplanation] = useReducer(
    (state) => !state,
    false
  );

  return (
    <div className="container">
      <img src={Logo} alt="logo" className="logo" />
      <label htmlFor="text">
        <textarea
          aria-label="Area to add text"
          id="text"
          name="text"
          rows="10"
          className="article"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </label>
      <div className="stats">
        <ArticleStats showExplanation={showExplanation} text={text} />
        <div className="show-explanation">
          <button onClick={toggleExplanation}>What are these stats?</button>
        </div>
      </div>
    </div>
  );
}

export default App;
