import { useState } from "react";
import { TreeNodeInterface } from "../utils/interfaces";
import Tree from "./Tree";
import { readFileContents } from "../utils/helpers";

type Props = {
    node: TreeNodeInterface
}

const TreeNode = (props: Props) => {
    const {name, path, children} = props.node;
    const [showChildren, setShowChildren] = useState<boolean>(false);

    const handleClick = async() => {
        if (children)
            setShowChildren(!showChildren);
        else {
            console.log("opening and reading file ", path);
            const contents = await readFileContents(path);
            console.log(`${name} contents ${contents}`);
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