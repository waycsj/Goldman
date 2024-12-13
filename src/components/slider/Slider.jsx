import { Slide } from "@mui/material"
import { use } from "react";
import { useState } from "react";
import { slide } from "../../dummyData";
import { ArrowLeftOutlined } from "@mui/icons-material";



const Slider = () => {
  
  const[slideIndex, setSlideIndex] = useState(0);
  
  const handleClick = (direction) => {
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slide.length - 1);
    }else{
      setSlideIndex(slideIndex < slide.length -1 ? slideIndex + 1 : 0);
    }
  };

//내가 작성
return (
  <div className="slider">
    <ArrowLeftOutlined className="arrowLeft" onClick={() => handleClick("left")} />
  <div 
   className="sliderWrapper" 
   style={{ transform: 'translateX(-${slideIndex * 100}vw)' }}
  >
      {slide.map(data =>(
        <div className="slide" key={data.id}>
          <div className="slideImgContainer">
            <img
              src={data.img}
              alt=""
              className="slideImg" 
            />
          </div>
          <div className="infoContainer">
            <div className="slideTitle">{data.title}</div>
            <div className="slideDesc">{data.desc}</div>
            <button className=" slideBtn">Customizaion</button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

//chat gpt가 작성
// return (
//   <div className="slider">
//     <ArrowLeftOutlined className="arrowLeft" onClick={() => handleClick("left")} />
//     <div
//       className="sliderWrapper"
//       style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
//     >
//       {slide.map((data, index) => (
//         <div className="slide" key={index}>
//           <div className="slideImgContainer">
//             <img src={data.img} alt="" className="slideImg" />
//           </div>
//           <div className="infoContainer">
//             <div className="slideTitle">{data.title}</div>
//             <div className="slideDesc">{data.desc}</div>
//             <button className="slideBtn">Customization</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
}

export default Slider;
