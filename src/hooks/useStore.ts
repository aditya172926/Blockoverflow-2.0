import { create } from "zustand";
import { Nullable, TreeNodeInterface } from "../utils/interfaces";

export const useStore = create((set) => ({
    currentFile: null,
    updateCurrentFile: (file: TreeNodeInterface) => set({ currentFile: file }),
    openFiles: {},
    updateOpenFiles: (
        file: TreeNodeInterface,
        contents: Nullable<string>) => set((state: any) => {
            let files = state.openFiles;
            files[file.path] = file;
            files[file.path].fileContent = contents;
            return { openFiles: files, currentFile: files[file.path] };
        }),
    saveFileContent: (contents: Nullable<string>, path: string) => set((state: any) => {
        let files = state.openFiles;
        files[path].fileContent = contents;
        return { openFiles: files };
    })
}));