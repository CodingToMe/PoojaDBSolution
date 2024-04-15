
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getAPI, postAPI } from '../../utils/apiCalling'
import config from '../../utils/apiUrl'
import { toast } from 'react-toastify'

const Login = () => {
  const [data, setData] = React.useState([]) // set state to hold the result

  //function below triggers the helper function
  //    const getData = () => getAPI("posts").then(
  // (res) => {
  //   if(res.status === 200){
  //     setData(res.data)
  //     console.log(res.data,"data") 
  //   }else{
  //     console.log(res,"res")
  //   }
  // }
  // )

  // const getData = async () => {

  //   const result = await getAPI("posts")
  //   console.log(result.data, "resultdata")
  // }

  //this runs the getData trigger function as useEffect
  React.useEffect(() => {
    // getData()
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const navigate = new useNavigate()


  const formData = async (e) => {
    e.preventDefault()
    let datas = {
      email: email,
      password: password
    }

    try {
      const result = await postAPI(config.login, datas , { withCredentials: true })
      // const result = await axios.post('/api/v1/users/login',datas)
      console.log(result.data, "response...")
      if(result && result.code == 200){
        let user =result.data.loggedInUser 
        let token =result.data.accessToken
        user?.role =='Admin'?navigate('/adminHome'):navigate('/') 
        toast.success(result?.message , {position :"top-right"})
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',JSON.stringify(token))

      }
      else{
        toast.warning(result?.message , {position :"top-right"})
      }
      
      
    }
    catch (error) {
      console.log("error", error)
      toast.warning("Someting wents wrong")
    }
  }
  return (
    <>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-3 card " style={{ textAlign: "left" }} >
              <h5 className='text-center mb-3 mt-3'>Login Now</h5>
              <form onSubmit={formData}>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-3 ">
                  <label class="form-label " for="form1Example13">Email </label>
                  <input type="tel" id="form1Example13" class="form-control form-control-lg"
                    required
                    name='email'
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <span class="error">Please enter a valid </span> */}
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-3">
                  <label class="form-label" for="form1Example23">Password</label>
                  <input type="password" id="form1Example23" class="form-control form-control-lg"
                    name='lastName'
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
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
