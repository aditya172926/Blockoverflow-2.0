use std::{path::PathBuf, io::Result, fs};

use crate::{helpers::build_file_tree, structs::TreeNode};

#[tauri::command]
pub fn fetch_file_tree() -> TreeNode {
    let path = match std::env::current_dir() {
        Ok(path) => {
            println!("Current working directory -> {:?}", path);
            let node = build_file_tree(String::from(path.to_str().unwrap()));
            // String::from(path.to_str().unwrap())
            node.unwrap() 
        }
        Err(e) => {
            eprintln!("Error in fetching current working directory {:?}", e);
            TreeNode {
                name: String::from(""),
                path: PathBuf::from(""),
                children: None,
            }
        }
    };
    path
}

#[tauri::command]
pub fn read_file_contents(path: String) -> String {
    println!("File path to read is {:?}", path);
    let contents = fs::read_to_string(path).expect("Failed to read file");
    contents
}