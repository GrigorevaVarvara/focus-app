import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import './home.scss';
import stars from "../../img/stars.png";
import mainPic from "../../img/MapPicture.png";
import photoPic from "../../img/photoes.png";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
      <div class="masthead">
        
    <main>
        <div class="container row mainscreen">
            <img class="map-pic" src={mainPic} alt="MAP"></img>
            <div class="column course">
                    <h1>Бесплатные онлайн курсы для изучения Python</h1>
                    <a class="btn btn-primary btn-big" href="signup">Начать учиться</a>
            </div>
          </div>
       

        <img class="container row separator" src={stars} alt="stars" />

        <div class="container row about">
            <img class="about-pic" src={photoPic} alt="MAP"/>
            <div>
                    <h2>О проекте </h2>
                    <div class="about-block">
                        <p>MAP - платформа для изучения Python. А также основ машинного обучения!</p>
                        <p>Что есть на платформе:</p>
                        <ul>
                            <li>Интерактивный учебник Python со 100 упражнениями</li>
                            <li>Видео курсы</li>
                            <li>Теория по основам машинного обучения</li>
                        </ul>
                    </div>
            </div>
          </div>

        <img class="container row separator" src={stars} alt="stars"></img>

        <div class="container column">
            <h2>Как пользоваться?</h2>

            <AwesomeSlider
                media={[
                    {
                        source: '../../img/MapPicture.png',
                    },
                    {
                        source: '../../img/MapPicture.png',
                    },
                    {
                        source: '../../img/MapPicture.png',
                    },
                ]}
            />
        </div>

        <div class="separaitor"></div>

    </main>
    
</div>
    </section>
  )
}
 
export default Home