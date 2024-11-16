import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import LoginModal from './LoginModal';
import MyPage from './MyPage'; // MyPage 컴포넌트 임포트

function AppContent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMyPageOpen, setIsMyPageOpen] = useState(false); // MyPage 모달 상태
  const location = useLocation(); // useLocation 훅을 AppContent에서 사용

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  const openMyPageModal = () => {
    setIsMyPageOpen(true);
  };

  const closeMyPageModal = () => {
    setIsMyPageOpen(false);
  };

  return (
    <div className="App">
      {/* Header는 항상 표시 */}
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={openLoginModal}
        onMyPageClick={openMyPageModal} // Header에 클릭 핸들러 전달
      />

      {/* hero-section은 로그인되지 않았거나 현재 경로가 '/dashboard'가 아닌 경우에만 렌더링 */}
      {!isLoggedIn || location.pathname !== '/dashboard' ? (
        <div className="hero-section">
          <div className="hero-content">
            <h1>자연과 함께하는 새 출발,<br /> 귀농·귀촌을 환영합니다!</h1>
            <p>We are GreenBridge</p>
          </div>
        </div>
      ) : null}

      {isLoginOpen && <LoginModal onClose={closeLoginModal} onLoginSuccess={handleLoginSuccess} />}
      {isMyPageOpen && <MyPage onClose={closeMyPageModal} />} {/* MyPage 모달 표시 */}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <div></div>} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />}
        />
        <Route path="/mypage" element={<MyPage onClose={closeMyPageModal} />} /> {/* MyPage 라우트 추가 */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* Router 안에 AppContent를 넣어줌으로써 useLocation을 사용할 수 있게 함 */}
    </Router>
  );
}

export default App;
