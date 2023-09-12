import React from "react";
import './Homepage.css';
import { Link } from "react-router-dom";

// importing button
import Btn from "../../component/buttons/Btn";

//importing images
import sliderimg from '../../assets/img/banner-img2.png';

//importing slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//importing owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//importing other modules
import Category_banner_area from "../../component/category-banner-area/Category_banner_area";
import ProductCategory from "../../component/Product_category/ProductCategory";
import ProductArea from "../../component/Product_area/ProductArea";
import SocialMediaSection from "../../component/sliders/social-media-section/SocialMediaSection";
import FacilitySection from "../../component/sliders/facility-section/FacilitySection";
import BlogArea from "../../component/Blog area/BlogArea";

export default function Homepage() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    
    
  };
 
  return (
    <>
      {/* Start Main Banner Area */}
      <div className="home-slider-area " >
        <Slider {...settings}>
        <div>
        <div className="home-slider">
            <div className="main-banner-content">
              <span className="sub-title">Limited Time Offer!</span>
              <h1>Winter-Spring!</h1>
              <p>Take 20% Off ‘Sale Must-Haves'</p>
              <div className="btn-box">
                <Btn />
                <Link
                  href="products-left-sidebar-3.html"
                  className="optional-btn"
                >
                  Shop Men's
                </Link>
              </div>
            </div>
          
            <div className="banner-image">
              <div className="circle" ><img src={sliderimg} alt="" /></div>
            </div>
        </div>
        </div>

        <div>
        <div className="home-slider">
            <div className="main-banner-content">
              <span className="sub-title">Limited Time Offer!</span>
              <h1>Winter-Spring!</h1>
              <p>Take 20% Off ‘Sale Must-Haves'</p>
              <div className="btn-box">
                <Btn />
                <Link
                  href="products-left-sidebar-3.html"
                  className="optional-btn"
                >
                  Shop Men's
                </Link>
              </div>
            </div>
          
            <div className="banner-image">
              <div className="circle" ><img src={sliderimg} alt="" /></div>
            </div>
        </div>
        </div>

        <div>
        <div className="home-slider">
            <div className="main-banner-content">
              <span className="sub-title">Limited Time Offer!</span>
              <h1>Winter-Spring!</h1>
              <p>Take 20% Off ‘Sale Must-Haves'</p>
              <div className="btn-box">
                <Btn />
                <Link
                  href="products-left-sidebar-3.html"
                  className="optional-btn"
                >
                  Shop Men's
                </Link>
              </div>
            </div>
          
            <div className="banner-image">
              <div className="circle" ><img src={sliderimg} alt="" /></div>
            </div>
        </div>
        </div>

        <div>
        <div className="home-slider">
            <div className="main-banner-content">
              <span className="sub-title">Limited Time Offer!</span>
              <h1>Winter-Spring!</h1>
              <p>Take 20% Off ‘Sale Must-Haves'</p>
              <div className="btn-box">
                <Btn />
                <Link
                  href="products-left-sidebar-3.html"
                  className="optional-btn"
                >
                  Shop Men's
                </Link>
              </div>
            </div>
          
            <div className="banner-image">
              <div className="circle" ><img src={sliderimg} alt="" /></div>
            </div>
        </div>
        </div>

        
        </Slider>
      </div>
      {/* End Main Banner Area */}

      {/* Start Categories Banner Area */}
      <Category_banner_area></Category_banner_area>
      {/* End Categories Banner Area */}

      {/* Start Products Area */}
      <div className="section-title">
            <span className="sub-title">See Our Collection</span>
            <h2>Recent Products</h2>
      </div>
      <ProductArea></ProductArea>
      {/* End Products Area */}

      {/* ProductCategory area  */}
      <ProductCategory/>
      {/* end ProductCategory area */}


      {/* Start Products Area */}
      <div className="section-title">
            <span className="sub-title">See Our Collection</span>
            <h2>Popular Products</h2>
      </div>
      <ProductArea/>
      {/* End Products Area */}

      {/* Start Facility Area */}
      <FacilitySection/>
      {/* End Facility Area */}


      {/* Start Products Area */}
      <div className="section-title">
            <span className="sub-title">See Our Collection</span>
            <h2>Best Selling Products</h2>
      </div>
      <ProductArea/>
      {/* End Products Area */}


      {/* Start Blog Area */}
      <BlogArea/>
      {/* End Blog Area */}


      {/* SocialMediaSection */}
      <SocialMediaSection/>
      {/* end of SocialMediaSection */}
    
      {/* <div className="go-top">
        <i className="bx bx-up-arrow-alt" />
      </div> */}
      
    </>
  );

}
