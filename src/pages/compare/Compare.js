import React from 'react'
import './Compare.css'


//importing images
import img1 from '../../assets/img/products/img1.jpg';

//importing other modules
import FacilitySection from '../../component/sliders/facility-section/FacilitySection';
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection';

const Compare = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Compare Products</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Compare</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* compare area */}
            <section className="compare-area ptb-100">
                <div className="container">
                    <div className="products-compare-table table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Products</td>
                                    <td>
                                        <div className="remove-btn">
                                            <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                        </div>
                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <a href="#">
                                                    <img src={img1} className="main-image" alt="image" />
                                                    {/* <img src={img1} className="hover-image" alt="image" /> */}
                                                </a>
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
                                    </td>
                                    <td>
                                        <div className="remove-btn">
                                            <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                        </div>
                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <a href="#">
                                                    <img src={img1} className="main-image" alt="image" />
                                                    {/* <img src={img1} className="hover-image" alt="image" /> */}
                                                </a>
                                            </div>
                                            <div className="products-content">
                                                <h3><a href="#">Causal V-Neck Soft Raglan</a></h3>
                                                <div className="price">
                                                    <span className="old-price">$210</span>
                                                    <span className="new-price">$200</span>
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
                                    </td>
                                    <td>
                                        <div className="remove-btn">
                                            <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                        </div>
                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <a href="#">
                                                    <img src={img1} className="main-image" alt="image" />
                                                    {/* <img src={img1} className="hover-image" alt="image" /> */}
                                                </a>
                                            </div>
                                            <div className="products-content">
                                                <h3><a href="#">Hanes Top Men's Pullover</a></h3>
                                                <div className="price">
                                                    <span className="old-price">$210</span>
                                                    <span className="new-price">$200</span>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td>Collection</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                </tr>
                                <tr>
                                    <td>Availability</td>
                                    <td>In Stock</td>
                                    <td>In Stock</td>
                                    <td>In Stock</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td>100% Polyester</td>
                                    <td>100% Polyester</td>
                                    <td>100% Polyester</td>
                                </tr>
                                <tr>
                                    <td>Vendor</td>
                                    <td>Lacoste</td>
                                    <td>Lacoste</td>
                                    <td>Lacoste</td>
                                </tr>
                                <tr>
                                    <td>SKU</td>
                                    <td>00105сd-1<p /></td>
                                    <td>00105сd-1</td>
                                    <td>00105сd-1</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>White</td>
                                    <td>Black</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td>20</td>
                                    <td>22</td>
                                    <td>XXL</td>
                                </tr>
                                <tr>
                                    <td>Barcode</td>
                                    <td>1234567890</td>
                                    <td>1234567890</td>
                                    <td>1234567890</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* end compare area */}

            {/* facilitysection */}
            <FacilitySection/>
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection/>
            {/* end socialmedia section */}

        </>
    )
}

export default Compare
