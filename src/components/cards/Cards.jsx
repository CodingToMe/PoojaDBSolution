import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom'
function Cards() {
    const navigate =new useNavigate()

    const navigateFun=()=>{
        
        navigate("/selectedCategory")
    }
  return (

    <>
    <div class="container profile-page " style={{margin:"7% auto"}}>
    <div className='text-start'>
      <h3  class="font-weight-light">India's Most<span className='heading' > Affordable Home Salon</span></h3>
    </div>
    <div class="row" style={{justifyContent: "center"}}>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
            <div class="card profile-header" onClick={navigateFun}>
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/at-home-salon-main-category.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span cla>Salon At Home</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
            <div class="card profile-header" onClick={navigateFun}>
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/female-spa.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span>Spa At Home</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
            <div class="card profile-header"onClick={navigateFun}>
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/led-facial.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span>Advanced Treatments</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box " >
            <div class="card profile-header">
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/makeup.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span>MakeUp At Home</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
            <div class="card profile-header" onClick={navigateFun}>
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/pre-bridal.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span>pre-bridal</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
            <div class="card profile-header" onClick={navigateFun}>
                <div class="body">
                    <div class="col">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="./assets/cardsimage/female-hair.jpg" alt=""/> </div>
                        </div>
                        <div className='mt-3 mb-3'>
                          <span className=''>Hair Studio</span>
                          </div>

                               
                    </div>
                </div>                    
            </div>
            
        </div>
        
        

       
        
        
       
    </div>
        
  
</div>
    </>
//     <div>
//         <section class="" >
//   <div class="container  ">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-md-12 col-xl-4">

//         <div class="card" >
//           <div class="card-body text-center">
//             <div class="">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                 class="rounded-circle img-fluid" style={{width: "100px"}} />
//             </div>
//             <h4 class="mb-2">Julie L. Arsenault</h4> 
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>
    
//     </div>
  )
}

export default Cards
