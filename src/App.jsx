import React from "react";
import { BrowserRouter } from "react-router-dom";
import Certificates from "./Certificates";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <AnimatePresence mode="wait">
          <Certificates />
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
};

export default App;
