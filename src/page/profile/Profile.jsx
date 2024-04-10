import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.scss'; // Импортируем файл стилей как модуль

import profilePhoto from "../../img/profilePhoto.png";

const Profile = () => {
    return (
        <div className="container card">
            <section className="">
                   <div className="column profile">
                         <img src={profilePhoto}></img>
                         <h3>Привет, Пользователь!</h3>
                      <a className='btn'>Редактировать профиль</a>
                      <h2>Твои курсы:</h2>
                      
                   </div>
            </section>
        </div>
    );
};

export default Profile;
