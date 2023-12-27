import React from "react";
import Acard from "./Acard";
import Mldata from "./Adata";
import { Webdata,Otherdata } from "./Adata";
const Certificates = ()=>{
    return(
        <>
        <h1 className="txt"> 📑 LIST OF MY ALL CERTIFICATEs 📑</h1>
        <div >
            <h2 className="c_txt"> 🥇 MACHINE LEARNING CERTIFICATES 🥇</h2>
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
            <h2 className="c_txt"> 🥇 WEB DEVELOPMENTs CERTIFICATES 🥇</h2>
            <div className="certificates_container">
            {Webdata.map(function(val){
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
        <h2 className="c_txt"> 🥇 OTHERs CERTIFICATES 🥇</h2>
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