export type Nullable<T> = T | null;

export interface TreeNodeInterface {
    name: string;
    path: string;
    children: TreeNodeInterface[];
    isDirty: Nullable<boolean>;
    fileContent: Nullable<string>;
}