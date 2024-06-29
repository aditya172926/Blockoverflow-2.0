use std::{fs, io::Write, path::{Path, PathBuf}};
use tauri::api::dialog::blocking::FileDialogBuilder;

use crate::{helpers::{build_file_tree, write_file}, structs::TreeNode};

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
        Ok(text) => {
            println!("{:?}", text);
            text
        },
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

#[tauri::command]
pub fn save_file(contents: String, path: Option<String>) {
    println!("path {:?}, content {:?}", path, contents);
    match path {
        Some(f_path) => {
            write_file(contents, PathBuf::from(f_path));
        },
        None => {
            let saved_file: Option<PathBuf> = FileDialogBuilder::new().add_filter("Text", &["txt"]).save_file();
            println!("Saved file {:?}", saved_file);
            match saved_file {
                Some(path) => write_file(contents, path),
                None => {
                    eprintln!("No path provided");
                }
            };
        }
    }
}