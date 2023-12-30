import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    const enteredUsername = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredUsername);
    if (isValidEmail || enteredUsername === '') {
      setUsername(enteredUsername);
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    const isValidPassword = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z0-9@]).{6,}$/.test(enteredPassword);
    if (isValidPassword || enteredPassword === '') {
      setPassword(enteredPassword);
    }
  };

  const handleSubmit = (e) => {

    // Check if username and password are valid
    const isValidUsername = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
    const isValidPassword = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z0-9@]).{6,}$/.test(password);

    if (username === "") {
      toast.error('Please Enter Username');
      return;
    }
    
    if (password === "") {
      toast.error('Please Enter Password');
      return;
    }


    if (isValidUsername && isValidPassword) {
      toast.success(`Username: ${username}`);
      toast.success(`Password: ${password}`);
    } else {
      toast.error('Invalid username or password.');
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <img src={"https://cdn.technologyadvice.com/wp-content/uploads/2020/09/sslogo.png"} height={50}/>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  className='input'
                  placeholder='Username'
                  onChange={handleUsernameChange}
                  required
                />
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  placeholder='Password'
                  className='input'
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className="inputBox">
                <button type="submit" className='submitbtn'  value="Login" onClick={handleSubmit}>Login</button>
              </div>

              <div className="links">
                <a>Forgot Password ?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default LoginForm;
