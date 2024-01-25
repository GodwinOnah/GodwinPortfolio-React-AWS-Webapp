import React from 'react';
import {Slide} from 'react-slideshow-image';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }


  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }



//   const Slideshow = () => { . //Slide effect
//     return (
//       <div className="slide-container">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//                 <span style={spanStyle}>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//     )
// }

export const Slideshow = () => { // Fade effect
    return (
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    )
  }