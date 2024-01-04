import React from "react";
import Card_Sample from "./Card_Sample";
import { BackWebdata, FrontWebdata } from "./Adata";


const Web_Development_Certificates = ()=>{
    return(
        <div>
            <h1 className="c_txt"> 🥇 WEB DEVELOPMENTs CERTIFICATES 🥇</h1>
            <div className="web_certificates_container">
                <h2 className="N_txt">🌴 META Front-end Professional Certification Coursera 🌴</h2>
                <div className="new_cont">
                {FrontWebdata.map(function(val){
                return(
                    <Card_Sample
                    key = {val.id}
                    abc_certificate = {val.abc_certificate}
                    img_src={val.img_src}
                    title_name={val.title_name}
                    mylink ={val.mylink}
                  />
                  );
                })}
                </div>
                <h2 className="N_txt">🌴 META Back-end Professional Certification Coursera 🌴</h2>
                <div className="new_cont">
                {BackWebdata.map(function(val){
                return(
                    <Card_Sample
                    key = {val.id}
                    abc_certificate = {val.abc_certificate}
                    img_src={val.img_src}
                    title_name={val.title_name}
                    mylink ={val.mylink}
                  />
                  );
                })}
                </div>
            </div>
        </div>
    );
}

export default Web_Development_Certificates;