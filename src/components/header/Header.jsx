import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Header.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';

const Header = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUserLoggedIn(true); // Устанавливаем состояние как true, если пользователь авторизован
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              setUserLoggedIn(false); // Устанавливаем состояние как false, если пользователь не авторизован
              console.log("user is logged out")
            }
          });
         
    }, [])
    
  return (
        <header >
            <a href="/"><img class="logo" src={logo} alt="MAP"></img></a>
            {!userLoggedIn && <a className="btn btn-primary" href="/login">Войти</a>}
        </header>
  )
}
 
export default Header