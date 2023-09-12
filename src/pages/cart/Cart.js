import React from 'react'
import './Cart.css'


//importing images
import img1 from '../../assets/img/products/img1.jpg';
import FacilitySection from '../../component/sliders/facility-section/FacilitySection';
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection';

const Cart = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Cart</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}


            {/* cart product detais  */}
            <div className='cart'>
                <section className="cart-area ptb-100">
                    <div className="container">
                        <form>
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cart_first_product">
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img src={img1} alt="item" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">Long Sleeve Leopard T-Shirt</a>
                                                <ul>
                                                    <li>Color: <span>Light Blue</span></li>
                                                    <li>Size: <span>XL</span></li>
                                                    <li>Material: <span>Cotton</span></li>
                                                </ul>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">$250.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn"><i className="bx bx-minus" /></span>
                                                    <input type="text" min={1} defaultValue={1} />
                                                    <span className="plus-btn"><i className="bx bx-plus" /></span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">$250.00</span>
                                                <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img src={img1} alt="item" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">Causal V-Neck Soft Raglan</a>
                                                <ul>
                                                    <li>Color: <span>Light Blue</span></li>
                                                    <li>Size: <span>XL</span></li>
                                                    <li>Material: <span>Cotton</span></li>
                                                </ul>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">$200.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn"><i className="bx bx-minus" /></span>
                                                    <input type="text" min={1} defaultValue={1} />
                                                    <span className="plus-btn"><i className="bx bx-plus" /></span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">$200.00</span>
                                                <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img src={img1} alt="item" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">Hanes Men's Pullover</a>
                                                <ul>
                                                    <li>Color: <span>Light Blue</span></li>
                                                    <li>Size: <span>XL</span></li>
                                                    <li>Material: <span>Cotton</span></li>
                                                </ul>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">$200.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn"><i className="bx bx-minus" /></span>
                                                    <input type="text" min={1} defaultValue={1} />
                                                    <span className="plus-btn"><i className="bx bx-plus" /></span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">$200.00</span>
                                                <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img src={img1} alt="item" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">Gildan Men's Crew T-Shirt</a>
                                                <ul>
                                                    <li>Color: <span>Light Blue</span></li>
                                                    <li>Size: <span>XL</span></li>
                                                    <li>Material: <span>Cotton</span></li>
                                                </ul>
                                            </td>
                                            <td className="product-price">
                                                <span className="unit-amount">$150.00</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span className="minus-btn"><i className="bx bx-minus" /></span>
                                                    <input type="text" min={1} defaultValue={1} />
                                                    <span className="plus-btn"><i className="bx bx-plus" /></span>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">$150.00</span>
                                                <a href="#" className="remove"><i className="bx bx-trash" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-buttons">
                                <div className="cart-buttons_1">
                                    <div className="col-lg-7 col-sm-7 col-md-7">
                                        <a href="#" className="optional-btn">Continue Shopping</a>
                                    </div>
                                    <div className="col-lg-5 col-sm-5 col-md-5 text-end">
                                        <a href="#" className="default-btn">Update Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-totals">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li>Subtotal <span>$800.00</span></li>
                                    <li>Shipping <span>$30.00</span></li>
                                    <li>Total <span>$830.00</span></li>
                                </ul>
                                <a href="#" className="default-btn">Proceed to Checkout</a>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            {/* end of cart product details */}


            {/* FacilitySection area */}
            <FacilitySection/>
            {/* end FacilitySection */}

            {/* SocialMediaSection */}
            <SocialMediaSection/>
            {/* end SocialMediaSection */}
        </>
    )
}

export default Cart
