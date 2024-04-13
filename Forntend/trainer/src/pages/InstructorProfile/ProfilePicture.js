import React, { useState } from 'react';
import Button from './../../Constants/button/button';
import './ProfilePic.css';

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
<div className="profile-image">
      <div className="text-button">
          <div className="imgPro-guidelines">
            <p>Upload your profile picture here. Make sure it meets our quality standards: recommended dimensions are 300x300 pixels; .jpg, .jpeg,. gif, or .png formats.</p>
          </div>
        
        <div className="dummy-img">
          {selectedImage ? (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="ProfileImg-preview" />
          ) : (
            <img src="https://s.udemycdn.com/course/750x422/placeholder.jpg" alt="Dummy" className="imgPro-placeholder" />
          )}
        </div>

        

          <div className="profile-card">
            <label htmlFor="input-file" className="select-imgPro">
              <input
                accept=".gif,.jpg,.jpeg,.png"
                id="input-file"
                type="file"
                className="imgPro-input"
                onChange={handleImageChange}
              />
              <span className="imgPro-selected">{selectedImage ? 'Selected: ' + selectedImage.name : 'No file selected'}</span>
              <span className="upload-bttn"><span>{selectedImage ? 'Change File' : 'Upload File'}</span></span>
            </label>
          </div>
        </div>
        <Button onClick={handleSubmit}>Save</Button>

      </div>
    </div>
  );
};

export default ProfilePicture;
