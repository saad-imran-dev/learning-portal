import {  } from 'react'
import { Typography } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/createPost.jsx';
import Post from './pages/Post'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
