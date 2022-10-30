import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
