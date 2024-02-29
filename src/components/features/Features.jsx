import React from 'react'

function Features() {
    return (
        <div>
            <div class="container profile-page " style={{ margin: "7% auto" }}>
                <div className='text-start'>
                    <h3 class="font-weight-light">Why Choose <span className='heading' >Pooja DB Solution </span></h3>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 " style={{textAlign:"left"}}>
                    <div class="col">
                        <div class="card">
                            <img src="/assets/feature image/girl.jpg" class="card-img-top"
                                alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <h5 class="card-title mb-3">Trained and Verified Experts</h5>
                                <p class="card-text">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/assets/feature image/why_2.webp" class="card-img-top"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Genuine and Sealed Products</h5>
                                <p class="card-text">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/assets/feature image/why_3.webp" class="card-img-top"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Transparent and Affordable Prices</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                    additional content.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='row mt-5 '>
                    <div className='col-12'>
                        <img src="/assets/banner image/banner.webp" width={"100%"} style={{}} alt="" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Features
