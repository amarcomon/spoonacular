import { IRecipe, IRecipes } from "../interfaces/recipes.interface";
import { API, API_KEY } from "../utils/api.constant";

export const getRecipes = (path: string): Promise<IRecipe> => {
  return fetch(`${API}${path}?${API_KEY}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};

export const getRandomRecipes = (path: string, number: number): Promise<IRecipes> => {
  return fetch(`${API}${path}?number=${number}&${API_KEY}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};
