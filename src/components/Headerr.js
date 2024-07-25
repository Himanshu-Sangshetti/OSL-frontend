import React from 'react'
import logo  from "../components/assets/Logo/pict_logo.png"

const Headerr = () => {
  return (
    <>
    <div className='Main-bar'>
        <div className='College-logo'>
            <img className='COLLEGE_LOGO ' src={logo} alt='COLLEGE-LOGO'></img>
        </div>
        <div className='Website-title'>
          <div className='Title'>Society for Computer Technology and Research's</div>
          <div className='PICT_NAME'>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</div>
          <div className='Title'>Department of Information Technology</div>
        </div>
      
    </div>
    
    
    </>
  )
}

export default Headerr