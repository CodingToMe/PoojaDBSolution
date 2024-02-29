import React from 'react'
const Footer = () => {
   
  return (
 <>
 {/* <!-- Footer --> */}
<footer class="text-center text-lg-start  text-muted" style={{backgroundColor:"#E5F4FD",paddingTop:"2px" }}>
  
  
  {/* <!-- Section: Soc/ial media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Conten/t --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
          Categories
          </h6>
          <p>
            <a href="#!" class="text-reset">Salon At Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Spa At Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Advanced Treatments</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Pre Bridal</a>
          </p>
          <p>
            <a href="#!" class="text-reset">MakeUp At Home</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Products</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contect</a>
          </p>
          <p>
            <a href="#!" class="text-reset">About</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="bi bi-house-door"></i> New York, NY 10012, US</p>
          <p>
          <i class="bi bi-envelope"></i>
            poojadbsolution@example.com
          </p>
          <p><i class="bi bi-phone"></i> + 01 234 567 88</p>
         
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="">PoojaDbSolution</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
 
 </>
  )
}

export default Footer
