import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import DetailedRecipe from "./DetailedRecipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {

  const location = useLocation();
  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/reto-frontend-job-barcelona/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<DetailedRecipe/>}/>
      </Routes>
      </AnimatePresence>
  );
};

export default Pages;
