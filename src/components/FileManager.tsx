import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";
import Tree from "./Tree";

const FileManager = () => {

    const [fileTree, setfileTree] = useState<any>([]);

    useEffect(() => {
        let generateFileTree = async () => {
            setfileTree([await invoke("fetch_file_tree")]);
        };
        generateFileTree();
    }, []);

    return (
        <div className="basis-1/4 px-3">
            <Tree treeData={fileTree} />
        </div>
    );
}

export default FileManager