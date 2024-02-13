import React from 'react';
import '../styles/checking.scss'

export const Checking = (props) => {
    const {children, moreChildren, style} = props;
  return (
    <div className='checking'>
        <div className='typeCheck'  style={style ? style : 
        {fontWeight: 'bold',
         fontSize: '10px',
         padding: '2px'}}>{children}</div>
        <div className='checkResult'  style={style ? style : 
        {color:'green', 
         fontWeight: 'bold',
         fontSize: '10px',
         padding: '2px'}}>{moreChildren}</div>
    </div>
  )
}

export default Checking;