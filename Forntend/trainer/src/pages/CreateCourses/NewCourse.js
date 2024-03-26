import React, { useState } from 'react';

const CreateCourse = () => {
  // State variables to hold course content data
  const [textSections, setTextSections] = useState([{ content: '' }]);
  const [videoSections, setVideoSections] = useState([{ videoUrl: '' }]);
  const [slideSections, setSlideSections] = useState([{ slideUrl: '' }]);

  // Function to add a new text section
  const addTextSection = () => {
    setTextSections([...textSections, { content: '' }]);
  };

  // Function to add a new video section
  const addVideoSection = () => {
    setVideoSections([...videoSections, { videoUrl: '' }]);
  };

  // Function to add a new slide section
  const addSlideSection = () => {
    setSlideSections([...slideSections, { slideUrl: '' }]);
  };

  // Function to handle changing text section content
  const handleTextChange = (index, content) => {
    const newTextSections = [...textSections];
    newTextSections[index].content = content;
    setTextSections(newTextSections);
  };

  // Function to handle changing video section URL
  const handleVideoChange = (index, videoUrl) => {
    const newVideoSections = [...videoSections];
    newVideoSections[index].videoUrl = videoUrl;
    setVideoSections(newVideoSections);
  };

  // Function to handle changing slide section URL
  const handleSlideChange = (index, slideUrl) => {
    const newSlideSections = [...slideSections];
    newSlideSections[index].slideUrl = slideUrl;
    setSlideSections(newSlideSections);
  };

  return (
    <div>
      {/* Text Section */}
      <div>
        <h2>Text Sections</h2>
        {textSections.map((section, index) => (
          <div key={index}>
            {/* Input field for text content */}
            <textarea
              value={section.content}
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
          </div>
        ))}
        {/* Button to add a new text section */}
        <button onClick={addTextSection}>Add Text Section</button>
      </div>

      {/* Video Section */}
      <div>
        <h2>Video Sections</h2>
        {videoSections.map((section, index) => (
          <div key={index}>
            {/* Input field for video URL */}
            <input
              type="text"
              value={section.videoUrl}
              onChange={(e) => handleVideoChange(index, e.target.value)}
            />
          </div>
        ))}
        {/* Button to add a new video section */}
        <button onClick={addVideoSection}>Add Video Section</button>
      </div>

      {/* Slide Section */}
      <div>
        <h2>Slide Sections</h2>
        {slideSections.map((section, index) => (
          <div key={index}>
            {/* Input field for slide URL */}
            <input
              type="text"
              value={section.slideUrl}
              onChange={(e) => handleSlideChange(index, e.target.value)}
            />
          </div>
        ))}
        {/* Button to add a new slide section */}
        <button onClick={addSlideSection}>Add Slide Section</button>
      </div>
    </div>
  );
};

export default CreateCourse;
