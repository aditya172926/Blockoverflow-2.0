use std::{fs::File, io::Write, path::{Path, PathBuf}};
use crate::structs::TreeNode;

pub fn build_file_tree<P: AsRef<Path>>(path: P) -> std::io::Result<TreeNode> {
    let path = path.as_ref();
    let name = path
        .file_name()
        .map(|os_str| os_str.to_string_lossy().into_owned())
        .unwrap_or_else(|| String::from("/"));

    let mut node: TreeNode = TreeNode {
        name,
        path: path.to_path_buf(),
        children: None,
    };

    if path.is_dir() {
        let mut children: Vec<TreeNode> = Vec::new();
        for entry in path.read_dir().expect("read_dir call failed") {
            if let Ok(entry) = entry {
                let child_path = entry.path();
                if let Ok(child_node) = build_file_tree(child_path) {
                    children.push(child_node);
                }
            }
        }
        node.children = Some(children)
    }
    Ok(node)
}

pub fn write_file(contents: String, path: PathBuf) {
    match File::create(path) {
        Ok(mut file) => {
            let _ = file.write_all(contents.as_bytes());
        },
        Err(e) => {
            eprintln!("Error in saving file {:?}", e);
        }
    };
}