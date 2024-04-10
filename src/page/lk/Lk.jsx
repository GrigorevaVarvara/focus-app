import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import './login.scss';
 
const Lk = () => {
    
 
    return(
        
        <div class="side-bar">

        <div id="close-btn">
           <i class="fas fa-times"></i>
        </div>
     
        <div class="profile">
           <img src="images/pic-1.jpg" class="image" alt="">
           <h3 class="name">shaikh anas</h3>
           <p class="role">studen</p>
           <a href="profile.html" class="btn">view profile</a>
        </div>
     
        <nav class="navbar">
           <a href="home.html"><i class="fas fa-home"></i><span>home</span></a>
           <a href="about.html"><i class="fas fa-question"></i><span>about</span></a>
           <a href="courses.html"><i class="fas fa-graduation-cap"></i><span>courses</span></a>
           <a href="teachers.html"><i class="fas fa-chalkboard-user"></i><span>teachers</span></a>
           <a href="contact.html"><i class="fas fa-headset"></i><span>contact us</span></a>
        </nav>
     
     </div>
     
     <section class="user-profile">
     
        <h1 class="heading">your profile</h1>
     
        <div class="info">
     
           <div class="user">
              <img src="images/pic-1.jpg" alt="">
              <h3>shaikh anas</h3>
              <p>student</p>
              <a href="update.html" class="inline-btn">update profile</a>
           </div>
        
           <div class="box-container">
        
              <div class="box">
                 <div class="flex">
                    <i class="fas fa-bookmark"></i>
                    <div>
                       <span>4</span>
                       <p>saved playlist</p>
                    </div>
                 </div>
                 <a href="#" class="inline-btn">view playlists</a>
              </div>
        
              <div class="box">
                 <div class="flex">
                    <i class="fas fa-heart"></i>
                    <div>
                       <span>33</span>
                       <p>videos liked</p>
                    </div>
                 </div>
                 <a href="#" class="inline-btn">view liked</a>
              </div>
        
              <div class="box">
                 <div class="flex">
                    <i class="fas fa-comment"></i>
                    <div>
                       <span>12</span>
                       <p>videos comments</p>
                    </div>
                 </div>
                 <a href="#" class="inline-btn">view comments</a>
              </div>
        
           </div>
        
    )
}
 
export default Lk