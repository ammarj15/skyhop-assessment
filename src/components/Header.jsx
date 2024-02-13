import React from 'react';
import '../styles/header.scss'



export const Header = () => {
  return (
    <div className='head-section'>
        <div className='btn-container'>
            <div className='close-btn'>&times;</div>
        </div>
        <div className='heading'>Document Upload</div>
    </div>
  )
}

export default Header;
