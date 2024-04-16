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
            <div className="container profile-page card" style={{ margin: "7% auto" }}>
                <div>
                <h3 className="font-weight-light text-start mb-3"><span className='heading' >Salon At Home</span>
                </h3>
                <div className="card ms-4" style={{ width: "16rem", background: "pink" }}>
                    <img style={{ height: "168px", width: "236px", margin: "10px auto" }} src="./assets/cardsimage/female-spa.jpg" className="card-img-top" alt="..." />
                    <div className="card-body p-0">
                        <h5 className="card-title">Heir Salon <br /> For Women </h5>
                        <hr style={{ width: "70%", margin: "auto" }} />
                        <p>6 $/min</p>

                    </div>
                </div>
                </div>


                <hr />

                <div className='text-start'>
                    <h3 className="font-weight-light"><span className='heading' >Select your services</span></h3>
                </div>
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div className=" profile-header"onClick={navigateFun} >
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Waxing.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span className=''>Waxing </span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div className=" profile-header">
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Facial.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Facial</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div className=" profile-header">
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Mani-Pedi.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Mani-Pedi</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box " >
                        <div className=" profile-header">
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Cleanup.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>Clean-Up</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div className=" profile-header">
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Detan-Bleach.jpg" alt="" /> </div>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <span>De-Tan / Bleach</span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6 mt-3 box" >
                        <div className=" profile-header">
                            <div className="body">
                                <div className="col">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src="./assets/sub category image/Hair-Colour.jpg" alt="" /> </div>
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
