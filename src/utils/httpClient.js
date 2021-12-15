const API = "https://api.spoonacular.com/";
const API_KEY = "apiKey=ea9c73e60aad40d5a3538a20d0a43e0c"

export function get(path) {
  return fetch(`${API}${path}?${API_KEY}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
