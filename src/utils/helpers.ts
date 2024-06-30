import { invoke } from "@tauri-apps/api/tauri"
import { Nullable, TreeNodeInterface } from "./interfaces";

export const readFileContents = async(path: string): Promise<Nullable<string>> => {
    return await invoke("read_file_contents", {path: path});
}

export const open_file_directory = async(): Promise<TreeNodeInterface> => {
    return await invoke("open_file_directory");
}

export const saveFile = async(contents: string, path?: string) => {
    await invoke("save_file", {contents: contents, path: path});
}