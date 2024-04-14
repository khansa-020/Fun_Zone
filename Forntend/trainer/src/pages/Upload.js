import React, { useState } from 'react';
import { app } from './../firebase'; // Adjust the import path as needed
import 'firebase/storage';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = app.storage().ref();
      const imageRef = storageRef.child(`images/${selectedFile.name}`);
      imageRef.put(selectedFile)
        .then((snapshot) => {
          console.log('Image uploaded successfully:', snapshot);
          // Optionally, you can get the download URL and save it to MongoDB here
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadComponent;
