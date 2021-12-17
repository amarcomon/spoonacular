import { useEffect, useState } from "react";
import { get } from "../../services/recipes.service";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    get("recipes/random").then((randomRecipes) => {
      setRecipes(randomRecipes.recipes[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>{recipes?.title}</h1>;
};
