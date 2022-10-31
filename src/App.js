import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/v.honcharova/"
            target="_blank"
            rel="noreferrer"
          >
            Viktoriia Honcharova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/viktoriia-honcharova/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dazzling-basbousa-cdb610.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
