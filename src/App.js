import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Country from "./components/Country";

function App() {
  return (
    <div className="App bg-green-300 ">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/name/belgium" element={<Country />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
