/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const spoonacularUrl = "https://spoonacular.com/food-api/docs";
  return (
    <div className={style.headerContainer}>
      <Link to="/">
        <img className={style.imgLogo} src="./logo192.png" alt="React Logo" />
      </Link>

      <div>
        <Link className={style.link} to="/recipes">
          <FontAwesomeIcon className={style.icon} icon="book" />
          Recipes
        </Link>

        <a className={style.link} href={spoonacularUrl} target={'_blank'}>
          <FontAwesomeIcon className={style.icon} icon="utensil-spoon" />
          Spoonacular
        </a>
      </div>
    </div>
  );
};
