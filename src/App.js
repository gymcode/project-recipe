import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import AOS from "aos";

import RouteComponents from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {RouteComponents.map((data) => (
          <Route path={data.path} element={data.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
