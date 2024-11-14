import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import StakeUnstake from "./modules/stake_unstake";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<StakeUnstake />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
