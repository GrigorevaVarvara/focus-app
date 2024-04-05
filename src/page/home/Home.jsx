import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import './home.scss';
import stars from "../../img/stars.png";
import mainPic from "../../img/MapPicture.png";
import photoPic from "../../img/photoes.png";
 
 
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

            <div id="slider">
                <input type="radio" name="slider" id="slide1" checked />
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />
                <input type="radio" name="slider" id="slide4" />
                <div id="slides">
                    <div id="overflow">
                        <div class="inner">
                            <div class="slide slide_1">
                                <div class="slide-content">
                                    <h2>Slide 1</h2>
                                    <p>Content for Slide 1</p>
                                </div>
                            </div>
                            <div class="slide slide_2">
                                <div class="slide-content">
                                    <h2>Slide 2</h2>
                                    <p>Content for Slide 2</p>
                                </div>
                            </div>
                            <div class="slide slide_3">
                                <div class="slide-content">
                                    <h2>Slide 3</h2>
                                    <p>Content for Slide 3</p>
                                </div>
                            </div>
                            <div class="slide slide_4">
                                <div class="slide-content">
                                    <h2>Slide 4</h2>
                                    <p>Content for Slide 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="controls">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>
                <div id="bullets">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>
            </div>
        </div>

        <div class="separaitor"></div>

    </main>
    
</div>
    </section>
  )
}
 
export default Home