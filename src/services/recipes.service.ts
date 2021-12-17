import { Recipe } from "../interfaces/recipes.interface";
import { API, API_KEY } from "../utils/api.constant";

export const get = (path: string): Promise<Recipe> => {
  return fetch(`${API}${path}?${API_KEY}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};
