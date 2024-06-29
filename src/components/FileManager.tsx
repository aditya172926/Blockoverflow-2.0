import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { open_file_directory, saveFile } from "../utils/helpers";
import Tree from "./Tree";

const FileManager = () => {
    const [fileTree, setfileTree] = useState<any>([]);
    const fileContent = useStore((state: any) => state.fileContent);

    const openFolder = async () => {
        setfileTree([await open_file_directory()]);
    }

    return (
        <div className="basis-1/4 px-3">
            <div>
                <button type="button" onClick={openFolder}>Open folder</button>
                <button type="button" onClick={async () => { await saveFile(fileContent) }}>Save</button>
            </div>
            <Tree treeData={fileTree} />
        </div>
    );
}

export default FileManager