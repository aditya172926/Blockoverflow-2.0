import { useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { invoke } from "@tauri-apps/api/tauri";

const ContentArea = () => {
    const store = useStore((state: any) => state);

    useEffect(() => {
        console.log("store ", store.fileContent);
    }, [store.fileContent]);

    const handleInput = async (event: any) => {
        console.log(event);
        if (event.ctrlKey && event.keyCode == 83) {
            store.updateFileContent(event.target.innerText);
            console.log("file path ", store.openFiles?.path);
            await invoke("save_file", { contents: event.target.innerText, path: store.openFiles?.path });
        }
    }

    return (
        <div
            id="contentArea"
            className="basis-3/4 p-3 bg-slate-100"
            contentEditable={true}
            onKeyUp={handleInput}
        >{store.fileContent}</div>
    )
}
export default ContentArea;