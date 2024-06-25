import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";


function App() {

  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="basis-1/4">
          <p>File column</p>
        </div>
        <div className="basis-3/4">
          <p>Writing column</p>
        </div>
      </div>
    </div>
  );
}

export default App;
