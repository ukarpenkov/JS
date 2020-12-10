import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) => {
  return <header className={s.header}>
    <img src="https://w0.pngwave.com/png/454/401/logo-instagram-png-clip-art.png" alt='logo' width='50px' />

    <div className={s.loginBlock}>

      {props.isAuth
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
        : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>;

}

export default Header;