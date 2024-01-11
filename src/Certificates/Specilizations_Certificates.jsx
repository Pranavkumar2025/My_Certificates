import React from "react";
import Card_Sample from "./Card_Sample";
import { Specialization_data } from "./Adata";

const Specialization_Certificates = ()=>{
    return(
        <div id="Specialization">
            <h1 className="M_txt"> 🥇  🌴SPECILIZATIONs CERTIFICATES🌴  🥇</h1>
            <div className="certificates_container">
            {Specialization_data.map(function(val){
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

export default Specialization_Certificates;