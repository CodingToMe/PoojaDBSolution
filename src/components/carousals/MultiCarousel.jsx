import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {WithStyles} from 'react-multi-carousel'
import React from "react";
import './multicarousel.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const sliderImageUrl = [
    //First image url
     {
      url:
        "/assets/beauty/body-polishing-subcategory.jpg",
        title:"Body Polishing"
    },
  
    {
      url:
        "/assets/beauty/Detan-Bleach-subcategory.jpg",
        title:"De-Tan / Bleach"
    },
    //Second image url
    {
      url:
        "/assets/beauty/Facial-subcategory.jpg",
        title:"Facial"
    },
    //Third image url
    {
      url:
        "/assets/beauty/Hair-Colour-subcategory.jpg",
        title:"Hair"
    },
  
    //Fourth image url
  
    {
      url:
        "/assets/beauty/Mani-Pedi-subcategory.jpg",
        title:"Mani padi"
    },
    {
        url:
          "/assets/beauty/Sub-category-Waxing.jpg",
          title:"Waxing"
      },
      {
        url:
          "/assets/beauty/threading-subcategory.jpg",
          title:"Threading"
      },
      {
        url:
          "/assets/beauty/Under-Eye-Treatment.jpg",
          title:"EyeYouth Therapy"
      },
    
    
  ];

function MultiCarousel() {
   

  return (
   <>

<div className="parent" style={{width:"80%",margin:"0px auto"}}>
      <Carousel
        responsive={responsive}
        autoPlay={1000}
        swipeable={true}
        draggable={true}
        className=""
        
        keyBoardControl
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
              <h6 className="mt-2">{imageUrl.title}</h6>
            </div>
          );
        })}
      </Carousel>
    </div>

   {/* <Carousel 
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={1000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={true}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
   responsive={responsive}
   >
  <div><div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div><div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
</Carousel> */}

   
   </>
  )
}

export default MultiCarousel
