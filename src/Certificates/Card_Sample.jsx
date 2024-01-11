import React from "react";

function Card_Sample(parse) {
    return (
      <>
        <div className="container">
          <img
            src={parse.img_src}
            alt="none"
          />
          <h3 className="describ">{parse.abc_certificate}</h3>
          <h2 className="title">{parse.title_name}</h2>
          <a href={parse.mylink} target="blank"><button id="btn">View Certificate 🔗</button></a>
  
        </div>
      </>
    );
  }

export default Card_Sample;