use std::{path::PathBuf, fs};
use tauri::api::dialog::blocking::FileDialogBuilder;

use crate::{helpers::build_file_tree, structs::TreeNode};

#[tauri::command]
pub fn fetch_file_tree(path: Option<PathBuf>) -> TreeNode {
    let file_tree = match path {
        Some(path) => {
            let node: TreeNode = match build_file_tree(String::from(path.to_str().unwrap())) {
                Ok(t_node) => t_node,
                Err(e) => {
                    eprintln!("Failed to build tree view {:?}", e);
                    TreeNode::default()
                }
            };
            node
        }
        None => {
            eprintln!("Error in fetching current working directory");
            TreeNode::default()
        }
    };
    file_tree
}

#[tauri::command]
pub fn read_file_contents(path: String) -> String {
    let contents: String = match fs::read_to_string(path) {
        Ok(text) => text,
        Err(e) => {
            eprintln!("Error while reading the file {:?}", e);
            String::from("Unable to read the file")
        }
    };
    contents
}

#[tauri::command]
pub fn open_file_directory() -> TreeNode {
    let folder_path: Option<PathBuf> = FileDialogBuilder::new().pick_folder();
    fetch_file_tree(folder_path)
}