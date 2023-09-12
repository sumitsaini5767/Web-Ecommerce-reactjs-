import React, { useRef } from 'react'
import './FacilitySection.css'
import '../../../assets/css/Flaticons.css'


//importing owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function FacilitySection() {


  const carouselRef = useRef(null);
  
    const handlePrev = () => {
      carouselRef.current.prev();
    };
  
    const handleNext = () => {
      carouselRef.current.next();
    };

  const responsiveOptions = {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    1024: {
      items: 4,
    },
  }

  return (
    <>
    <div className='parent_FacilitySection'>
      <div className='FacilitySection'>
        <OwlCarousel responsive={responsiveOptions} 
        autoplay 
        loop 
        ref={carouselRef}
        >

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-tracking firsticon"></i>
            </div>
            <h3>Free Shipping Worldwide</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-return firsticon"></i>
            </div>
            <h3>Easy Return Policy</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-shuffle firsticon"></i>
            </div>
            <h3>7 Day Exchange Policy</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-sale firsticon"></i>
            </div>
            <h3>Weekend Discount Coupon</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-credit-card firsticon"></i>
            </div>
            <h3>Secure Payment Methods</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-location firsticon"></i>
            </div>
            <h3>Track Your Package</h3>
          </div>

          <div class="single-facility-box">
            <div class="icon">
              <i class="flaticon-customer-service firsticon"></i>
            </div>
            <h3>24/7 Customer Support</h3>
          </div>

        </OwlCarousel>

        <div className="owl-nav3">
        <button type="button" role="presentation" className="owl-prev" onClick={handlePrev}>
          <i class="flaticon-left"></i>
        </button>
        <button type="button" role="presentation" className="owl-next" onClick={handleNext}>
         <i class="flaticon-right-arrow"></i>
        </button>
      </div>
      </div>
    </div>
    </>
  )
}
