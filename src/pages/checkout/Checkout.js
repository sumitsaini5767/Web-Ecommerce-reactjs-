import React from 'react'
import './Checkout.css'


//import components
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'



const Checkout = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Checkout</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* checkout */}
            <div className="checkout-area ptb-100">
                <div className="container">
                    <div className="user-actions">
                        <i className="bx bx-log-in" />
                        <span>Returning customer? <a href="login.html">Click here to login</a></span>
                    </div>
                    <form>
                        <div className="row">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>
                                <div className="row1">
                                    <div className="form-group">
                                        <label>Country <span className="required checkout_form_full">*</span></label>
                                        <div className="select-box">
                                            <select className="form-control">
                                                <option>United Arab Emirates</option>
                                                <option>China</option>
                                                <option>United Kingdom</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='combine_form_control'>
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address <span className="required">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Town / City <span className="required">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className='combine_form_control'>
                                        <div className="form-group">
                                            <label>State / County <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Postcode / Zip <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className='combine_form_control'>
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>


                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="create-an-account" />
                                        <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                        <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="notes" id="notes" cols={30} rows={5} placeholder="Order Notes" className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>
                                <div className="order-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="#">Long Sleeve Leopard T-Shirt</a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">$250.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="#">Causal V-Neck Soft Raglan</a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">$200.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="#">Book Divas</a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">$140.50</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-name">
                                                    <a href="#">Hanes Men's Pullover</a>
                                                </td>
                                                <td className="product-total">
                                                    <span className="subtotal-amount">$200.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-subtotal order_headings">
                                                    <span>Cart Subtotal</span>
                                                </td>
                                                <td className="order-subtotal-price order_headings">
                                                    <span className="order-subtotal-amount">$800.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-shipping order_headings">
                                                    <span>Shipping</span>
                                                </td>
                                                <td className="shipping-price order_headings">
                                                    <span>$30.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="total-price order_headings">
                                                    <span>Order Total</span>
                                                </td>
                                                <td className="product-subtotal order_headings">
                                                    <span className="subtotal-amount">$830.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="payment-box">
                                    <div className="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label><br/>
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </p>
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group" />
                                            <label htmlFor="paypal">PayPal</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                                        </p>
                                    </div>
                                    <a href="#" className="default-btn placeOrderBtn">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* end checkout */}

            {/* facilitysection */}
            <FacilitySection/>
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection/>
            {/* end socialmedia section */}
        </>
    )
}

export default Checkout
