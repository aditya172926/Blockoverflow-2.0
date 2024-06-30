import { invoke } from "@tauri-apps/api/tauri"
import { TreeNodeInterface } from "./interfaces";

export const readFileContents = async(path: string) => {
    const contents = await invoke("read_file_contents", {path: path});
    return contents;
}

export const open_file_directory = async(): Promise<TreeNodeInterface> => {
    return await invoke("open_file_directory");
}

export const saveFile = async(contents: string, path?: string) => {
    await invoke("save_file", {contents: contents, path: path});
}