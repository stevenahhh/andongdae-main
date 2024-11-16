// src/components/NewModal.js
import React from 'react';
import './NewModal.css'; // CSS 파일을 임포트

const NewModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>새로운 모달</h2>
        <p>여기에 새로운 모달의 내용을 추가하세요.</p>
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default NewModal;
