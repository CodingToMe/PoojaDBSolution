
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email ,setEmail] =useState('')
    const [password,setPassword]=useState()   
    

      const formData = async(e)=>{
        e.preventDefault()
 
       try{ 
        const loginData = await axios.post('/api/v1/users/login',{
        email:email,
        password:password
        
        }) 
      }
        catch(error){
          console.log("what your name",error)          
        }
      }
  return (
    <>
    <section class="vh-100">
     <div class="container py-5 h-100">
       <div class="row d-flex align-items-center justify-content-center h-100">
         <div class="col-md-8 col-lg-7 col-xl-6">
         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
           class="img-fluid" alt="Phone image"/>
       </div>
       <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-3 card " style={{textAlign:"left"}} >
         <h5 className='text-center mb-3 mt-3'>Login Now</h5>
         <form onSubmit={formData}>
           {/* <!-- Email input --> */}
           <div class="form-outline mb-3 ">
             <label class="form-label " for="form1Example13">Email </label>
             <input type="tel" id="form1Example13" class="form-control form-control-lg" 
             required 
               name='email'
               value={email || ''}
               onChange={(e)=>setEmail(e.target.value)}
             />
             {/* <span class="error">Please enter a valid </span> */}
           </div>
 
           {/* <!-- Password input --> */}
           <div class="form-outline mb-3">
             <label class="form-label" for="form1Example23">Password</label>
             <input type="password" id="form1Example23" class="form-control form-control-lg"
             name='lastName'
             value={password || ''}
             onChange={(e)=>setPassword(e.target.value)}
             />
           </div>
 
           <div class="text-end mb-4">
             
             <a href="#!">Forgot password?</a>
           </div>
 
           {/* <!-- Submit button --> */}
           <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
         </form>
       </div>
     </div>
   </div>
 </section>
     
    </>
  )
}

export default Login
