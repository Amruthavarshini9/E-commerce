import React, { useState } from 'react';
import "../../App.css"
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // toggle between sign in and sign up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isSignIn && !confirmPassword)) {
      alert('Please fill all fields');
      return;
    }
    if (!isSignIn && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(isSignIn ? 'Signed In Successfully!' : 'Account Created Successfully!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="auth-container">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <p>
        {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span onClick={() => setIsSignIn(!isSignIn)} style={{ cursor: 'pointer', color: 'blue' }}>
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </div>
  );
};

export default AuthPage;
