import React, { useState, useRef } from 'react';
import profile from "../../../images/defaultProfile.png";
import './postShare.css';
import { UilScenery, UilPlayCircle, UilSchedule, UilLocationPoint, UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={profile} alt="" />
      <div>
        <input type="text" placeholder="What's on your mind?" />
        <div className="postOptions">
          <div
            className='option'
            style={{ color: 'green' }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className='option' style={{ color: 'orange' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className='option' style={{ color: 'purple' }}>
            <UilSchedule />
            Schedule
          </div>
          <div className='option' style={{ color: 'blue' }}>
            <UilLocationPoint />
            Location
          </div>
          <button className='button ps-button'>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
