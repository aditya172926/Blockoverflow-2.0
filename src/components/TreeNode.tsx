import { useState } from "react";
import { Nullable, TreeNodeInterface } from "../utils/interfaces";
import Tree from "./Tree";
import { readFileContents } from "../utils/helpers";
import { useStore } from "../hooks/useStore";

type Props = {
    node: TreeNodeInterface
}

const TreeNode = (props: Props) => {
    const { name, path, children } = props.node;
    const [showChildren, setShowChildren] = useState<boolean>(false);
    const store = useStore((state: any) => state);

    const handleClick = async () => {
        if (children)
            setShowChildren(!showChildren);
        else {
            let contents: Nullable<string> = null;
            if (!store.openFiles[path]) {
                console.log("calling backend");
                contents = await readFileContents(path); // backend call
                store.updateOpenFiles(props.node, store.openFiles, contents);
            } else {
                store.updateCurrentFile(store.openFiles[path]); // client side storage

            }
        }
    }

    return (
        <>
            <div onClick={handleClick} className="px2" key={name}>
                <span>{name}</span>
            </div>
            <ul className="px-2" style={{ borderLeft: "1px solid black" }}>
                {showChildren && <Tree treeData={children} />}
            </ul>
        </>
    )
}
export default TreeNode;