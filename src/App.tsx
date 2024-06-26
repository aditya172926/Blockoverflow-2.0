import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";


function App() {

  return (
    <div className="container">
      <div className="flex flex-row h-screen">
        <div className="basis-1/4">
          <p>File column</p>
        </div>
        <div className="basis-3/4" contentEditable={true}>
          <p>this is a editable textarea</p>
        </div>
      </div>
    </div>
  );
}

export default App;
