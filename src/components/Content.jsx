import React from 'react';
import Checking from './Checking';
import Dropdown from './Dropdown';
import ClientChoice from './ClientChoice';
import SplitChoice from './SplitChoice';
import TestingCenter from './TestingCenter';
import Tolerance from './Tolerance';
import DragAndDrop from './DragAndDrop';
import '../styles/content.scss';

export const Content = () => {
  return (
    <div className='content'>
      <div className='leftColumn'>
        <Dropdown />
        <hr className='leftHr'></hr>
        <DragAndDrop ></DragAndDrop>
        <hr className='leftHr'></hr>
        <Checking moreChildren="No Elapsed Dates!">
            Elapse Data Checking
        </Checking>
        <hr className='leftHr'></hr>
        <Tolerance></Tolerance>
      </div>
      <div className='rightColumn'>
        <SplitChoice></SplitChoice>
        <hr className='rightHr'></hr>
        <Checking moreChildren="All Available!">
            Location Checking:
        </Checking>
        <hr className='rightHr'></hr>
        <ClientChoice></ClientChoice>
        <TestingCenter></TestingCenter>
      </div>
    </div>
  )
}

export default Content;
