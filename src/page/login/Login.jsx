import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import './login.scss';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        
            <div>

<header >
    <a href="/home"><img class="logo" src="/storage/icons/logo.png" alt="MAP"></img></a>
    <a class="btn btn-normal btn-primary" href="login">Войти</a>
</header>

<div class=" container row justify-content-center">

    <div class="col-lg-7">

        <div class="card shadow-lg">
            <div class="card-body">
                
                <div class="row">
                    <div class="col-lg">
                        <div class="column">
                            <div class="text-center">
                                <h2>Авторизация</h2>
                            </div>


                            <form class="user column">                                              
                            <div class="form-group">
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    class="form-field form-control"                                    
                                    required                                                                                
                                    placeholder="Эл.почта"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"  
                                    class="form-field form-control"                                   
                                    required                                                                                
                                    placeholder="Пароль"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}
                                    class=" btn-normal btn-primary"                                        
                                >      
                                    Войти                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-center">
                            Нет, аккаунта?  {' '}
                            <NavLink to="/signup" class="link">
                            Зарегистрируйтесь, сейчас!
                            </NavLink>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
</div>
        
    )
}
 
export default Login