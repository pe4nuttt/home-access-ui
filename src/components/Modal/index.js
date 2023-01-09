import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement(document.getElementById('app'));

function Modal({ children, isOpen, styles = customStyles, ...passprops }) {
    return <ReactModal>{children}</ReactModal>;
}

export default Modal;
