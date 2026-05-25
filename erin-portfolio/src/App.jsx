import React, { useState } from "react"
import './App.css'
import NavigationButton from "./components/navigationButtons"
import Home from "./pages/home";
import Illustration from "./pages/illustration";
import GameAssets from "./pages/gameassets";
import Animation from "./pages/animation";
import { XIcon } from "@phosphor-icons/react";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function navigateToPage(pageNum) {
    setPageNumber(pageNum);
  }

  return (
    <>
      <nav>
        <div className="normal-nav">
          <NavigationButton name={"Home"} navigate={() => navigateToPage(0)} number={"zero"} active={pageNumber === 0 ? "active" : ""} />
          <NavigationButton name={"Illustration"} navigate={() => navigateToPage(1)} number={"one"} active={pageNumber === 1 ? "active" : ""} />
          <NavigationButton name={"Animation"} navigate={() => navigateToPage(2)} number={"two"} active={pageNumber === 2 ? "active" : ""} />
          <NavigationButton name={"Game Assets"} navigate={() => navigateToPage(3)} number={"three"} active={pageNumber === 3 ? "active" : ""} />
        </div>
        <div className={`burger-menu ${burgerMenu ? "menu-open" : "menu-closed"}`} onClick={() => setBurgerMenu(!burgerMenu)}>
          <div className={`burger-line-one ${burgerMenu ? "menu-open" : "menu-closed"}`}></div>
          <div className={`burger-line-two ${burgerMenu ? "menu-open" : "menu-closed"}`}></div>
          <div className={`burger-line-three ${burgerMenu ? "menu-open" : "menu-closed"}`}></div>
          <div className={`burger-menu-x ${burgerMenu ? "menu-open" : "menu-closed"}`}>
            <XIcon size={35} color="#ffffff"/>
          </div>
        </div>
      </nav>
      <section>
        {
          pageNumber === 0 ? (
            <Home />
          ) : pageNumber === 1 ? (
            <Illustration />
          ) : pageNumber === 2 ? (
            <Animation />
          ) : (
            <GameAssets />
          )
        }
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Erin Sephton. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
