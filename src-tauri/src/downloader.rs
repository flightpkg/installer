use tauri::api::http::{ClientBuilder, HttpRequestBuilder, ResponseType};

#[tauri::command]
pub async fn download() {
      let client = ClientBuilder::new().build().unwrap();
      let response = client.send(
        HttpRequestBuilder::new("GET", "https://www.rust-lang.org")
          .unwrap()
          .response_type(ResponseType::Binary)
      ).await;
      if let Ok(response) = response {
        let bytes = response.bytes();
      }
}