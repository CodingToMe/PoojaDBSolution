import React from 'react'
import '../cards/cards.css'
import './style.css'
import { useNavigate } from 'react-router-dom'
const SelectedCategory = () => {
    const navigate =new useNavigate()

    const navigateFun=()=>{
        console.log("kdklfdj")
        navigate("/accordionAndCard")
    }
    return (
        <>
            <div class="container profile-page card" style={{ margin: "7% auto" }}>
                <div>
                <h3 class="font-weight-light text-start mb-3"><span className='heading' >Salon At Home</span>
                </h3>
                <div class="card ms-4" style={{ width: "16rem", background: "pink" }}>
                    <img style={{ height: "168px", width: "236px", margin: "10px auto" }} src="./assets/cardsimage/female-spa.jpg" class="card-img-top" alt="..." />
                    <div class="card-body p-0">
                        <h5 class="card-title">Heir Salon <br /> For Women </h5>
                        <hr style={{ width: "70%", margin: "auto" }} />
                        <p>6 $/min</p>

                    </div>
                </div>
                </div>


                <hr />

                <div className='text-start'>
                    <h3 class="font-weight-light"><span className='heading' >Select your services</span></h3>
                </div>
                <div class="row" style={{ justifyContent: "center" }}>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div class=" profile-header"onClick={navigateFun} >
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Waxing.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span className=''>Waxing </span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div class=" profile-header">
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Facial.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Facial</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div class=" profile-header">
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Mani-Pedi.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Mani-Pedi</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box " >
                        <div class=" profile-header">
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Cleanup.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Clean-Up</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div class=" profile-header">
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Detan-Bleach.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>De-Tan / Bleach</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div class=" profile-header">
                            <div class="body">
                                <div class="col">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="profile-image float-md-right"> <img src="./assets/sub category image/Hair-Colour.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span className=''>Hair</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>







                </div>


            </div>
        </>
    )
}

export default SelectedCategory
