import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Recipes } from "./pages/recipes/Recipes";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/recipes" element={<Recipes />}></Route>
      </Routes>
    </Router>
  );
};
