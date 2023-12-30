import React, { useState } from 'react';
import './style.css';
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
          <img src={"https://github.com/kousikgvs/SmartServ/blob/main/task3/src/Images/smartservlogo.png"} height={50}/>
          <form onSubmit={handleSubmit}>
            
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  value={username}
                  placeholder='Username'
                  onChange={handleUsernameChange}
                  required
                />
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  placeholder='Password'
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className="inputBox">
                <button type="submit" value="Login">Login</button>
              </div>

              <div className="links">
                <a>Forgot Password ?</a>
              </div>

            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
