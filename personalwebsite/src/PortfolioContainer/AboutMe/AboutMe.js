import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
   let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
   };
   const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

   const SCREEN_CONSTANTS = {
      description:
         'Growing up in Silicon Valley, my passion for programming began at a very young age. I was introduced to technology through watching my older cousins play video games. I decided to pursue a career in STEM, because I excel greatly in quantitative subjects and enjoy the challenge behind solving difficult problems. Outside of school, I work as an instructor at Mathnasium where I help low-income students get ahead with their math curriculum. I am currently completing my undergrad at San Jose State University. With a software engineering degree, I want to join a company that offers a work hard, play hard culture and provides an opportunity to tackle real-world projects.',
      highlights: {
         bullets: [
            'Only-child 🍼',
            '1st Generation College Student 👨‍🎓',
            'Play sports recreationally 🏀🏈🏸',
            "Can solve a Rubrik's Cube in less than a minute 🧊",
            'Fluent in multiple foreign languages 🇨🇳🇹🇼🇭🇰',
            'R&B and soft pop are my go to music 🎶',
            'Recently started playing piano 🎹',
         ],
         heading: 'Here are Some Fun Facts:',
      },
   };
   const renderHighlight = () => {
      return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
         <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
         </div>
      ));
   };

   return (
      <div
         className="about-me-container screen-container fade-in"
         id={props.id || ''}
      >
         <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Who Am I?'} />
            <div className="about-me-card">
               <div className="about-me-profile"></div>
               <div className="about-me-details">
                  <span className="about-me-description">
                     {SCREEN_CONSTANTS.description}
                  </span>
                  <div className="about-me-highlights">
                     <div className="highlight-heading">
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                     </div>
                     {renderHighlight()}
                  </div>
                  <div className="about-me-options">
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
                        <button className="btn highlighted-btn">
                           Get Resume
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
