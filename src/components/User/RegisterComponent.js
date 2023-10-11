import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/LockOpen';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const RegisterComponent = ({
  name,
  email,
  password,
  avatarPreview,
  registerSubmit,
  registerDataChange,
}) => {
  const dispatch = useDispatch();

  return (
    <form
      className="signUpForm"
      encType="multipart/form-data"
      onSubmit={registerSubmit}
    >
      <div className="signUpName">
        <FaceIcon />
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          value={name}
          onChange={registerDataChange}
        />
      </div>
      <div className="signUpEmail">
        <MailOutlineIcon />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={registerDataChange}
        />
      </div>
      <div className="signUpPassword">
        <LockOpenIcon />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          value={password}
          onChange={registerDataChange}
        />
      </div>

      <div id="registerImage">
        <img src={avatarPreview} alt="Avatar Preview" />
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={registerDataChange}
        />
      </div>
      <input type="submit" value="Register" className="signUpBtn" />
    </form>
  );
};

export default RegisterComponent;
