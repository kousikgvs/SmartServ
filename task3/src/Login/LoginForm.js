import React, { useState } from 'react';
import './style.css';
import Picture1 from "./Images/Picture1.png"
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <img src={Picture1} />
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
