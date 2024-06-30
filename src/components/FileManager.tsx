import { useState } from "react";
import { open_file_directory } from "../utils/helpers";
import { TreeNodeInterface } from "../utils/interfaces";
import Tree from "./Tree";

const FileManager = () => {
    const [fileTree, setfileTree] = useState<TreeNodeInterface[]>([]);

    const openFolder = async () => {
        setfileTree([await open_file_directory()]);
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