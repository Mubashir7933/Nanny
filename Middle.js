import React from 'react'
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'

const Imgcont = {
backgroundImage: `url(${pic1}) `
}
const Imgcont2 = {
backgroundImage: `url(${pic2}) `
}


function Middle() {
  return (
    <div className='container'>
<div className='img1' style={Imgcont}><img src={pic1} alt="one"/></div>
<div className='img2' style={Imgcont2}><img src={pic2} alt="one"/></div>
    </div>
  )
}

export default Middle