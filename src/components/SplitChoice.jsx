import React from 'react';
import '../styles/choice.scss';

export const SplitChoice = () => {
  return (
    <div className='choice'>
        <div className='question'>Split schedule using social distancing?</div>
        <label className='choice1'>
          <input type="radio" name="myRadio" value="option1" />
          Yes
        </label>
        <label className='choice2'>
          <input
            type="radio"
            name="myRadio"
            value="option2" 
          />
         No
        </label>
        </div>
  )
}

export default SplitChoice;
