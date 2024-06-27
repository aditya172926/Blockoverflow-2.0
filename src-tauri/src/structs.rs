use std::path::PathBuf;

#[derive(Debug)]
pub struct TreeNode {
    pub name: String,
    pub path: PathBuf,
    pub children: Option<Vec<TreeNode>>
}