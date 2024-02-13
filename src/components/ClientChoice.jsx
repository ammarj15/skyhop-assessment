import React from 'react';
import '../styles/choice.scss';

export const ClientChoice = () => {
  return (
    <div className='choice'>
        <div className='question'>Client:</div>
        <label className='choice1'>
          <input type="radio" name="myRadio" value="option1" />
          Single
        </label>
        <label className='choice2'>
          <input
            type="radio"
            name="myRadio"
            value="option2" 
          />
          Multiple
        </label>
        </div>
  )
}

export default ClientChoice;
