import React from 'react';
import './Modal.css';

function Modal() {
  return (
    <div className="outerContainer">
      <div className="mainHeading">
        title
      </div>
      <div className="body">
        <div className="messagesContainer">
          <div className="messagesWrapper">
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message X
            </div>
            <div className="message">
              Message Last
            </div>
          </div>
        </div>
        <div className="inputArea">
          <textarea lines="2">Tekst</textarea>
        </div>
      </div>
    </div>
  );
}

export default Modal;
