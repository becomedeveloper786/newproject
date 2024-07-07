import React, { useState, useEffect } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const strengthValue = checkPasswordStrength(password);
    updatePasswordStrength(strengthValue);
  }, [password]);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[\W]/)) strength++;
    return strength;
  };

  const updatePasswordStrength = (strength) => {
    setStrength(strength);
    if (password.length === 0) {
      setMessage('Password is required');
    } else if (password.length < 8) {
      setMessage('Password is too short');
    } else if (strength < 3) {
      setMessage('Password is weak');
    } else if (strength <= 4) {
      setMessage('Password is moderate');
    } else {
      setMessage('Password is strong');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (strength >= 4) {
      showNotification('Registration Successful!', 'success');
      resetForm();
      setTimeout(() => {
        navigate('/HomePage');
      }, 1000);
    } else {
      showNotification('Password must be at least 8 characters long and meet the strength requirements.', 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const resetForm = () => {
    setPassword('');
    setStrength(0);
    setMessage('');
  };

  return (
    <div className="webcontainer">
      <div className="registration-form">
        <div className="progress-bar" style={{ width: `${(strength / 5) * 100}%` }} />
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="logo1">
            <img src="../../../logo.png" alt="Logo" />
          </div>
          <h1>Registration Form</h1>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div id="password-strength" style={{ background: strength < 3 ? 'red' : strength <= 4 ? 'yellow' : 'green' }} />
          <div id="message" style={{ 
            color: password.length === 0 ? 'black' : 
                   password.length < 8 ? '#ffa500' : 
                   strength < 3 ? '#ff4500' : 
                   strength <= 4 ? '#ffd700' : '#4caf50' 
          }}>
            {message}
          </div>
          <button type="submit">Register</button>
        </form>
        {notification && (
          <div id="notification" className={notificationType === 'success' ? 'notification-success' : 'notification-error'}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
