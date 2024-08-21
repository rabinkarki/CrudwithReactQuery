import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom"
import PostLists from './pages/PostLists'
import Post from "./pages/Post"
import EditPost from "./pages/EditPost"
import "./index.css"

function App() {


  return (
    <>
       <div className='h-screen bg-neutral-400  ' >
      <h1 className='text-center text-4xl sticky bg-slate-500 top-0 z-10 size-14 w-full'>Learning Query</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
    </>
  )
}

export default App
