import React from 'react'
import './posts.css';
import { PostsData } from '../data/PostsData';
import Post from '../post//Post';
const Posts = () => {
  return (
    <div className="posts">
    {PostsData.map((post, id)=>{
      return <Post data={post} id={id}/>
    })}
    </div>
  )
}

export default Posts
