import React from 'react'
import './Shop.css'


//importing images
import img1 from '../../assets/img/offer-bg.jpg'

//importing section
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'
import ProductArea from '../../component/Product_area/ProductArea'
import CategoryArea from '../../component/category-area/CategoryArea'



//importing other modules

const Shop = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Women's</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* CategoryArea */}
            <CategoryArea></CategoryArea>
            {/* end CategoryArea */}


            {/* shop area */}
            <div className='shop_area'>
                <div className='shop_area_left'>
                    <div className="woocommerce-widget filter-list-widget">
                        <h3 className="woocommerce-widget-title">Current Selection</h3>
                        <div className="selected-filters-wrap-list">
                            <ul>
                                <li><a href="#"><i className="bx bx-x" /> 44</a></li>
                                <li><a href="#"><i className="bx bx-x" /> XI</a></li>
                                <li><a href="#"><i className="bx bx-x" /> Clothing</a></li>
                                <li><a href="#"><i className="bx bx-x" /> Shoes</a></li>
                            </ul>
                            <a href="#" className="delete-selected-filters"><i className="bx bx-trash" /> <span>Clear All</span></a>
                        </div>
                    </div>
                    <div className="woocommerce-widget collections-list-widget">
                        <h3 className="woocommerce-widget-title">Collections</h3>
                        <ul className="collections-list-row">
                            <li><a href="#">Men's</a></li>
                            <li className="active"><a href="#" className="active">Women’s</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Uncategorized</a></li>
                        </ul>
                    </div>
                    <div className="woocommerce-widget price-list-widget">
                        <h3 className="woocommerce-widget-title">Price</h3>
                        <div className="collection-filter-by-price">
                            <input className="js-range-of-price" type="text" data-min={0} data-max={1055} name="filter_by_price" data-step={10} />
                        </div>
                    </div>
                    <div className="woocommerce-widget size-list-widget">
                        <h3 className="woocommerce-widget-title">Size</h3>
                        <ul className="size-list-row">
                            <li><a href="#">20</a></li>
                            <li><a href="#">24</a></li>
                            <li className="active"><a href="#">36</a></li>
                            <li><a href="#">30</a></li>
                            <li><a href="#">XS</a></li>
                            <li><a href="#">S</a></li>
                            <li><a href="#">M</a></li>
                            <li><a href="#">L</a></li>
                            <li><a href="#">L</a></li>
                            <li><a href="#">XL</a></li>
                        </ul>
                    </div>
                    <div className="woocommerce-widget color-list-widget">
                        <h3 className="woocommerce-widget-title">Color</h3>
                        <ul className="color-list-row">
                            <li className="active"><a href="#" title="Black" className="color-black" /></li>
                            <li><a href="#" title="Red" className="color-red" /></li>
                            <li><a href="#" title="Yellow" className="color-yellow" /></li>
                            <li><a href="#" title="White" className="color-white" /></li>
                            <li><a href="#" title="Blue" className="color-blue" /></li>
                            <li><a href="#" title="Green" className="color-green" /></li>
                            <li><a href="#" title="Yellow Green" className="color-yellowgreen" /></li>
                            <li><a href="#" title="Pink" className="color-pink" /></li>
                            <li><a href="#" title="Violet" className="color-violet" /></li>
                            <li><a href="#" title="Blue Violet" className="color-blueviolet" /></li>
                            <li><a href="#" title="Lime" className="color-lime" /></li>
                            <li><a href="#" title="Plum" className="color-plum" /></li>
                            <li><a href="#" title="Teal" className="color-teal" /></li>
                        </ul>
                    </div>
                    <div className="woocommerce-widget brands-list-widget">
                        <h3 className="woocommerce-widget-title">Brands</h3>
                        <ul className="brands-list-row">
                            <li><a href="#">Gucci</a></li>
                            <li><a href="#">Virgil Abloh</a></li>
                            <li><a href="#">Balenciaga</a></li>
                            <li className="active"><a href="#">Moncler</a></li>
                            <li><a href="#">Fendi</a></li>
                            <li><a href="#">Versace</a></li>
                        </ul>
                    </div>
                    <div className="woocommerce-widget aside-trending-widget">
                        <div className="aside-trending-products">
                            <img src={img1} alt="image" />
                            <div className="category">
                                <h3>Top Trending</h3>
                                <span>Spring/Summer 2021 Collection</span>
                            </div>
                            <a href="#" className="link-btn" />
                        </div>
                    </div>
                </div>
                <div className='shop_area_right'>
                    <div className="products-filter-options">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="d-lg-flex d-md-flex align-items-center">
                                    <span className="sub-title d-lg-none"><a href="#" data-bs-toggle="modal" data-bs-target="#productsFilterModal"><i className="bx bx-filter-alt" /> Filter</a></span>
                                    <span className="sub-title d-none d-lg-block d-md-block">View:</span>
                                    <div className="view-list-row d-none d-lg-block d-md-block">
                                        <div className="view-column">
                                            <a href="#" className="icon-view-one">
                                                <span />
                                            </a>
                                            <a href="#" className="icon-view-two active">
                                                <span />
                                                <span />
                                            </a>
                                            <a href="#" className="icon-view-three">
                                                <span />
                                                <span />
                                                <span />
                                            </a>
                                            <a href="#" className="view-grid-switch">
                                                <span />
                                                <span />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <p>Showing 1 – 18 of 100</p>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="products-ordering-list">
                                    <select>
                                        <option>Sort by Price: Low to High</option>
                                        <option>Default Sorting</option>
                                        <option>Sort by Popularity</option>
                                        <option>Sort by Average Rating</option>
                                        <option>Sort by Latest</option>
                                        <option>Sort by Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end shop area */}



            {/* facilitysection */}
            <FacilitySection />
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection />
            {/* end socialmedia section */}
        </>
    )
}

export default Shop
