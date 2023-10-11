import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/userAction';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/LockOpen';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';


const LoginComponent = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  return (
    <form className="loginForm" onSubmit={handleLogin}>
      <div className="loginEmail">
        <MailOutlineIcon />
        <input
          type="email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </div>
      <div className="loginPassword">
        <LockOpenIcon />
        <input
          type="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <Link to="/password/forgot">Forget Password ?</Link>
      <input type="submit" value="Login" className="loginBtn" />
    </form>
  );
};

export default LoginComponent;
