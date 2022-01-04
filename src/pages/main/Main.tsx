import { useEffect, useState } from "react";
import { Recipe } from "../../components/Recipe";
import { IRecipe } from "../../interfaces/recipes.interface";
import { getRandomRecipes } from "../../services/recipes.service";
import style from "./Main.module.css";

export const Main = () => {
  const recipesArray: Array<IRecipe> = [];
  const [recipes, setRecipes] = useState(recipesArray);

  useEffect(() => {
    getRandomRecipes("recipes/random", 50).then((randomRecipes) => {
      setRecipes(randomRecipes.recipes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Random recipes</h1>
      <div className={style.recipeContainer}>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
};
