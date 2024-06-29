import { useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { invoke } from "@tauri-apps/api/tauri";

const ContentArea = () => {
    const store = useStore((state: any) => state);

    useEffect(() => {
        console.log("store ", store.fileContent);
    }, [store.fileContent]);

    const handleInput = async (event: any) => {
        if (event.ctrlKey && event.keyCode == 83) {
            await invoke("save_file", { contents: event.target.innerHTML, path: store.openFiles?.path });
        }
    }

    return (
        <div
            id="contentArea"
            className="basis-3/4 p-3 bg-slate-100"
            contentEditable={true}
            onKeyUp={handleInput}
            dangerouslySetInnerHTML={{__html: store.fileContent}}
        ></div>
    )
}
export default ContentArea;