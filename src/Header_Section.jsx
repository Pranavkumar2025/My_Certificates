import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import "./Header_Section.css";

const Header_Section = ()=>{

    return(
        <BrowserRouter>
        <div className="header">
            <h2>  👨‍🎓 Pranav's Certificates 👨‍🎓</h2>
            <ul className="box">
                <li>
                    <Link to="#Specialization" smooth style={{ textDecoration: 'none' }}>Specilization Certificates</Link>
                </li>
                <li>
                    <Link to="#ML_Certificate" smooth style={{ textDecoration: 'none' }}>Machine Learning Certificates</Link>
                </li>
                <li>
                    <Link to="#Web_Devlopment" smooth style={{ textDecoration: 'none' }}>Web Devlopment Certificates</Link>
                </li>
                <li>
                    <Link to="#Other" smooth style={{ textDecoration: 'none' }}>Other Certificates</Link>
                </li>

            </ul>
        </div>
        </BrowserRouter>
    );
}

export default Header_Section;