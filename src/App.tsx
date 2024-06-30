import ContentArea from "./components/ContentArea";
import FileManager from "./components/FileManager";


function App() {

  window.addEventListener("beforeunload", (e: any) => {
    e.preventDefault();
    console.log(e)
  });

  return (
    <div className="container" id="container">
      <div className="flex flex-row min-h-screen max-h-screen">
        <FileManager />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
