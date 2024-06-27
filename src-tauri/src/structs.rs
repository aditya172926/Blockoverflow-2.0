use std::path::PathBuf;

use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct TreeNode {
    pub name: String,
    pub path: PathBuf,
    pub children: Option<Vec<TreeNode>>
}