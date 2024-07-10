import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Bootcamp from "./pages/Bootcamp";

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Bootcamp />} path="/summerbootcamp" exact />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
