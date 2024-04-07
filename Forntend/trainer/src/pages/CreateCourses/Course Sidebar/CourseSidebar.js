import React from 'react';
import Button from '../../../Constants/button/button';
import './CourseSidebar.css'; // Import CSS for styling



const handleSubmit = () => {
    // Handle button click (submit action)
    console.log('Form submitted');
  };


function Sidebar({ selectedLink, handleLinkClick }) {
  return (
    <div className="course-sidebar">
      <ul>
        <li className={selectedLink === 'link1' ? 'active' : ''} onClick={() => handleLinkClick('link1')}>About Courses</li>
        <li className={selectedLink === 'link2' ? 'active' : ''} onClick={() => handleLinkClick('link2')}>Course Structure</li>
        <li className={selectedLink === 'link3' ? 'active' : ''} onClick={() => handleLinkClick('link3')}>Landing Page</li>
        <li className={selectedLink === 'link4' ? 'active' : ''} onClick={() => handleLinkClick('link4')}>Create Content</li>
        <li className={selectedLink === 'link5' ? 'active' : ''} onClick={() => handleLinkClick('link5')}>Pricing</li>
        <li className={selectedLink === 'link6' ? 'active' : ''} onClick={() => handleLinkClick('link6')}>Course Messages</li>

      </ul>
      {/* Button for submission */}
      <Button onClick={handleSubmit}>Submit for Review</Button>
    </div>
  );
}

export default Sidebar;



// import React from 'react';
// import Button from '../../../Constants/button/button';
// import './CourseSidebar.css'; 

// const handleSubmit = () => {
//   // Handle button click (submit action)
//   console.log('Form submitted');
// };

// function Sidebar({ selectedLink, handleLinkClick, links }) {
//   return (
//     <div className="course-sidebar">
//       <ul>
//       {links.map((item, index) => (
//           <li key={index} className={selectedLink === `link${index + 1}` ? 'active' : ''} onClick={() => handleLinkClick(`link${index + 1}`)}>
//             <span className="sidebar-icon">{item.icon}</span> {item.text}
//           </li>
//         ))}
//       </ul>
//       {/* Button for submission */}
//       <Button onClick={handleSubmit}>Submit for Review</Button>
//     </div>
//   );
// }

// export default Sidebar;
