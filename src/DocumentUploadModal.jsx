import React from 'react';
import './styles/modal.scss';
import './components/Header';
import Header from './components/Header';
import Content from './components/Content';

export const DocumentUploadModal = () => {
  return (
    <div className='modal'>
        <Header />
        <Content />
        {/* <Footer /> */}
    </div>
  )
}

export default DocumentUploadModal;