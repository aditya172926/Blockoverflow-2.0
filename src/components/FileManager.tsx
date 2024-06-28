import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";
import Tree from "./Tree";
import { useStore } from "../hooks/useStore";

const FileManager = () => {
    const [fileTree, setfileTree] = useState<any>([]);
    const fileContent = useStore((state: any) => state.fileContent);

    useEffect(() => {
        let generateFileTree = async () => {
            // setfileTree([await invoke("fetch_file_tree")]);
        };
        generateFileTree();
    }, []);

    const openFolder = async() => {
        console.log("open folder");
        setfileTree([await invoke("open_file_directory")]);
    }

    const saveFile = async() => {
        await invoke("save_file", {contents: fileContent});
    }

    return (
        <div className="basis-1/4 px-3">
            <div>
                <button type="button" onClick={openFolder}>Open folder</button>
                <button type="button" onClick={saveFile}>Save</button>
            </div>
            <Tree treeData={fileTree} />
        </div>
    );
}

export default FileManager