import React from 'react'


export const Button = (props) => {
    const {children, style} = props
  return (
    <button style={style ? style : 
        {background: 'rgb(25, 60, 110)',
         color:'white', 
         width: '200px',
         height: '35px',
         border: 'none',
         borderRadius: '10px',
         fontWeight: 'bold',
         fontSize: '10px'}}>{children}</button>
  )
}
 export default Button