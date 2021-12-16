import { useEffect, useState } from "react";
import {get} from "../../utils/httpClient";

export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        get("recipes/random").then((randomRecipes) => {
            setRecipes((randomRecipes) => recipes.concat(randomRecipes));
            console.log(randomRecipes);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <h1>Recipes</h1>
    )
}