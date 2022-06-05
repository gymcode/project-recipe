import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import RouteComponents from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {RouteComponents.map((data) => (
          <Route path={data.path} element={data.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
