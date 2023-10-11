import React, { Fragment, useState } from 'react'
import './Header.css'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from '../../../images/Profile.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/userAction';


const UserOption = ({user}) => {

  const [ open, setOpen ] = React.useState(false)
  const options = [
    { icon: <FormatListBulletedIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Exit", func: logoutUser }
  ];

  const dispatch = useDispatch()

  if(user.role === "admin"){
    options.unshift(  { icon: <DashboardIcon />, name: "Dashboard", func: dashboard })
  }

  const nav = useNavigate()

  function dashboard(){
    nav('/dashboard')
  }
  function orders(){
    nav('/orders')
  }
  function account(){
    nav('/account')
  }
  function logoutUser(){
    dispatch(logout());
    alert("Logged Out")
  }


  return (
    <Fragment>

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<MenuIcon />}
        // icon={<SpeedDialIcon />}
        // icon={<img className='speedDialIcon' src={user.avatar.url ? user.avatar.url : <Profile />} alt='profile' />}
        // icon={<img className='speedDialIcon' src={Profile} alt='profile' />}
      > 
    
      {
        options.map(function(item){
          return(
            <SpeedDialAction icon={item.icon} tooltipTitle={item.name} onClick={item.func} />
          )
        })
      }
      </SpeedDial>

    </Fragment>
  )
}

export default UserOption