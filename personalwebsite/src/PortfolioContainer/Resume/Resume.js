import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
   /* STATES */
   const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
   const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

   let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;

      Animations.animations.fadeInScreen(props.id);
   };
   const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

   /* REUSABLE MINOR COMPONENTS */
   const ResumeHeading = (props) => {
      return (
         <div className="resume-heading">
            <div className="resume-main-heading">
               <div className="heading-bullet"></div>
               <span>{props.heading ? props.heading : ''}</span>
               {props.fromDate && props.toDate ? (
                  <div className="heading-date">
                     {props.fromDate + '-' + props.toDate}
                  </div>
               ) : (
                  <div></div>
               )}
            </div>
            <div className="resume-sub-heading">
               <span>{props.subHeading ? props.subHeading : ''}</span>
            </div>
            <div className="resume-heading-description">
               <span>{props.description ? props.description : ''}</span>
            </div>
         </div>
      );
   };

   /* STATIC RESUME DATA FOR THE LABELS*/
   const resumeBullets = [
      { label: 'Education', logoSrc: 'education.svg' },
      { label: 'Work History', logoSrc: 'work-history.svg' },
      { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
      { label: 'Projects', logoSrc: 'projects.svg' },
      { label: 'Interests', logoSrc: 'interests.svg' },
   ];

   //here we have
   const programmingSkillsDetails = [
      { skill: 'Java', ratingPercentage: 78 },
      { skill: 'Python', ratingPercentage: 80 },
      { skill: 'C', ratingPercentage: 20 },
      { skill: 'C++', ratingPercentage: 40 },
      { skill: 'HTML', ratingPercentage: 80 },
      { skill: 'CSS', ratingPercentage: 60 },
      { skill: 'JavaScript', ratingPercentage: 75 },
      { skill: 'React.js', ratingPercentage: 55 },
      { skill: 'Node.js', ratingPercentage: 50 },
      { skill: 'SQL', ratingPercentage: 45 },
   ];

   const projectsDetails = [
      {
         title: 'Slice',
         duration: { fromDate: 'August 2020 ', toDate: ' December 2020' },
         description:
            'A food delivery web application where users can order from their favorite fast-food places.',
         subHeading: 'Technologies Used: Python, Django, HTML, CSS, JavaScript',
      },
      {
         title: 'Brick Breaker ',
         duration: { fromDate: 'August 2020 ', toDate: ' December 2020' },
         description:
            "An desktop application that mimics, Atari's arcade game, Breakout",
         subHeading: 'Technologies Used:  Java, JavaFX, HTML, CSS',
      },
      {
         title: 'Slay the Python ',
         duration: { fromDate: 'January 2020 ', toDate: ' May 2020' },
         description:
            'An online website for users to plan out important events and provide a work-life balance',
         subHeading: 'Technologies Used: Python, Flask, HTML, CSS, SQLAlchemy',
      },
   ];

   const resumeDetails = [
      <div className="resume-screen-container" key="education">
         <ResumeHeading
            heading={'San Jose State University'}
            subHeading={'BACHELOR OF SCIENCE SOFTWARE ENGINEERING'}
            fromDate={'August 2018 '}
            toDate={' May 2022'}
         />

         <ResumeHeading
            heading={'CodePath'}
            subHeading={'Intermediate Technical Interview Prep Course'}
            fromDate={'June 2021 '}
            toDate={' August 2021'}
         />
         <ResumeHeading
            heading={'Milpitas High School'}
            subHeading={'Discipline Study'}
            fromDate={'August 2014 '}
            toDate={' June 2018'}
         />
      </div>,

      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
         <div className="experience-container">
            <ResumeHeading
               heading={'Mathnasium of Milpitas, The Math Learning Center'}
               subHeading={'LEAD MATH INSTRUCTOR'}
               fromDate={'July 2019 '}
               toDate={' Present'}
            />
            <div className="experience-description">
               <span className="resume-description-text">
                  Currently working as a math instructor by leading in-person
                  and online sessions
               </span>
            </div>
            <div className="experience-description">
               <span className="resume-description-text">
                  - Teach 1-4 students using Mathnasium’s curriculum, ranging
                  from Elementary Math through Pre-Algebra, Integrated Math,
                  Algebra I and II, Statistics, and Pre-Calculus.
               </span>
               <br />
               <span className="resume-description-text">
                  - Maintain a clean and neat workspace to welcome students
                  entering the center.{' '}
               </span>
               <br />
               <span className="resume-description-text">
                  - Assist other lead instructors in evaluating and documenting
                  students’ progress after every session.
               </span>
               <br />
               <span className="resume-description-text">
                  - Discuss with parents regard to child’s lesson plan,
                  assessment, and workout book.
               </span>
               <br />
            </div>
         </div>
      </div>,

      /* PROGRAMMING SKILLS */
      <div
         className="resume-screen-container programming-skills-container"
         key="programming-skills"
      >
         {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
               <div className="heading-bullet"></div>
               <span>{skill.skill}</span>
               <div className="skill-percentage">
                  <div
                     style={{ width: skill.ratingPercentage + '%' }}
                     className="active-percentage-bar"
                  ></div>
               </div>
            </div>
         ))}
      </div>,

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
         {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
               key={index}
               heading={projectsDetails.title}
               subHeading={projectsDetails.subHeading}
               description={projectsDetails.description}
               fromDate={projectsDetails.duration.fromDate}
               toDate={projectsDetails.duration.toDate}
            />
         ))}
      </div>,

      /* Interests */
      <div className="resume-screen-container" key="interests">
         <ResumeHeading
            heading="Competitive Gaming"
            description="Apart from programming, I constantly challenge my reflexes while playing MOBAs and having interactive gaming sessions excites me the most."
         />
         <ResumeHeading
            heading="Sports"
            description="Watching Stephen Curry draining a three-pointer and Deebo Samuel scoring a rushing touchdown are athletic events I cannot pass up on."
         />
         <ResumeHeading
            heading="YouTube"
            description="I also like to watch the latest videos by my favorite content creators, because I take pride in helping others and believe storytelling is inspirational. "
         />
      </div>,
   ];

   const handleCarousal = (index) => {
      let offsetHeight = 360;

      let newCarousalOffset = {
         style: {
            transform: 'translateY(' + index * offsetHeight * -1 + 'px)',
         },
      };

      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
   };

   const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
         <div
            onClick={() => handleCarousal(index)}
            className={
               index === selectedBulletIndex
                  ? 'bullet selected-bullet'
                  : 'bullet'
            }
            key={index}
         >
            <img
               className="bullet-logo"
               src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
               alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
         </div>
      ));
   };

   const getResumeScreens = () => {
      return (
         <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
         >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
         </div>
      );
   };

   useEffect(() => {
      return () => {
         /* UNSUBSCRIBE THE SUBSCRIPTIONS */
         fadeInSubscription.unsubscribe();
      };
   }, [fadeInSubscription]);

   return (
      <div
         className="resume-container screen-container fade-in"
         id={props.id || ''}
      >
         <div className="resume-content">
            <ScreenHeading
               title={'Resume'}
               subHeading={'My formal Bio Details'}
            />
            <div className="resume-card">
               <div className="resume-bullets">
                  <div className="bullet-container">
                     <div className="bullet-icons"></div>
                     <div className="bullets">{getBullets()}</div>
                  </div>
               </div>

               <div className="resume-bullet-details">{getResumeScreens()}</div>
            </div>
         </div>
      </div>
   );
};

export default Resume;
