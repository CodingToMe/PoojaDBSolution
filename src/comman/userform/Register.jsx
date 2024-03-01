

import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate =useNavigate()
    
    const [user,setUser]=useState({
        firstName:'',lastName:'' ,email:'',phoneNumber:'',age:'',gender:'',password:'',conformPassword:''
    })

    const handleInput =(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUser({...user, [name]:value})
    }
    const formData= async(e)=>{
        e.preventDefault()
     try{

        // const userData =user
     

        const { data } = await axios.post('http://localhost:5000/signup' ,user)
        let message =data.message
        if(!data){
            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                });
            }
        else{
            localStorage.setItem("userData",JSON.stringify(data.data))
            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                });
                setUser('')
                setTimeout(()=>{
                    navigate("/login")
            },3000)                
        }
    }
    catch(error){
        console.log("dkjdkjl",error)
        
        let message =  error.response.data.message
                
        toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            });
            
        // console.log(error.response.data.message)
    }
    }
  return (
    <div>
    {/* <!-- Section: Design Block --> */}
    <section className="">
        
        {/* <!-- Jumbotron --> */}
        <div className="px-4 py-4 px-md-4 text-center text-lg-start" >
            <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-3 fw-bold ls-tight">
                            The best offer <br />
                            <span className="text-primary">for your business</span>
                        </h1>
                        <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div> 
                   

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body py-5 px-md-5 text-start">
                                <form> 
                                     {/* <ToastContainer /> */}
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="firstName">First name</label>
                                                <input type="text" id="firstName" className="form-control"
                                                name='firstName'
                                                 value={user.firstName || ''}
                                                 onChange={(e)=>handleInput(e)}
                                                 />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="lastName" >Last name</label>
                                                <input type="text" id="lastName" className="form-control" 
                                                    required 
                                                    name='lastName'
                                                    value={user.lastName || ''}
                                                    onChange={(e)=>handleInput(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input type="email" id="email" className="form-control" 
                                                  name='email'
                                                  value={user.email || ''}
                                                  onChange={(e)=>handleInput(e)}
                                                />
                                                <span class="error">Please enter a valid email address</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                <input type='tel' id="phoneNumber" className="form-control"  maxlength="10"
                                                name='phoneNumber'
                                                required
                                                value={user.phoneNumber || ''}
                                                onChange={(e)=>handleInput(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="age">Age</label>
                                                <input type='text' id="age" className="form-control"  
                                                required
                                                name='age'
                                                value={user.age || ''}
                                                onChange={(e)=>handleInput(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label"  >Gender</label>
                                                <br></br>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={(e)=>handleInput(e)} />
                                                    <label className="form-check-label" htmlFor="inlineRadio1" >Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={(e)=>handleInput(e)}/>
                                                    <label className="form-check-label" htmlFor="inlineRadio2" > Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="other"  onChange={(e)=>handleInput(e)} />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">other</label>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <input type="password" id="password" className="form-control"
                                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" 
                                                name='password'
                                                value={user.password ||''}
                                                onChange={(e)=>handleInput(e)
                                                }
                                                />
                                               <span class="error">Please enter a valid password</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="conformPassword">Conform Password </label>
                                                <input type="password" id="conformPassword" className="form-control"
                                                 pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" 
                                                name='conformPassword'
                                                value={user.conformPassword ||''}
                                                onChange={(e)=>handleInput(e)}
                                                />
                                                 <span class="error">Please enter a valid password</span>
                                            </div>
                                        </div>
                                    </div>




                                    {/* <!-- Submit button --> */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={formData}>
                                        Sign up
                                    </button>

                                    {/* <!-- Register buttons --> */}
                                    {/* <div className="text-center">
                                        <p>or sign up with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Jumbotron --> */}
    </section>
    
 




    
    
    {/* <!-- Section: Design Block --> */}
</div>
  )
}

export default Register
