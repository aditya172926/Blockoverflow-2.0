// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use commands::{fetch_file_tree};
mod commands;
mod structs;
mod helpers;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_file_tree])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
