import React, { useState } from 'react';
import './imageUpload.css'; // Import the CSS file for styling

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-container">
      <div className="dummy-image">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="image-preview" />
        ) : (
          <img src="https://s.udemycdn.com/course/750x422/placeholder.jpg" alt="Dummy" className="image-placeholder" />
        )}
      </div>

      <div className="text-button">
        <div className="image-guidelines">
          <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
        </div>

        <div className="smal-card">
                <input
                    accept=".gif,.jpg,.jpeg,.png"
                    id="input-file"
                    type="file"
                    className="file-input"
                    onChange={handleImageChange}
                />

          <label htmlFor="select-image" className="select-file">
            <span className="file-selected">{selectedImage ? 'Selected: ' + selectedImage.name : 'No file selected'}</span>
            <span className="upload-button"><span>{selectedImage ? 'Change File' : 'Upload File'}</span></span>
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
