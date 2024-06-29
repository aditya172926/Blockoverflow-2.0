import { useStore } from "../hooks/useStore";
import { saveFile } from "../utils/helpers";

const ContentArea = () => {
    const store = useStore((state: any) => state);

    const handleInput = async (event: any) => {
        if (event.ctrlKey && event.keyCode == 83) {
            await saveFile(event.target.innerHTML, store.openFiles?.path);
        }
    }

    return (
        <div
            id="contentArea"
            className="basis-3/4 p-3 bg-slate-100 max-h-screen"
            style={{overflowY: "scroll"}}
            contentEditable={true}
            onKeyUp={handleInput}
            dangerouslySetInnerHTML={{__html: store.fileContent}}
        ></div>
    )
}
export default ContentArea;