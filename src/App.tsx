import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Portfolio from "./modules/Portfolio";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Portfolio />} />
          {/* <Route path="swap" element={<Swap />} /> */}
          {/* <Route path="portfolio/*" element={<Portfolio />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
