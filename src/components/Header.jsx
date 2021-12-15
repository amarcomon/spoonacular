import { Link } from "react-router-dom";
import style from "./Header.module.css";

export function Header() {
  return (
    <div className={style.headerContainer}>
      <Link to="/">
        <img className={style.imgLogo} src="./logo192.png" alt="React Logo" />
      </Link>

      <Link to="/recipes">Recipes</Link>
    </div>
  );
}
