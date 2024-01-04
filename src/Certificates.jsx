import React from "react";
import Specialization_Certificates from "./Certificates/Specilizations_Certificates";
import ML_Certificates from "./Certificates/ML_Certificates";
import Web_Development_Certificates from "./Certificates/Web_Development_Certificates";
import Other_Certificates from "./Certificates/Other_Certificates";
const Certificates = ()=>{
    return(
        <>
        <h1 className="txt"> 📑 LIST OF MY ALL CERTIFICATEs 📑</h1>
        <Specialization_Certificates/>
        <ML_Certificates/>
        <Web_Development_Certificates/>
        <Other_Certificates/>
        </>
    );
}
export default Certificates;