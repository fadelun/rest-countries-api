import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Country from "./components/Country";
// import Country from "./components/Country02";
import Region from "./components/Region";

function App() {
  return (
    <div className="App bg-very-light-gray dark:bg-[#212E37] ">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:paramsName" element={<Country />} />
        <Route path="/regions/:paramsRegions" element={<Region />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
