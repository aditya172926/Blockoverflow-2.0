import ContentArea from "./components/ContentArea";
import FileManager from "./components/FileManager";


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
