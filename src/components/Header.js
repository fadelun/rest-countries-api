import React, { useEffect, useState }  from "react";
import useDarkSide from "../hook/useDarkSide";
import IconMoon from "../images/moon-outline.svg";




function Header() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)
  

  const toggleDarkMode = () => {
    setTheme(colorTheme);
     
  }

  

  return (
    <header className="fixed dark:text-white inset-x-0 top-0 z-50">
      <nav className="shadow-md bg-white dark:bg-dark-blue py-4">
        <div className="w-5/6 mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold ">Where in the world?</h1>
          <div id="switch-btn" className="flex justify-center">
          {/* <DarkModeSwitch
             checked={darkSide}
          onChange={toggleDarkMode}
          size={20}
          
          />
            <p className="font-semibold ml-3">Dark Mode</p>

          </div> */}
            
          <button onClick={toggleDarkMode} id="toggle-btn" className="flex justify-center">
            <img src={IconMoon} alt="moon-icon" width={16} />
            <p className="font-semibold ml-3">Dark Mode</p>
          </button>
          </div>
          </div>
        
      </nav>
    </header>
  );
}

export default Header;
