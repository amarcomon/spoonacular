import { Link } from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Link to="/">
        <img className={style.imgLogo} src="./logo192.png" alt="React Logo" />
      </Link>

      <Link className={style.link} to="/recipes">Recipes</Link>
    </div>
  );
};
