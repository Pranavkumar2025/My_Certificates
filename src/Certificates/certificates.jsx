import React from "react";
import Acard from "./Acard";
import Mldata, { BackWebdata, FrontWebdata, Specialization_data } from "./Adata";
import { Otherdata } from "./Adata";
const Certificates = ()=>{
    return(
        <>
        <h1 className="txt"> 📑 LIST OF MY ALL CERTIFICATEs 📑</h1>
        <div >
            <h1 className="M_txt"> 🥇  🌴SPECILIZATIONs CERTIFICATES🌴  🥇</h1>
            <div className="certificates_container">
            {Specialization_data.map(function(val){
                return(
                    <Acard
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
        <div >
            <h1 className="c_txt"> 🥇 MACHINE LEARNING CERTIFICATES 🥇</h1>
            <div className="certificates_container">
            {Mldata.map(function(val){
                return(
                    <Acard
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
        <div>
            <h1 className="c_txt"> 🥇 WEB DEVELOPMENTs CERTIFICATES 🥇</h1>
            <div className="web_certificates_container">
                <h2 className="N_txt">🌴 META Front-end Professional Certification Coursera 🌴</h2>
                <div className="new_cont">
                {FrontWebdata.map(function(val){
                return(
                    <Acard
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
                    <Acard
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
        <h1 className="c_txt"> 🥇 OTHERs CERTIFICATES 🥇</h1>
        <div className="certificates_container">
        {Otherdata.map(function(val){
            return(
                <Acard
                key = {val.id}
                abc_certificate = {val.abc_certificate}
                img_src={val.img_src}
                title_name={val.title_name}
                mylink ={val.mylink}
              />
              );
        })}
        </div>
        </>
    );
}
export default Certificates;