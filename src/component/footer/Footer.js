import React from 'react'
import './Footer.css'


// importing icons
import '../../assets/css/Flaticons.css'
import {HiOutlineLocationMarker, HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'


//importing images
import visa_img from '../../assets/img/payment/visa.png';
import mastercard_img from '../../assets/img/payment/mastercard.png';
import mastercard2_img from '../../assets/img/payment/mastercard2.png';
import visa2_img from '../../assets/img/payment/visa2.png';
import expresscard_img from '../../assets/img/payment/expresscard.png';

import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <>
      {/* Start Footer Area */}
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 customalign">
              <div className="single-footer-widget">
                <h3>About The Store</h3>
                <div className="about-the-store">
                  <p>One of the most popular on the web is shopping.</p>
                  <ul className="footer-contact-info">
                    <li><HiOutlineLocationMarker/> <Link href="#" target="_blank">Wonder Street, USA, New York</Link></li>
                    <li><BiPhoneCall /> <Link href="tel:+01321654214">+01 321 654 214</Link></li>
                    <li><HiOutlineMail/> <Link href="mailto:hello@xton.com">hello@xton.com</Link></li>
                  </ul>
                </div>
                <ul className="social-link">
                  <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-facebook" /></Link></li>
                  <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-twitter" /></Link></li>
                  <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-instagram" /></Link></li>
                  <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-linkedin" /></Link></li>
                  <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-pinterest-alt" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 customalign">
              <div className="single-footer-widget pl-4 ">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li><Link href="home.html">Home</Link></li>
                  <li><Link href="products-left-sidebar.html">Shop Now!</Link></li>
                  <li><Link href="categories.html">Shop by category</Link></li>
                  <li><Link href="products-left-sidebar-2.html">Woman's</Link></li>
                  <li><Link href="products-left-sidebar-1.html">Men's</Link></li>
                  <li><Link href="blog.html">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 customalign">
              <div className="single-footer-widget" id='other_links'>
                <h3>Other Links</h3>
                <ul className="customer-support">
                  <li><Link href="login.html">My Account</Link></li>
                  <li><Link href="checkout.html">Checkout</Link></li>
                  <li><Link href="cart.html">Cart</Link></li>
                  <li><Link href="customer-service.html">Customer Services</Link></li>
                  <li><Link href="faqs.html">FAQ's</Link></li>
                  <li><Link href="track-order.html">Order Tracking</Link></li>
                  <li><Link href="about.html">About Us</Link></li>
                  <li><Link href="contact.html">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 customalign">
              <div className="single-footer-widget" id='News_css'>
                <h3>Newsletter</h3>
                <div className="footer-newsletter-box">
                  <p>To get the latest news and latest updates from us.</p>
                  <form className="newsletter-form" data-bs-toggle="validator">
                    <label>Your E-mail Address:</label>
                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                    <button type="submit">Subscribe</button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>© Xton is Proudly Owned by <Link href="https://hibootstrap.com/" target="_blank">Webreate</Link></p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="payment-types">
                  <li><Link href="#" target="_blank"><img src={visa_img} /></Link></li>
                  <li><Link href="#" target="_blank"><img src={mastercard_img} alt="image" /></Link></li>
                  <li><Link href="#" target="_blank"><img src={mastercard2_img} alt="image" /></Link></li>
                  <li><Link href="#" target="_blank"><img src={visa2_img} alt="image" /></Link></li>
                  <li><Link href="#" target="_blank"><img src={expresscard_img} alt="image" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </footer>
      {/* End Footer Area */}
    </>
  )
}
