import { create } from "zustand";
import { TreeNodeInterface } from "../utils/interfaces";

export const useStore = create((set) => ({
    fileContent: "",
    updateFileContent: (newContent: string) => set({fileContent: newContent}),
    openFiles: {},
    updateOpenFiles: (file: TreeNodeInterface) => set({openFiles: file})
}));