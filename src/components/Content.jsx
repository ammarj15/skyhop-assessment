import React from 'react';
import Checking from './Checking';
import Dropdown from './Dropdown';
import ClientChoice from './ClientChoice';
import SplitChoice from './SplitChoice';
import TestingCenter from './TestingCenter';
import Tolerance from './Tolerance';
import DragAndDrop from './DragAndDrop';

export const Content = () => {
  return (
    <div className='content'>
        {/* <Dropdown />
        <ClientChoice></ClientChoice>
        <hr></hr>
        <SplitChoice></SplitChoice>
        <Checking moreChildren="No Elapsed Dates!">
            Elapse Data Checking
        </Checking>
        <Checking moreChildren="All Available!">
            Location Checking:
        </Checking>
        <TestingCenter></TestingCenter>
        <Tolerance></Tolerance> */}
        {/* <DragAndDrop ></DragAndDrop> */}
    </div>
  )
}

export default Content;
