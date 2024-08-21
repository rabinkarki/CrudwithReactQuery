import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost } from '../api/posts';

const Post = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const {
    isLoading,
    isError,
    data:post,
    error
  }=useQuery({
    queryKey:["posts",id],
    queryFn:()=>fetchPost(id),
  })
    const handleClick=()=>{
      navigate("/");
    }
      if (isLoading) return "...loading";
      if (isError) return `Error ${error.message}`;
    
  return (
    <div>
      <h1>Awesome blog</h1>
      <button onClick={handleClick}>back to list posts</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post