import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
//<h1>Women Soccer Player</h1>
  return (
    <nav className="navbar navbar2">
      <h1>Women's World Cup</h1>
      <hr/>
      <br/>
      <div className="dark">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          Toggle Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
