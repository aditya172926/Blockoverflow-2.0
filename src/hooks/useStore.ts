import { create } from "zustand";
import { Nullable, TreeNodeInterface } from "../utils/interfaces";

export const useStore = create((set) => ({
    currentFile: null,
    updateFileContent: (newContent: string) => set({fileContent: newContent}),
    openFiles: {},
    updateOpenFiles: (file: TreeNodeInterface, openFiles: {[key: string]: TreeNodeInterface}, contents: Nullable<string>) => {
        let files = openFiles;
        files[file.path] = file;
        files[file.path].fileContent = contents;
        set({openFiles: files});
        set({currentFile: files[file.path]});
        console.log("in memory open files ", openFiles);
    }
}));