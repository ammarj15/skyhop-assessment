import React from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import '../styles/tolerance.scss'

export const Tolerance = () => {
  return (
    <div className='toleranceContainer'>
        <div className='tolTitle'>Tolerance Window:</div>
        <div className='symContainer'>
        <ToggleOnIcon className='toggle'></ToggleOnIcon>
        <div className='toggleText'>Toggle ON</div>
        <AccessTimeOutlined className='clock'></AccessTimeOutlined>
        <div className='clockText'>Select Tolerance Level</div>
        </div>
    </div>
  )
}

export default Tolerance;