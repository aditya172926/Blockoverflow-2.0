#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn fetch_pwd() -> String {
    let path = match std::env::current_dir() {
        Ok(path) => {
            println!("Current working directory -> {:?}", path);
            String::from(path.to_str().unwrap())
        }
        Err(e) => {
            eprintln!("Error in fetching current working directory {:?}", e);
            String::from("Error")
        }
    };
    path
}
