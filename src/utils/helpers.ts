import { invoke } from "@tauri-apps/api/tauri"

export const readFileContents = async(path: string) => {
    const contents = await invoke("read_file_contents", {path: path});
    return contents;
}