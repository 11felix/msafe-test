import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
// import Footer from "./footer/Footer";
import Admin from "./modules/admin";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Admin />} />
        </Routes>
        {/*<Footer />*/}
      </Router>
    </>
  );
};

export default App;
