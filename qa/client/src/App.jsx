import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Knn from "./components/Knn/Knn";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GsLogistic from "./components/gs-logistic/GsLogistic";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/knn" element={<Knn />} />
            <Route path="/gslogistic" element={<GsLogistic />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
