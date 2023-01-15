import React, { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const onFocus = useRef(false);

  const focusAbout = () => {
    onFocus.current = true;
    console.log(onFocus);
  };

  useEffect(() => {}, [onFocus]);

  return (
    <div className="App">
      <Navbar clickOnBtn={focusAbout} />
      <Products />
      <Footer onF={onFocus.current} />
    </div>
  );
}

export default App;
