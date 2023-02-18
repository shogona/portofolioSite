import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import MyPhoto from "./components/MyPhoto/Myphoto";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <MyPhoto />
      <AboutMe />
    </main>
  );
}

export default App;
