// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import SignUpModal from './SignUpModal'; // 회원가입 모달 컴포넌트 경로를 맞춰주세요

function Header({ isLoggedIn, onLoginClick, onMyPageClick }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <>
      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} onSignUpSuccess={() => console.log('회원가입 성공')} />}
      <header className="header">
        <div className="logo"><a href='/'>GreenBridge</a></div>
        <nav>
          <ul className="nav-links">
            {isLoggedIn ? (
              <li>
                <a href="#!" onClick={onMyPageClick} className="nav-link">마이페이지</a>
              </li>
            ) : (
              <>
                <li><a href="#!" onClick={onLoginClick} className="nav-link">로그인</a></li>
                <li><a href="#!" onClick={openSignUpModal} className="nav-link">회원가입</a></li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
