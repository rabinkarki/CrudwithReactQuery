import React from 'react'
import { useState } from 'react';

const Postform = ({onSubmit,initialValue}) => {
  const [post,setPost]=useState({
    title:initialValue.title || "",
    body:initialValue.body || ""
  });
  const handleInput=(e)=>{
    setPost({
      ...post,
      [e.target.name]: e.target.value
    }
  )
  }
  const renderField=(label)=>(
    <div>
      <label>{label}</label>
      <input type='text' className='w-full p-2 border shadow-lg rounded-md' onChange={handleInput} name={label.toLowerCase()}></input>
    </div>
  )
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit(post);
    setPost(
      {
        title:"",
        body:""
      }

    )
    
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-3'>
      {renderField('Title')}
      {renderField("Body")}
      <button type='submit' className='rounded md:rounded-lg p-1 bg-slate-200 border shadow-sm w-20 '>Submit</button>
    </form>
  )
}

export default Postform