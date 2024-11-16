// src/components/SignUpModal.js
import React, { useState } from 'react';
import './SignUpModal.css';

function SignUpModal({ onClose, onSignUpSuccess }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // 여기에 회원가입 API 호출 로직을 추가합니다.
    // 현재는 성공적인 회원가입을 시뮬레이션합니다.
    if (email && username && password) {
      onSignUpSuccess(); // 회원가입 성공 시 호출
    } else {
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>회원가입</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-container">
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="사용자명"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">회원가입</button>
        </form>
        <button className="close-button" onClick={onClose}>취소</button>
      </div>
    </div>
  );
}

export default SignUpModal;
