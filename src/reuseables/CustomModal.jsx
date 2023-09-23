import React, { useState } from 'react';

// CSS styles for the modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '20px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
};

function ReusableModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <span
          onClick={onClose}
          style={modalStyles.closeButton}
        >
          &#x2715;
        </span>
        {children}
      </div>
    </div>
  );
}

export default ReusableModal;
