import { React } from 'react'
import { Typography } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/createPost.jsx';
import Post from './pages/Post'
import AllPosts from './pages/AllPosts.jsx';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
