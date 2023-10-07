import React, { Fragment, useRef } from 'react';
import './LoginSignUp.css'
import Loader from '../layout/loader/Loader';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/LockOpen';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const LoginSignUp = () => {

    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")

    const [ user, setUser ] = React.useState({
        name : "",
        email: "",
        password : ""
    })

    const { name, email, password } = user;

    const [ avatar, setAvatar ] = React.useState();
    const [ avatarPreview, setAvatarPreview ] = React.useState("/Profile.png")



    const switchTabs = (e, tab) => {
        if( tab === "login"){
            switcherTab.current.classList.add("shiftToNeutral")
            switcherTab.current.classList.remove("shiftToRight")

            registerTab.current.classList.remove("shiftToNeutralForm")
            loginTab.current.classList.remove("shiftToLeft")
        }
        if(tab === "register"){
            switcherTab.current.classList.add("shiftToRight")
            switcherTab.current.classList.remove("shiftToNeutral")

            registerTab.current.classList.remove("shiftToNeutralForm")
            loginTab.current.classList.remove("shiftToLeft")
        }
    }

    const loginSubmit = () => {
        console.log("Login form submitted")
    }

    function registerSubmit(e){
        e.preventDefault()

        const myForm = new FormData()
        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("password", password)
        myForm.set("avatar", avatar)
        console.log("Sign Up form submitted")
    }

    function registerDataChange(e){
        if(e.target.name === "avatar"){
            const reader = new FileReader()

            reader.onload = () => {
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }else{
            setUser({ ...user, [e.target.name]: e.target.value})
        }
    }


  return (
    <Fragment>
        <div className='LoginSignUpContainer'>
            <div className='LoginSignUpBox'>
                <div>
                    <div className='login_signUp_toggle'>
                        <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                        <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>

                <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>

                    <div className='loginEmail'>
                        <MailOutlineIcon />
                        <input 
                            type='email'
                            placeholder='Email'
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </div>

                    <div className='loginPassword'>
                        <LockOpenIcon />
                        <input
                            type='password'
                            placeholder='Password'
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            />
                    </div>
                    <Link to="/password/forget">Forgot Password ?</Link>
                    <input type='submit' value="Login" className='loginBtn' />
                </form>

                <form 
                    className='signUpForm'
                    ref={registerTab}
                    encType='multipart/form-data'  // we use this because we are addiing image aswelll.
                    onSubmit={registerSubmit}
                >

                <div className='signUpName'>
                    <FaceIcon />
                    <input 
                        type='text'
                        placeholder='Name'
                        required
                        name='name'
                        value={name}
                        onChange={registerDataChange}
                    />
                </div>

                <div className='signUpEmail'>
                    <MailOutlineIcon />
                    <input 
                        type='text'
                        placeholder='Name'
                        required
                        name='name'
                        value={email}
                        onChange={registerDataChange}
                    />
                </div>
                <div className='signUpPassword'>
                    <LockOpenIcon />
                    <input 
                        type='password'
                        placeholder='Password'
                        required
                        name='password'
                        value={password}
                        onChange={registerDataChange}
                    />
                </div>
                <div className='registerImage'>
                    <img src={avatarPreview} alt='Avatar Preview' />
                    <input 
                        type='file'
                        name='avatar'
                        accept='image/*'
                        value={password}
                        onChange={registerDataChange}
                    />
                </div>
                <input type='submit' value="Register" className='signUpBtn' />
                </form>



            </div>
        </div>

    </Fragment>
  )
}

export default LoginSignUp