import React from 'react'
import pic1 from './images/b1.png'
import pic2 from './images/b2.png'
import pic3 from './images/b3.png'



const arrayOfDetails = [
    
    {
        backgroundImage:pic1,
        title: "Qualified Subject Teachers",
    },
       {
           backgroundImage: pic2,     
           title: "Qualified Language Teachers",
    }, 
    {backgroundImage: pic3,
    title: "Qualified Nanny governess"}
]

function Component() {
    return (
      <div className="container">
        {arrayOfDetails.map((card) => (
          <div key={Math.random()} className="image-container">
            <img
              className="image"
              src={card.backgroundImage }
            />
        
              <div className="title">{card.title}</div>
          </div>
        ))}
      </div>
    );
  }
  
    
export default Component