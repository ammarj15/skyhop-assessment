import React from 'react';
import './styles/modal.scss';
import './components/Header';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/modal.scss';

export const DocumentUploadModal = () => {
  return (
    <div className='modal'>
        <Header />
        <div className="modalContent">
          <Content />
        </div>
        <Footer />
    </div>
  )
}

export default DocumentUploadModal;