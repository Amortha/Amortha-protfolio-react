import { useEffect, useState } from 'react';
import './App.css';
import Navber from './Pages/Hader/Navber';


import Home from './Pages/Home/Home';


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
    <div data-theme={theme && "my_dark"} className="">  
      <Navber handleThemeChange={handleThemeChange} theme={theme}></Navber>
   <Home></Home>
  
    </div>
  );
}

export default App;
