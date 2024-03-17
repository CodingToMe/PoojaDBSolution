import React from 'react'
import './style.css'
const AccordionAndCard = () => {
    return (
        <div className='  d-flex flex-row justify-content-center mt-5'>
            <div class="accordion accordion-flush" id="accordionFlushExample" style={{ width: "30%" }}>
                <div class="accordion-item border" >
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Waxing
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className='text-left'>

                            <h6  >home salone 1</h6>
                            <h6 >home salone 1</h6>
                            <h6 >home salone 1</h6>

                        </div>
                    </div>
                </div>
                <div class="accordion-item border">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div>

                            <h6  >home salone 1</h6>
                            <h6 >home salone 1</h6>
                            <h6 >home salone 1</h6>

                        </div>
                    </div>
                </div>
                <div class="accordion-item border">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div>

                            <h6  >home salone 1</h6>
                            <h6 >home salone 1</h6>
                            <h6 >home salone 1</h6>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div class="card mb-5 ms-5" style={{ maxWidth: "700px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                style={{ height: "215px", width: "100%" }}
                                src="./assets/sub category image/Waxology-Rica.jpg"
                                alt="Trendy Pants and Shoes"
                                class="img-fluid rounded-start"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> Waxing</h5>
                                <ul className='' style={{ textAlign: "left" }}>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, dignissimos!</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, odio!</li>
                                </ul>
                                <div className='d-flex ms-3 justify-content-between'>
                                    <div>
                                        <span className='me-3'>700/-</span>
                                        <span className='me-3' style={{ color: "green" }}>50% Off</span>
                                        <span className='me-3' style={{ textDecorationLine: "line-through", color: "gray" }}>1600/-</span>
                                    </div>
                                    <div>
                                        <button className='btn btn-danger'>
                                            Add to Cart
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5 ms-5" style={{ maxWidth: "700px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                style={{ height: "215px", width: "100%" }}
                                src="./assets/sub category image/Rica-Special.jpg"
                                alt="Trendy Pants and Shoes"
                                class="img-fluid rounded-start"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> Rica-Special</h5>
                                <ul className='' style={{ textAlign: "left" }}>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, dignissimos!</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, odio!</li>
                                </ul>
                                <div className='d-flex ms-3 justify-content-between'>
                                    <div>
                                        <span className='me-3'>500/-</span>
                                        <span className='me-3' style={{ color: "green" }}>40% Off</span>
                                        <span className='me-3' style={{ textDecorationLine: "line-through", color: "gray" }}>1500/-</span>
                                    </div>
                                    <div>
                                        <button className='btn btn-danger'>
                                            Add to Cart
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            

        </div>
    )
}

export default AccordionAndCard
