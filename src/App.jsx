import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Company from "./pages/Company";
// import Product from "./pages/Product";
// import OurLeaders from "./pages/OurLeaders";
// import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/company" element={<Home />} />
        <Route path="/product" element={<Home />} />
        <Route path="/our-leaders" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />


        {/* <Route path="/company" element={<Company />} />
        <Route path="/product" element={<Product />} />
        <Route path="/our-leaders" element={<OurLeaders />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
