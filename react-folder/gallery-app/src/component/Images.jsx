import React, {useState} from "react";
import Img from "./Img";
import LargeImage from "./Lrgimg";
import "./images.css";

const Images = () => {
    // State for image list
    const [imgLst] = useState([
      {
        imgSrc: './img/1.jpg',
        title: 'Image One',
        details:
          'Image One. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/2.jpg',
        title: 'Image Two',
        details:
          'Image Two. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/3.jpg',
        title: 'Image Three',
        details:
          'Image Three. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/4.jpg',
        title: 'Image Four',
        details:
          'Image Four. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/5.jpg',
        title: 'Image Five',
        details:
          'Image Five. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/6.jpg',
        title: 'Image six',
        details:
          'Image six. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/7.jpg',
        title: 'Image seven',
        details:
          'Image seven. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      {
        imgSrc: './img/8.jpg',
        title: 'Image eight',
        details:
          'Image eight. This is image details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae.',
      },
      
      
    ]);
  
    // State to control which image is displayed in large view
    const [selectedImg, setSelectedImg] = useState(null);
  
    // Function to handle image click and show large view
    const handleClick = (Image) => {
      setSelectedImg(Image);
    };
  
    // Function to close the large image view
    const closeLargeImage = () => {
      setSelectedImg(null);
    };
  
    return (
      <React.Fragment>
        {selectedImg ? (
          // Display large image when one is selected
          <div className="lg-img-con">
            <LargeImage
              closeButton={closeLargeImage}
              title={selectedImg.title}
              details={selectedImg.details}
              src={selectedImg.imgSrc}
            />
          </div>
        ) : (
          // Display image list when no large image is selected
          <div className="wrapper">
            {imgLst.map((Image) => (
              <button 
                key={Image.imgSrc}
                onClick={() => handleClick(Image)}
                style={{ background: 'none', border: 'none' }}
              >
                <Img src={Image.imgSrc} alt ={Image.title}/>
              </button>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  };
  
  export default Images;