import React, {  useState }  from "react";
import useDarkSide from "../hook/useDarkSide";





function Header() {
  const [colorTheme, setTheme] = useDarkSide();
  // const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)
  

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
            {/* <img src={IconMoon} alt="moon-icon" width={16} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={16}  viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
            <p className="font-semibold ml-3">Dark Mode</p>
          </button>
          </div>
          </div>
        
      </nav>
    </header>
  );
}

export default Header;
