import React, { useState } from 'react';
import './UploadVedio.css'; 

const UploadVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to handle video change
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="video-container">
      <div className="dummy-video">
        {selectedVideo ? (
          <video controls className="video-preview">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="video-placeholder"><img src="https://s.udemycdn.com/course/750x422/placeholder.jpg" alt="Dummy" className="image-placeholder" /></div>
        )}
      </div>

      <div className="text-btn">
        <div className="video-guidelines">
          <p>Your promo video is a quick and compelling way for students to preview what they’ll learn in your course. Students considering your course are more likely to enroll if your promo video is well-made. Learn how to make your promo video awesome!</p>
        </div>

        <div className="smalll-card">
          <input
            accept=".mp4"
            id="input-video"
            type="file"
            className="video-input"
            onChange={handleVideoChange}
          />

          <label htmlFor="input-video" className="select-video">
            <span className="selected">{selectedVideo ? 'Selected: ' + selectedVideo.name : 'No video selected'}</span>
            <span className="upload-vedio-btn"><span>{selectedVideo ? 'Change Video' : 'Upload Video'}</span></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
