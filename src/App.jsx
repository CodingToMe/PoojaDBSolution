import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Navbar from './comman/header/Navbar'
import Home from './Home'
import Login from './comman/userform/Login'
import Register from './comman/userform/Register'
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import SelectedCategory from './components/selectedCategory/SelectedCategory'
import AccordionAndCard from './components/AccordionAndCard/accordionAndCard'
import AdminHome from './pages/Admin/AdminHome'
import Category from './components/category/Category'




function App() {
  
  return (
    <>
    {<Router>
    <Navbar></Navbar>
    
    <Routes>

      <Route path='/' element={<Home/>} ></Route>
      <Route path='/adminHome' element={<AdminHome/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/selectedCategory' element={<SelectedCategory/>} ></Route>
      <Route path='/accordionAndCard' element={<AccordionAndCard/>} ></Route>
      <Route path="/adminHome/dashboard/AddCategory" element={<Category />} />

    </Routes>
    </Router>}
      
   
      
    </>
  )
}

export default App
