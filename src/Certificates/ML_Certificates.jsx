import React from "react";
import Card_Sample from "./Card_Sample";
import Mldata from "./Adata";

const ML_Certificates = ()=>{
    return(
        <div >
            <h1 className="c_txt"> 🥇 MACHINE LEARNING CERTIFICATES 🥇</h1>
            <div className="certificates_container">
            {Mldata.map(function(val){
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
    );
}

export default ML_Certificates;