import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";

const FileManager = () => {
    const [pwd, setPwd] = useState<any>();
    useEffect(() => {
        let pwd = async() => {
            const pwd = await invoke("fetch_pwd");
            setPwd(pwd);
        };
        pwd();
    }, []);

    return (
        <div className="basis-1/4">
            <div className="flex flex-col">
                <div>{pwd}</div>
            </div>
        </div>
    );
}

export default FileManager