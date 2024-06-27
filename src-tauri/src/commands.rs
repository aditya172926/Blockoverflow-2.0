use std::path::PathBuf;

use crate::{helpers::build_file_tree, structs::TreeNode};

#[tauri::command]
pub fn fetch_pwd() -> TreeNode {
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
