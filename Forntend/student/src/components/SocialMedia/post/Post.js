import React from 'react'
import './post.css';
import Comment from '../../../images/comment.png' ;
import Share from '../../../images/share.png' ;
import Unlike from '../../../images/unlike.png' ;
import Like from '../../../images/like.png' ;
const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.liked?Like:Unlike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{fontSize: '12px'}}>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>: {data.desc}</span>
        </div>

    </div>
  )
}

export default Post
