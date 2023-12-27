import React from "react";

function Acard(parse) {
    return (
      <>
        <div className="container">
          <img
            src={parse.img_src}
            alt="none"
          />
          <h3 className="describ">{parse.abc_certificate}</h3>
          <h2 className="title">{parse.title_name}</h2>
          <a href={parse.mylink} target="blank"><button id="btn">Visit Link 🔗</button></a>
  
        </div>
      </>
    );
  }

export default Acard;