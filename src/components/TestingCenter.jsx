import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import '../styles/testing.scss'

export const TestingCenter = () => {
  return (
    <div className='mainContainer'>
        <div className='testing1'>
            <div className='title'>Testing Center 1</div>
            <div className='testingDropDown'>
                <div className='select'>Select Client</div>
                <div className='arrow'>&#9660;</div> 
            </div>
            <AccessTimeOutlinedIcon className='symbol'></AccessTimeOutlinedIcon>
        </div>
        <div className='testing2'>
        <div className='title'>Testing Center 2</div>
        <div className='testingDropDown'>
                <div className='select'>Select Client</div>
                <div className='arrow'>&#9660;</div> 
            </div>
            <AccessTimeOutlinedIcon className='symbol'></AccessTimeOutlinedIcon>
        </div>
        <div className='testing3'>
        <div className='title'>Testing Center 3</div>
        <div className='testingDropDown'>
                <div className='select'>Select Client</div>
                <div className='arrow'>&#9660;</div> 
            </div>
            <AccessTimeOutlinedIcon className='symbol'></AccessTimeOutlinedIcon>
        </div>
        <div className='testing4'>
        <div className='title'>Testing Center 4</div>
        <div className='testingDropDown'>
                <div className='select'>Select Client</div>
                <div className='arrow'>&#9660;</div> 
            </div>
            <AccessTimeOutlinedIcon className='symbol'></AccessTimeOutlinedIcon>
        </div>
    </div>
  )
}

export default TestingCenter;
