import React from 'react'
import "./posts.css";
import { PostsData } from '../../SocialMedia/data/PostsData';
import Post from '../Post/Post';
const Posts = () => {
  return (
    <div className="Posts">
       {PostsData.map((post,id)=>{
        return<Post data={post} id={id}/>
       })}
    </div>
  )
}

export default Posts
