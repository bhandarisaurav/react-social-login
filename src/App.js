import React from "react";
import "./App.css";

import FacebookAndGoogle from "./components/FacebookAndGoogle/FacebookAndGoogle";

function App() {
  return (
    <div className="App">
      <FacebookAndGoogle />
      <footer>
        <h5 className="text-white font-weight-bold">
          All Rights Reserved &nbsp;
          <a
            className="text-decoration-none"
            href="https://sauravbhandari.com.np"
          >
            @sauravbhandari
          </a>
        </h5>
      </footer>
    </div>
  );
}

export default App;
