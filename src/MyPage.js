import React, { useState } from 'react';
import './MyPage.css'; // CSS 파일을 임포트

const MyPage = ({ onClose }) => {
  // 비밀번호 상태 관리
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    // 비밀번호 변경 로직 (예: 서버 요청)
    if (newPassword === confirmPassword) {
      console.log('비밀번호 변경 요청:', { currentPassword, newPassword });
      // 비밀번호 변경 요청을 서버에 전송하거나 필요한 처리를 수행합니다.
    } else {
      console.log('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>마이페이지</h2>
        <form onSubmit={(e) => { e.preventDefault(); handlePasswordChange(); }}>
          <div className="input-container">
            <i className="fas fa-key icon"></i>
            <input
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">비밀번호 변경</button>
        </form>
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default MyPage;
