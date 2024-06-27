use std::path::Path;

use crate::structs::TreeNode;

pub fn build_file_tree<P: AsRef<Path>>(path: P) {
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
                println!("{:?}", entry);
            }
        }
    }
}
