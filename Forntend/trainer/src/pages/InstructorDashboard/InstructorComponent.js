import React from 'react';

// Import your component files for InstructorComponent
import Profile from '../InstructorProfile/InstructorProfile';
import CreateCourse from '../CreateCourses/New Course/CreateCourse';
import Performance from '../Performance/Performance';
import ManageCourses from '../CreateCourses/Landing Page/CourseLandingPage';
import Courses from '../Instructor_Components/MyCourses';
import Chat from '../Chat/Chat';

const instructorContentComponents = {
  link1: <Profile />,
  link2: <CreateCourse />,
  link3: <Performance />,
  link4: <ManageCourses />,
  link5: <Courses/>,
  link6: <Chat />,
};

export default instructorContentComponents;
