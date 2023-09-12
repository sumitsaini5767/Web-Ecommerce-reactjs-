import React, { useRef } from 'react'
import './ProductCategory.css'
import { Link, useHref } from 'react-router-dom'

import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';

import 'boxicons';

// importing img
import img1 from "../../assets/img/offer/img1.jpg";

// importing owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//importing slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProductCategory() {


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
      items: 1,
    },
    1024: {
      items: 1,
    },
  };
  return (
    <>
      <div style={{position:'relative'}}>
      <div className='ProductCategory ' >
        {/* <Slider {...settings}> */}
        <OwlCarousel ref={carouselRef}
            loop
            margin={10}
            responsive={responsiveOptions}
        >
        <div>
      <div className="product-category_items">
          <div className="product-category_item">
            <img src={img1} alt="" />
          </div>
          <div className="product-category-item_offer">
            <h3>
              <Link href="products-without-sidebar-3.html">
                Hot Trending Products
              </Link>
            </h3>
            <p>Stylist Allison Taylor take on the summer season's trends.</p>
            <Link
              href="products-without-sidebar-3.html"
              className="default-btn"
            >
              Discover Now!
            </Link>
          </div>
        </div>
        </div>

        <div>
        <div className="product-category_items">
          <div className="product-category_item">
            <img src={img1} alt="" />
          </div>
          <div className="product-category-item_offer">
            <h3>
              <Link href="products-without-sidebar-3.html">
                Hot Trending Products
              </Link>
            </h3>
            <p>Stylist Allison Taylor take on the summer season's trends.</p>
            <Link
              href="products-without-sidebar-3.html"
              className="default-btn"
            >
              Discover Now!
            </Link>
          </div>
        </div>
        </div>

        <div>
        <div className="product-category_items">
          <div className="product-category_item">
            <img src={img1} alt="" />
          </div>
          <div className="product-category-item_offer">
            <h3>
              <Link href="products-without-sidebar-3.html">
                Hot Trending Products
              </Link>
            </h3>
            <p>Stylist Allison Taylor take on the summer season's trends.</p>
            <Link
              href="products-without-sidebar-3.html"
              className="default-btn"
            >
              Discover Now!
            </Link>
          </div>
        </div>
        </div>

        <div>
        <div className="product-category_items">
          <div className="product-category_item">
            <img src={img1} alt="" />
          </div>
          <div className="product-category-item_offer">
            <h3>
              <Link href="products-without-sidebar-3.html">
                Hot Trending Products
              </Link>
            </h3>
            <p>Stylist Allison Taylor take on the summer season's trends.</p>
            <Link
              href="products-without-sidebar-3.html"
              className="default-btn"
            >
              Discover Now!
            </Link>
          </div>
        </div>
        </div>

        {/* </Slider> */}
        </OwlCarousel>
      </div>

      

      <div className="owl-nav1">
        <button type="button" role="presentation" className="owl-prev" onClick={handlePrev}>
          <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
        </button>
        <button type="button" role="presentation" className="owl-next" onClick={handleNext}>
          <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
        </button>
      </div>
      </div>
    </>
  )
}
