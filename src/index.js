import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Certificates from "./Certificates/certificates";
import { StrictMode } from "react";

ReactDom.render(
  <StrictMode>
    <div className="Main_Container">
        <Certificates/>
    </div>
  
  </StrictMode>
  ,
  document.getElementById("root")
);
