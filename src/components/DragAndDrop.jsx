import React, { useState } from 'react';
import '../styles/draganddrop.scss';
import Button from './Button';
import DescriptionIcon from '@mui/icons-material/Description';

export const DragAndDrop = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setSelectedFile(e.dataTransfer.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

  return (
    <div className='dndContainer'>
        <div className='dndTitle'>Select a manifest you'd like to import</div>
        <div className='innerContainer'>
            <div className='dropZone' onDrop={handleDrop} onDragOver={handleDragOver}>
                <DescriptionIcon className='icon'></DescriptionIcon>
                <p className='text'>Drag & Drop Here or&nbsp; </p>
                <label for="fileUpload" className='Browse'>
                    Browse
                </label>
                <input id="fileUpload" type='file' onChange={handleFileSelect} />
                {selectedFile && <p className='selection'>Selected File: {selectedFile.name}</p>}
            </div>
            <Button>Upload Manifest</Button>
        </div>
    </div>
  )
}

export default DragAndDrop;