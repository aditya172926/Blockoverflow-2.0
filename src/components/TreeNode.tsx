import { useState } from "react";
import { TreeNodeInterface } from "../utils/interfaces";
import Tree from "./Tree";

type Props = {
    node: TreeNodeInterface
}

const TreeNode = (props: Props) => {
    const {key, label, children} = props.node;
    const [showChildren, setShowChildren] = useState<boolean>(false);

    const handleClick = () => {
        setShowChildren(!showChildren);
    }

    return (
        <>
            <div onClick={handleClick} className="px2" key={key}>
                <span>{label}</span>
            </div>
            <ul className="px-2" style={{ borderLeft: "1px solid black" }}>
                {showChildren && <Tree treeData={children} />}
            </ul>
        </>
    )
}
export default TreeNode;