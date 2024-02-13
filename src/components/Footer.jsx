import React from 'react';
import '../styles/footer.scss';
import Button from './Button';

export const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-title'> Data in the import file is correct.
        Please press Continue to import.</div>
        <div className='button-container'>
            <Button>Continue Import</Button>
            <Button style={ 
        {background: 'white',
         color:'rgb(233, 152, 2)', 
         width: '140px',
         height: '35px',
         borderStyle: 'solid',
         borderColor: 'rgb(233, 152, 2)',
         borderRadius: '10px',
         fontWeight: 'bold',
         fontSize: '10px'}}>Cancel</Button>
        </div>
    </div>
  )
}

export default Footer;