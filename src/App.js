import React, { useState, useEffect, Component } from "react";
import { Me, Work, Project, More } from "./pages/index.js";

function App() {
  // Top panel move to the main page button
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    document
      .getElementById(`page${buttonNumber}`)
      .scrollIntoView({ behavior: "smooth" });
  };
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Light mode and dark mode button

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      console.log("darkyy");
    } else {
      document.body.classList.remove("dark-mode");

      console.log("no more dark");
    }
  }, [isDarkMode]);

  const toggleLightDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <header>
        <div className="pf-menu">
          <button
            id="opt_me"
            className={`pf-opt ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            About Me
          </button>
          <button
            id="opt_work"
            className={`pf-opt ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            Work
          </button>
          <button
            id="opt_project"
            className={`pf-opt ${activeButton === 3 ? "active" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            Project
          </button>
        </div>
        <div className="pf-options">
          <div class="toggleWrapper">
            <input
              type="checkbox"
              id="toggle1"
              className="mobileToggle"
              checked={isDarkMode}
              onChange={toggleLightDark}
            />
            <label htmlFor="toggle1"></label>
          </div>
        </div>
      </header>
      <div className="contents">
        <div id="page1">
          <Me />
        </div>
        <div id="page2">
          <Work />
        </div>
        <div id="page3">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
