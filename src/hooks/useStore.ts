import { create } from "zustand";

export const useStore = create((set) => ({
    fileContent: "",
    updateFileContent: (newContent: string) => set({fileContent: newContent})
}));