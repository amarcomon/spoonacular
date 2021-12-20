import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Recipes } from "./pages/recipes/Recipes";
import { Header } from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";


library.add([faUtensilSpoon, faBook]);

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
};
