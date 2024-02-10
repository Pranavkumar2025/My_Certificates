import React from "react";
import Card_Sample from "./Card_Sample";
import { Otherdata } from "./Adata";

const Other_Certificates = ()=>{
    return(
        <div id="Other">
            <h1 className="c_txt">🥇 OTHERs CERTIFICATES 🥇</h1>
        <div className="certificates_container">
            <h1 style={{color:"white"}}></h1>
        {Otherdata.map(function(val){
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

export default Other_Certificates;