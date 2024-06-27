import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import FileManager from "./components/fileManager";
import ContentArea from "./components/ContentArea";


function App() {

  return (
    <div className="container">
      <div className="flex flex-row h-screen">
        <FileManager />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
