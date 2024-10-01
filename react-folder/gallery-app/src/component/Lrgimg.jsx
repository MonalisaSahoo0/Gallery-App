import React from "react";


const LargeImage = ({ src, title, details, closeButton }) => {
    return (
      <div>
        <button onClick={closeButton}>Close</button>
        <h2>{title}</h2>
        <img src={src} alt={title} />
        <p>{details}</p>
      </div>
    );
  };
  
  export default LargeImage;



  
  