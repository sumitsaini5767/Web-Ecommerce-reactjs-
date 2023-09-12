import React, { useEffect, useRef, useState } from 'react'
import './Products.css'


// importing owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//importing images

import img1 from '../../assets/img/products/img1.jpg'

//imporing components
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'
import { Link, NavLink } from 'react-router-dom'

const Products = () => {
    const [count, setCount] = useState(1);

    const [displayDescription, setDisplayDescription] = useState(true);
    const [displayAddInfo, setDisplayAddInfo] = useState(false);
    const [displayReview, setDisplayReview] = useState(false);



    const handleDescription = () => {
        setDisplayDescription(!displayDescription);
        setDisplayAddInfo(false);
        setDisplayReview(false);
    }


    const handleAddInfo = () => {
        setDisplayAddInfo(!displayAddInfo);
        setDisplayDescription(false);
        setDisplayReview(false);
    }

    const handleReview = () => {
        setDisplayReview(!displayReview);
        setDisplayAddInfo(false);
        setDisplayDescription(false);


    }




    //owl crousel
    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };



    const responsiveOptions = {
        0: {
            items: 3,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 3,
        },
    };
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Long Sleeve Leopard T-Shirt</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Products Details</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}


            {/* products-area */}
            <div className='product-details-area'>
                <div className='product-details-area_top'>
                    <div className="products-details-image" >
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                        <div className="single-products-details-image">
                            <img src={img1} alt="image" />
                        </div>
                    </div>
                    <div className="products-details-desc products-details-desc-sticky">
                        <h3>Long Sleeve Leopard T-Shirt</h3>
                        <div className="price">
                            <span className="new-price">$250.00&nbsp;</span>
                            <span className="old-price">$321.00</span>
                        </div>
                        <div className="products-review">
                            <div className="rating">
                                <i className="bx bx-star" />
                                <i className="bx bx-star" />
                                <i className="bx bx-star" />
                                <i className="bx bx-star" />
                                <i className="bx bx-star" />
                            </div>
                            <a href="#" className="rating-count">3 reviews</a>
                        </div>
                        <ul className="products-info">
                            <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                            <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                            <li><span>Products Type:</span> <a href="#">T-Shirt</a></li>
                        </ul>
                        <div className="products-color-switch">
                            <span>Color:</span>
                            <ul>
                                <li><NavLink to="/products" className="color-black"></NavLink></li>
                                <li><Link className="color-white"></Link></li>
                                <li><Link className="color-green"></Link></li>
                                <li><Link className="color-yellowgreen"></Link></li>
                                <li><Link className="color-teal"></Link></li>
                            </ul>
                        </div>
                        <div className="products-size-wrapper">
                            <span>Size:</span>
                            <ul>
                                <li><a href="#">XS</a></li>
                                <li className="active"><a href="#">S</a></li>
                                <li><a href="#">M</a></li>
                                <li><a href="#">XL</a></li>
                                <li><a href="#">XXL</a></li>
                            </ul>
                        </div>
                        <div className="products-info-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#sizeGuideModal"><i className="bx bx-crop" /> Size guide</a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#productsShippingModal"><i className="bx bxs-truck" /> Shipping</a>
                            <a href="contact.html"><i className="bx bx-envelope" /> Ask about this products</a>
                        </div>
                        <div className="products-add-to-cart">
                            <div className="input-counter">
                                <span className="minus-btn"><i className="bx bx-minus" onClick={() => count === 1 ? setCount(1) : setCount(count - 1)} /></span>
                                {console.log(count)}
                                <input type="text" value={count} />
                                <span className="plus-btn"><i className="bx bx-plus" onClick={() => setCount(count + 1)} /></span>
                            </div>
                            <button type="submit" className="default-btn"><i className="fas fa-cart-plus" /> Add to Cart</button>
                        </div>
                        <div className="wishlist-compare-btn">
                            <a href="#" className="optional-btn"><i className="bx bx-heart" /> Add to Wishlist</a>
                            <a href="#" className="optional-btn"><i className="bx bx-refresh" /> Add to Compare</a>
                        </div>
                        <div className="buy-checkbox-btn">
                            <div className="item">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" htmlFor="cbx">
                                    <span>I agree with the terms and conditions</span>
                                </label>
                            </div>
                            <div className="item">
                                <a href="#" className="default-btn">Buy it now!</a>
                            </div>
                        </div>
                        <div className="products-details-accordion">
                            <ul className="accordion">
                                <li className="accordion-item">
                                    <a className="accordion-title active" href="javascript:void(0)" onClick={handleDescription}>
                                        {
                                            !displayDescription ? (<i className="bx bx-chevron-down" id='acrd_btn_1' />) : (<i className="bx bx-chevron-up" id='acrd_btn_1' />)
                                        }

                                        <span>Description</span>
                                    </a>
                                    {
                                        displayDescription && (
                                            <div className="accordion-content show">
                                                <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
                                                <ul>
                                                    <li><i className='bx' />Fabric 1: 100% Polyester</li>
                                                    <li>Fabric 2: 100% Polyester, Lining: 100% Polyester</li>
                                                    <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li>
                                                </ul>
                                            </div>
                                        )
                                    }

                                </li>
                                <li className="accordion-item">
                                    <a className="accordion-title" href="javascript:void(0)" onClick={handleAddInfo}>
                                        {
                                            !displayAddInfo ? (<i className="bx bx-chevron-down" id='acrd_btn_2' />) : (<i className="bx bx-chevron-up" id='acrd_btn_2' />)
                                        }

                                        Additional information
                                    </a>
                                    {
                                        displayAddInfo && (
                                            <div className="accordion-content">
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td>Color:</td>
                                                            <td>Blue, Purple, White</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Size:</td>
                                                            <td>20, 24</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Material:</td>
                                                            <td>100% Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Height:</td>
                                                            <td>180 cm - 5' 11”</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bust:</td>
                                                            <td>83 cm - 32”</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Waist:</td>
                                                            <td>57 cm - 22”</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hips:</td>
                                                            <td>88 cm - 35</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping:</td>
                                                            <td>Free</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )
                                    }

                                </li>
                                <li className="accordion-item">
                                    <a className="accordion-title" href="javascript:void(0)" onClick={handleReview}>
                                        {
                                            !displayReview ? (<i className="bx bx-chevron-down" id='acrd_btn_1' />) : (<i className="bx bx-chevron-up" id='acrd_btn_1' />)
                                        }

                                        Reviews
                                    </a>
                                    {
                                        displayReview && (
                                            <div className="accordion-content">
                                                <div className="products-review-form">
                                                    <h3>Customer Reviews</h3>
                                                    <div className="review-title">
                                                        <div className="rating">
                                                            <i className="bx bxs-star" />
                                                            <i className="bx bxs-star" />
                                                            <i className="bx bxs-star" />
                                                            <i className="bx bxs-star" />
                                                            <i className="bx bx-star" />
                                                            <p>Based on 3 reviews</p>
                                                        </div>

                                                        <a href="#" className="default-btn">Write a Review</a>
                                                    </div>
                                                    <div className="review-comments">
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bx-star" />
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin on Sep 21, 2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                        </div>
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bx-star" />
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin on Sep 21, 2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                        </div>
                                                        <div className="review-item">
                                                            <div className="rating">
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bxs-star" />
                                                                <i className="bx bx-star" />
                                                            </div>
                                                            <h3>Good</h3>
                                                            <span><strong>Admin on Sep 21, 2021</strong></span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="review-form">
                                                        <h3>Write a Review</h3>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="form-group form-group_combine">
                                                                        <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                                        <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="form-group">
                                                                        <textarea name="review-body" id="review-body" cols={30} rows={6} placeholder="Write your comments here" className="form-control" defaultValue={""} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <button type="submit" className="default-btn">Submit Review</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='product-area_slider'>
                    <div className="section-title">
                        <span className="sub-title">Our Shop</span>
                        <h2>Related Products</h2>
                    </div>
                    <div className='product-area_slider1'>

                        <OwlCarousel ref={carouselRef}
                            loop
                            // margin={10}
                            responsive={responsiveOptions}
                        >

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>

                            <div className="single-products-box">
                                <div className="products-image">
                                    <a href="#">
                                        <img src={img1} className="main-image" alt="image" />
                                        {/* <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" /> */}
                                    </a>
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className="bx bx-heart pro_btn_1" />
                                                        {/* <span className="tooltip-label">Add to Wishlist</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="compare-btn">
                                                    <a href="#">
                                                        <i className="bx bx-refresh pro_btn_2" />
                                                        {/* <span className="tooltip-label">Compare</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="quick-view-btn">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                        <i className="bx bx-search-alt pro_btn_3" />
                                                        {/* <span className="tooltip-label">Quick View</span> */}
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <div className="star-rating">
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                        <i className="bx bxs-star" />
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/* end products-area */}


            {/* facilitysection */}
            <FacilitySection />
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection />
            {/* end socialmedia section */}


        </>
    )
}

export default Products
