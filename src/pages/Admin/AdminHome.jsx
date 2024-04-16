import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import './style.css';

import Sidebar from '../../components/sidebar/Sidebar';
import {BrowserRouter  , Routes ,Route} from 'react-router-dom'
import Category from '../../components/category/Category';


const AdminHome = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {/* <Sidebar></Sidebar> */}

        {/* <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter> */}
      
        </>
    )
}

export default AdminHome
