import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";
import Tree from "./Tree";

const FileManager = () => {

    const [pwd, setPwd] = useState<any>();

    const testTree = [
        {
            key: "0",
            label: "Documents",
            children: [
                {
                    key: "0-0",
                    label: "Document 1-1",
                    children: [
                        {
                            key: "0-1-1",
                            label: "Document-0-1.doc",
                            children: []
                        },
                        {
                            key: "0-1-2",
                            label: "Document-0-2.doc",
                            children: []
                        },
                    ],
                },
            ],
        },
        {
            key: "1",
            label: "Desktop",
            children: [
                {
                    key: "1-0",
                    label: "document1.doc",
                    children: []
                },
                {
                    key: "0-0",
                    label: "documennt-2.doc",
                    children: []
                },
            ],
        },
        {
            key: "2",
            label: "Downloads",
            children: [],
        },
    ];

    useEffect(() => {
        let pwd = async () => {
            const pwd = await invoke("fetch_pwd");
            setPwd(pwd);
        };
        pwd();
    }, []);

    return (
        <div className="basis-1/4 px-3">
            <Tree treeData={testTree} />
        </div>
    );
}

export default FileManager