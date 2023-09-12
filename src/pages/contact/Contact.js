import React from 'react'
import './Contact.css'

//form validation

//importing other components
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'

const Contact = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* Contact area */}
            <section className="contact-area ptb-100">
                <div className="row">
                    <div className="contact-info">
                        <h3>Here to Help</h3>
                        <p>Have a question? You may find an answer in our <a href="#">FAQs</a>. But you can also contact us.</p>
                        <ul className="contact-list">
                            <li><i className="bx bx-map" /> Location: &nbsp;<a href="#">Wonder Street, USA, New York</a></li>
                            <li><i className="bx bx-phone-call" /> Call Us:&nbsp; <a href="tel:+01321654214">+01 321 654 214</a></li>
                            <li><i className="bx bx-envelope" /> Email Us:&nbsp; <a href="mailto:hello@xton.com">hello@xton.com</a></li>
                            <li><i className="bx bx-microphone" /> Fax: &nbsp;<a href="tel:+123456789">+123456789</a></li>
                        </ul>
                        <h3>Opening Hours:</h3>
                        <ul className="opening-hours">
                            <li><span>Monday: </span> 8AM - 6AM</li>
                            <li><span>Tuesday:</span> 8AM - 6AM</li>
                            <li><span>Wednesday:</span> 8AM - 6AM</li>
                            <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                            <li><span>Sunday:</span> Closed</li>
                        </ul>
                        <h3>Follow Us:</h3>
                        <ul className="social">
                            <li><a href="#" target="_blank"><i className="bx bxl-facebook" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-twitter" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-instagram" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-linkedin" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-skype" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-pinterest-alt" /></a></li>
                            <li><a href="#" target="_blank"><i className="bx bxl-youtube" /></a></li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <h3>Drop Us A Line</h3>
                        <p>We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
                        <form id="contactForm">
                            <div className="row">

                                <div className="form-group">
                                    <label>Name <span>*</span></label>
                                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your name" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <label>Email <span>*</span></label>
                                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your email address" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number <span>*</span></label>
                                    <input type="text" name="phone_number" id="phone_number" className="form-control" required data-error="Please enter your phone number" placeholder="Your phone number" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <label>Your Message <span>*</span></label>
                                    <textarea name="message" id="message" cols={30} rows={5} required data-error="Please enter your message" className="form-control" placeholder="Write your message..." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>

                                <button type="submit" className="default-btn">Send Message</button>
                                <div id="msgSubmit" className="h3 text-center hidden" />
                                <div className="clearfix" />

                            </div>
                        </form>
                    </div>

                </div>
            </section>
            {/* end contact area */}


            {/* Map */}
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7593473566985!2d-73.78797548432667!3d41.509489596379204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd490255c9bfa7%3A0xfe099945f43b6e47!2sWonderland%20Dr%2C%20East%20Fishkill%2C%20NY%2012533%2C%20USA!5e0!3m2!1sen!2sbd!4v1622957216342!5m2!1sen!2sbd"></iframe>
            </div>
            {/* End Map  */}

            {/* facilitysection */}
            <FacilitySection />
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection />
            {/* end socialmedia section */}
        </>
    )
}

export default Contact
