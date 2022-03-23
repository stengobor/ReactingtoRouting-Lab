import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mt-5">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Films/:filmid" element={<FilmsDetails />} />
          <Route path="/People" element={<People />} />
          <Route path="/People/:personid" element={<PeopleDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
