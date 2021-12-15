import { useEffect, useState } from "react";
import {get} from "../../utils/httpClient";

export function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        get("recipes/findByIngredients").then((randomRecipes) => {
            setRecipes((prevRecipes) => prevRecipes.concat(randomRecipes));
            console.log(recipes);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <h1>Recipes</h1>
    )
}