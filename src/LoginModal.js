import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 샘플 아이디와 비밀번호를 지정합니다.
  const SAMPLE_USERNAME = '1234';
  const SAMPLE_PASSWORD = '1234';

  const handleLogin = (event) => {
    event.preventDefault();

    // 입력된 아이디와 비밀번호가 샘플과 일치하는지 확인합니다.
    if (username === SAMPLE_USERNAME && password === SAMPLE_PASSWORD) {
      onLoginSuccess(); // 로그인 성공 시 호출
    } else {
      alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="아이디"
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
          <button type="submit" className="login-button">로그인</button>
        </form>
        <button className="close-button" onClick={onClose}>취소</button>
      </div>
    </div>
  );
}

export default LoginModal;



// 로그인 하드코딩 없음
// import React, { useState } from 'react';
// import './LoginModal.css';

// function LoginModal({ onClose, onLoginSuccess }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();

//     // Here, you would typically call your authentication API.
//     // For now, we'll simulate a successful login.
//     if (username === 'correctUsername' && password === 'correctPassword') {
//       onLoginSuccess(); // call this if login is successful
//     } else {
//       alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>로그인</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-container">
//             <i className="fas fa-user icon"></i>
//             <input
//               type="text"
//               placeholder="아이디"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <i className="fas fa-lock icon"></i>
//             <input
//               type="password"
//               placeholder="비밀번호"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">로그인</button>
//         </form>
//         <button className="close-button" onClick={onClose}>취소</button>
//       </div>
//     </div>
//   );
// }

// export default LoginModal;
