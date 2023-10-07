import React, { Fragment } from 'react';
import './LoginSignUp.css'
import Loader from '../layout/loader/Loader';

const LoginSignUp = () => {
  return (
    <Fragment>
        <div className='LoginSignUpConatainer'>
            <div className='LoginSignUpBox'>
                <div>
                    <div className='login-signUp_toggle'>
                        <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                        <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>

                <form className='loginForm' ref={logintab} onSubmit={loginSubmit}>
                    <MailOutlineIcon />
                    <input 
                        type='email'
                        placeholder='Email'
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <div>

                    </div>

                </form>

            </div>
        </div>

    </Fragment>
  )
}

export default LoginSignUp