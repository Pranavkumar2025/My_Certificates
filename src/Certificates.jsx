import React from "react";
import Specialization_Certificates from "./Certificates/Specilizations_Certificates";
import ML_Certificates from "./Certificates/ML_Certificates";
import Web_Development_Certificates from "./Certificates/Web_Development_Certificates";
import Other_Certificates from "./Certificates/Other_Certificates";
import Header_Section from "./Header_Section";
const Certificates = ()=>{
    return(
        <>
        <Header_Section/>
        <h1 className="txt"> 📑 LIST OF MY ALL CERTIFICATEs 📑</h1>
        <Specialization_Certificates/>
        <ML_Certificates/>
        <Web_Development_Certificates/>
        <Other_Certificates/> 


        </>
    );
}
export default Certificates;