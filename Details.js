import React from 'react'
import Types from './Card.js'
import  './App.css'
import img1 from './images/bear.png'
import img2 from './images/ball.png'
import img3 from './images/tutor.png'
import img4 from './images/milk.png'
import img5 from './images/Nurse.png'
import img6 from './images/manny.png'
import img7 from './images/arrow.png'


const cardData = [
    
    {emoji: img1,
    title: "Governerness",
    text: "A Governer is a male equivalent of a <br/> Governess, Carrying the same duties <br/> including working with childern <br/> between 6-16 helping them <br/> academically in other areas such as <br/> music, languages, arts, sports,<br/> etiquette and manners",
    img: img7
},

    {emoji: img2,
    title: "Governer",
    text: "A Governer is a male equivalent of a <br/> Governess, Carrying the same duties <br/> including working with childern <br/> between 6-16 helping them <br/> academically in other areas such as <br/> music, languages, arts, sports,<br/> etiquette and manners",
    img: img7
},
    {emoji: img3,
    title: "Tutor",
    text: "A Tutor gives your child personal <br/> academic tution on a variety or <br/> single subject to enhance their skills <br/> and confidence in the chosen area, <br/> including exam preparation and <br/> school/University",
    img: img7
},
    {emoji: img4,
    title: "Nanny",
    text: "A Nanny works with babies and <br/> childern upto 8 years old, they take <br/> care of all nursery activities, feeding <br/> and hygiene for childern",
    img: img7
},
    {emoji: img5,
    title: "Maternity Nurse",
    text: "A Maternity Nurse is qualified and <br/> experianced to work with mother <br/> and baby from birth upto 6 months,<br/> Supporting throughout all stages <br/> of the baby's inital developement",
    img: img7
},
    {emoji: img6,
    title: "Manny",
    text: "A Manny carries out same duties as nanny <br/> as a nanny works with same age group depending on whether you would prefer a male or female candidate it's an individual preference",
    img: img7
},

]

function Details() {
    return (
      <>
        <div className="details">
          <hr />
          <h1>Types of Child Care Specialist</h1>
          <hr />
        </div>
        <div className="detailContainer">
          {cardData.map((card, index) => (
            <Types
              key={index} // Add a unique key prop here
              title={card.title}
              emoji={card.emoji}
              text={card.text}
              img={card.img}
            />
          ))}
        </div>
      </>
    );
  }
  

export default Details