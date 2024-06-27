import { useEffect } from "react";
import { TreeNodeInterface } from "../utils/interfaces";
import TreeNode from "./TreeNode";

type Props = {
    treeData: TreeNodeInterface[]
}

const Tree = (props: Props) => {
    useEffect(() => {
        if (!props.treeData || props.treeData.length == 0) return;
    }, [props.treeData]);

    return (
        <ul>
            {
                props.treeData.map((node) => {
                    return <TreeNode node={node} />
                })
            }
        </ul>
    )
};
export default Tree;