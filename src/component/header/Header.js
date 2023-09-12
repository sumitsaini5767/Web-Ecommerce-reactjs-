import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import 'boxicons';
import logo from '../../assets/img/logo.png';

export default function Header() {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("stickynav").style.top = "0";
//     } else {
//       document.getElementById("stickynav").style.top = "-100%";
//     }
//     prevScrollpos = currentScrollPos;
// }


  return (
    <>
      {/* Start Top Header Area */}
      <header>
        <div className="top-header">
          <div className='top-header-left'>
            <ul className='top-header-left-list'>
              <li>Xton@gmail.com</li>
              <li style={{color:'#636161', }} >|</li>
              <li>Call:<Link to="tel:+013214567845">+01 321 654 214</Link></li>
            </ul>
          </div>

          <div className='top-header-right'>
            <ul className='top-header-right-list'>
            
              <li><span> <box-icon type="solid" color="#d0d0d0" size="1.03vw" name="user"></box-icon></span> <span><NavLink to="">My Account</NavLink></span></li>
              <li style={{color:'#636161', }} >|</li>
              <li><span><box-icon color="#d0d0d0" size="1.03vw" name="heart"></box-icon></span> <span><NavLink to="">Wishlist</NavLink></span></li>
              <li style={{color:'#636161', }} >|</li>
              <li><span><box-icon color="#d0d0d0" size="1.03vw" name="shuffle"></box-icon></span> <span><NavLink to="">Compare</NavLink></span></li>
              <li style={{color:'#636161', }} >|</li>
              <li><span><box-icon color="#d0d0d0" size="1.03vw" name="log-in"></box-icon></span> <span><NavLink to="">Login</NavLink></span></li>
            </ul>
          </div>
        </div>
        {/* End Top Header Area */}

        {/* Start Navbar Area */}
        <div className='navbar'>
          <div className="logo">
                    <Link href="index.html">
                      <img src={logo} alt='logo'/>
                      {/* <img src="assets/img/white-logo.png" className="white-logo" alt="logo" /> */}
                    </Link>
          </div>

                <div className="right-sec">
                  <ul className="nav">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Shop</NavLink></li>
                    <li><NavLink>Shop by category</NavLink></li>
                    <li><NavLink>Women's</NavLink></li>
                    <li><NavLink>Men's</NavLink></li>
                    <li><NavLink>Blog</NavLink></li>
                  </ul>
                </div>
                <div className="others-option">
                    <div className="option-item">
                        <box-icon color="black" size="1.6vw" name="search-alt"></box-icon>
                    </div>
                    <div className="option-item">                      
                        <box-icon color="black" size="1.6vw" name="shopping-bag"></box-icon>
                    </div>
                    <div className="option-item burger-menu">
                        <span class="top-bar"></span>
                        <span class="middle-bar"></span>
                        <span class="bottom-bar"></span>
                    </div>
                </div>
        </div>
        {/* End Navbar Area */}
        {/* Start Sticky Navbar Area */}
        {/* <div className="navbar-area header-sticky" id="stickynav">
          <div className="xton-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo.png" className="main-logo" alt="logo" />
                  <img src="assets/img/white-logo.png" className="white-logo" alt="logo" />
                </a>
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav navbar1">
                    <li className="nav-item"><a href="home.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item megamenu"><a href="shop.html" className="nav-link">Shop</a>
                    </li>
                    <li className="nav-item megamenu"><a href="categories.html" className="nav-link">Shop by category</a>
                    </li>
                    <li className="nav-item megamenu"><a href="shop.html" className="nav-link">Women's</a>
                    </li>
                    <li className="nav-item megamenu"><a href="shop.html" className="nav-link">Men's</a>
                    </li>
                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a>
                    </li>
                  </ul>
                  <div className="others-option">
                    <div className="option-item">
                      <div className="search-btn-box">
                        <i className="search-btn bx bx-search-alt" />
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="cart-btn">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i className="bx bx-shopping-bag" /><span>0</span></Link>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                        <span className="top-bar" />
                        <span className="middle-bar" />
                        <span className="bottom-bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div> */}
        {/* End Header Area */}
        {/* Start Search Overlay */}
        {/* <div className="search-overlay">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="search-overlay-layer" />
              <div className="search-overlay-layer" />
              <div className="search-overlay-layer" />
              <div className="search-overlay-close">
                <span className="search-overlay-close-line" />
                <span className="search-overlay-close-line" />
              </div>
              <div className="search-overlay-form">
                <form>
                  <input type="text" className="input-search" placeholder="Search here..." />
                  <button type="submit"><i className="bx bx-search-alt" /></button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </header>
      {/* End Search Overlay */}
    </>
  )
}
