import { useStore } from "../hooks/useStore";
import { hardSaveFile } from "../utils/helpers";

const ContentArea = () => {
    const store = useStore((state: any) => state);

    const handleInput = async (event: any) => {
        if (event.ctrlKey && event.keyCode == 83) { // save file (Ctrl + S)
            store.saveFileContent(event.target.innerHTML, store.currentFile?.path); // client save (soft save)
            await hardSaveFile(event.target.innerHTML, store.currentFile?.path); // backend save (hard save)
        }
    }

    return (
        <>
            <div
                id="contentArea"
                className="basis-3/4 p-3 bg-slate-100 max-h-screen"
                style={{ overflowY: "scroll" }}
                contentEditable={store.currentFile?.fileContent ? true : false}
                onKeyUp={handleInput}
                dangerouslySetInnerHTML={{ __html: store.currentFile?.fileContent ? store.currentFile?.fileContent : "Welcome to blockoverflow 2.0"}}
            >
            </div>
        </>


    )
}
export default ContentArea;