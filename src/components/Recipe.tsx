import { IRecipe } from "../interfaces/recipes.interface";
import style from "./Recipe.module.css"

export const Recipe = (recipe: IRecipe) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{recipe.title}</h2>
      <img className={style.image} src={recipe.image} alt="" />
      <p className={style.description}>{recipe.summary}</p>
    </div>
  );
};
