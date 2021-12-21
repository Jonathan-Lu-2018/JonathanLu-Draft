import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
   return (
      <div className="profile-container">
         <div className="profile-parent">
            <div className="profile-details">
               <div className="profile-details-name">
                  <span className="primary-text">
                     {' '}
                     Hello, I'm <span className="highlighted-text">John</span>
                  </span>
               </div>

               <div className="profile-details-role">
                  <span className="primary-text">
                     {' '}
                     <h1>
                        {' '}
                        <Typical
                           loop={Infinity}
                           steps={[
                              'Bay Area Native 🌉',
                              1000,
                              'College Student 📚',
                              1000,
                              'Avid Learner 😎',
                              1000,
                              'Software Engineer 👨‍💻',
                              1000,
                              'Full Stack Developer 💻',
                              1000,
                              'React/React Native Dev 📱',
                              1000,
                              'Travel Enthusiast 🌎',
                              1000,
                              'Food Lover 🍜',
                              1000,
                           ]}
                        />
                     </h1>
                     <span className="profile-role-tagline">
                        Passoniate about building applications to improve daily
                        life!
                     </span>
                  </span>
               </div>

               <div className="profile-options">
                  <button
                     className="btn primary-btn"
                     onClick={() =>
                        ScrollService.scrollHandler.scrollToHireMe()
                     }
                  >
                     {' '}
                     Hire Me{' '}
                  </button>
                  <a href="Resume.pdf" download="JonathanLu_Resume.pdf">
                     <button className="btn highlighted-btn">Get Resume</button>
                  </a>
               </div>

               <div className="colz">
                  <div className="colz-icon">
                     <a
                        href="https://www.facebook.com/jonathan.lu.77/"
                        target="_blank"
                     >
                        <i
                           className="fa fa-facebook-square"
                           target="_blank"
                        ></i>
                     </a>
                     <a
                        href="https://www.instagram.com/jondini_lu/"
                        target="_blank"
                     >
                        <i className="fa fa-instagram"></i>
                     </a>
                     <a
                        href="https://www.linkedin.com/in/jonathan-lu-162248161/"
                        target="_blank"
                     >
                        <i className="fa fa-linkedin"></i>
                     </a>
                     <a
                        href="https://github.com/Jonathan-Lu-2018"
                        target="_blank"
                     >
                        <i className="fa fa-github-square"></i>
                     </a>
                  </div>
               </div>
            </div>

            <div className="profile-picture">
               <div className="profile-picture-background"></div>
            </div>
         </div>
      </div>
   );
}
