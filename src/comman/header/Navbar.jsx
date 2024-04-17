import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { getLocalUser } from "../../utils/auth";
import AddCategoryModal from "../../modals/AddCategoryModal";

function Navbar() {
  const user =getLocalUser()
  const [show, setShow] = useState(false);
  const [heading,setHeading]=useState('')
  const handalModal=(e,heading)=>{
    setShow(!show)
    setHeading(heading)

  }
  

 
  return (
    <>
    {user.role !== 'Admin' ?<nav className="navbar bg-light navbar-expand-lg navbar-dark bg-black ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Pooja Db Solution</a>
      <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>


      {/* side bar */}
      <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        {/* header  */}
        <div className="offcanvas-header text-white border-bottom">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Pooja Db Solution</h5>
          <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>


        {/* SideBar body  */}
        <div className="offcanvas-body d-flex flex-column flex-lg-row p-lg-0 p-4">
          <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3 fs-5 flex-grow-1">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">Products</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">Contect</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">About</a>
            </li>



            {/* <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Create Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </ul>
            <div  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <Link to={'/login'} className="text-white" >Login</Link>
                <Link to={'/register'}
                className="text-white text-decoration-none px-3 py-1 rounded-4"
                style={{backgroundColor:"#f94ca4 "}}
                >Sign Up</Link>
                
                
            </div>
        </div>
      </div>
    </div>
  </nav>:

   <nav className="navbar bg-light navbar-expand-lg navbar-dark bg-black ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Pooja Db Solution</a>
      <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>


      {/* side bar */}
      <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        {/* header  */}
        <div className="offcanvas-header text-white border-bottom">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Pooja Db Solution</h5>
          <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>


        {/* SideBar body  */}
        <div className="offcanvas-body d-flex flex-column flex-lg-row p-lg-0 p-4">
          <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3 fs-5 flex-grow-1">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">Products</a>
            </li> */}
            {/* <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">Contect</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="#">About</a>
            </li> */}



            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" active>
              Category
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={()=>handalModal("Add Category")}>Add Category</li>
                <li className="dropdown-item">Update Category</li>
                <li className="dropdown-item">Delete Category</li>
              </ul>
            </li>
            {/* sub category */}
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" active>
              Sub Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Add Sub Category</a></li>
                <li><a className="dropdown-item" href="#">Update Sub Category</a></li>
                <li><a className="dropdown-item" href="#">Delete Sub Category</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" active>
              Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Add Products</a></li>
                <li><a className="dropdown-item" href="#">Update Products</a></li>
                <li><a className="dropdown-item" href="#">Delete Products</a></li>
              </ul>
            </li>
          </ul>
            <div  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <Link to={'/login'} className="text-white" >Login</Link>
                <Link to={'/register'}
                className="text-white text-decoration-none px-3 py-1 rounded-4"
                style={{backgroundColor:"#f94ca4 "}}
                >Sign Up</Link>
                
                
            </div>
        </div>
      </div>
    </div>
  </nav>}
  <AddCategoryModal
  show={show}
  handalModal={handalModal}
  heading={heading}
  />
  </>
  );
}

export default Navbar;


