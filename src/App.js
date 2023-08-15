import { useEffect, useState } from "react";
import "./App.css";
import Navber from "./Pages/Hader/Navber";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./Pages/Home/ProjectDetails";
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";
import "../src/Pages/Home/FontStyle.css"


function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "my_dark"} className="fontstyle">
      <Navber handleThemeChange={handleThemeChange} theme={theme}></Navber>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProjectDetails />} />
      </Routes>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
