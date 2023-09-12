import React from 'react'
import './Login.css'

//importing other components
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'

const Login = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>My Account</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* login area */}
            <div className='login_area'>
                <div className='login_area_left'>
                    <div className="login-content">
                        <h2>Login</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Username or email address" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="default-btn">Login</button>
                            <a href="#" className="forgot-password">Lost your password?</a>
                        </form>
                    </div>
                </div>
                <div className='login_area_right'>
                    <div className="new-customer-content">
                        <h2>New Customer</h2>
                        <span>Create A Account</span>
                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                        <a href="signup.html" className="optional-btn">Create A Account</a>
                    </div>
                </div>
            </div>
            {/* end login area*/}

            {/* facilitysection */}
            <FacilitySection />
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection />
            {/* end socialmedia section */}

        </>
    )
}

export default Login
