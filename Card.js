import React from 'react'

function Types({title,emoji,text,img}) {
  return (

        <div className='card'>
         <div className='imgContainer'>
          <img className="images" src={emoji}/>
          </div> 

          <div className='titleSectionThree'>
            <h6>{title}</h6>
          </div>

          <div className='textSectionThree'>
            <p className='titleText'>{text}</p>
          </div>
          
          <img className="arrowEmoji" src={img}/>
            
        </div>



  
        
    
  )
}

export default Types