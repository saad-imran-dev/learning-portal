import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/createPost.jsx';
import Post from './pages/Post'
import './index.css'
import './App.css'
import Login from "./components/LoginPage/Login.jsx"
import MainPage from "./components/MainPage/Banner.jsx"
import SignUp from "./components/SignUpPage/SignUp.jsx"


function App() {
  localStorage.setItem('url', 'https://portalproject.azurewebsites.net')

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path="/blog" element={<MainPage />}></Route>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
