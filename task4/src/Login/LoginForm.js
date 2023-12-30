import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValidUsername = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
    const isValidPassword = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z0-9@]).{6,}$/.test(password);

    if (isValidUsername && isValidPassword) {

      if (password === "SmartServTest@123") {
      toast.success(`Username: ${username}`);
      toast.success(`Password: ${password}`);
      toast.success("Successfully Logged IN");
      navigate("/dashboard")
      }
      else {
        toast.error('Incorrect password.');
      }

    } else {
      if (!isValidUsername) {
        toast.error('Invalid email.');
        return;
      }
      if (!isValidPassword) {
        toast.error('Invalid password.');
        return;
      }
    }
  };
  
    const handleForget = () => {
        const email = 'support@smartserv.io';
        const subject = 'Password Reset Request';
        const body = 'Hello, I have forgotten my password and would like to reset it. Thank you.';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='input'
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className='togglePassword'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="inputBox">
                <button type="submit" className='submitbtn' value="Login">Login</button>
              </div>

              <div className="links">
                <a onClick={handleForget}>Forgot Password ?</a>
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
