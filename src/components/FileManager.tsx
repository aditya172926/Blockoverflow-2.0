import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";
import Tree from "./Tree";

const FileManager = () => {

    const [fileTree, setfileTree] = useState<any>([]);

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

    return (
        <div className="basis-1/4 px-3">
            <div>
                <button type="button" onClick={openFolder}>Open folder</button>
            </div>
            <Tree treeData={fileTree} />
        </div>
    );
}

export default FileManager