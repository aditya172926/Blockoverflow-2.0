use crate::helpers::build_file_tree;

#[tauri::command]
pub fn fetch_pwd() -> String {
    let path = match std::env::current_dir() {
        Ok(path) => {
            println!("Current working directory -> {:?}", path);
            build_file_tree(String::from(path.to_str().unwrap()));
            String::from(path.to_str().unwrap())
        }
        Err(e) => {
            eprintln!("Error in fetching current working directory {:?}", e);
            String::from("Error")
        }
    };
    path
}
