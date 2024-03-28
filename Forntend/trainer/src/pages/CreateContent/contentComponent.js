import React from 'react';
import './contentComponent.css';

// Import your component files
import AboutCourse from './CourseComponents/aboutCourse/aboutCourse';
import CourseStructure from './CourseComponents/CourseStructure/courseStructure';
import LandingPage from './CourseComponents/CourseLandingpage/landingPageContent';
import CreateContent from './CourseComponents/CourseContent/createContent';
import Pricing from './CourseComponents/pricing';
import CourseMessages from './CourseComponents/courseMessage/courseMessage';

const contentComponents = {
  link1: <AboutCourse />,
  link2: <CourseStructure/>,
  link3: <LandingPage/>,
  link4: <CreateContent/>,
  link5: <Pricing />,
  link6: <CourseMessages />,
};

export default contentComponents;
