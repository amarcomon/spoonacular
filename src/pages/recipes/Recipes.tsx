import { useEffect, useState } from "react";
import { getRandomRecipes } from "../../services/recipes.service";
import { IRecipe } from "../../interfaces/recipes.interface";
import { Recipe } from "../../components/Recipe";
import style from "./Recipes.module.css";

export const Recipes = () => {
  const recipesArray: Array<IRecipe> = [];
  const [recipes, setRecipes] = useState(recipesArray);

  useEffect(() => {
    getRandomRecipes("recipes/random", 10).then((randomRecipes) => {
      setRecipes(randomRecipes.recipes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.recipeContainer}>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};
