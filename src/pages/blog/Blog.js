import React from 'react'
import './Blog.css'


//importing images
import img1 from '../../assets/img/blog/img1.jpg'
import img2 from '../../assets/img/main-banner3.jpg'
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'


export default function Blog() {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Blog Masonry (3 in Row)</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}


            {/* blog page content */}
            <div className='blog'>
                <div className='blog1'>
                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img1} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img1} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img2} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>
                </div>

                <div className='blog1'>
                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img2} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img2} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img1} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>
                </div>

                <div className='blog1'>
                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img1} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img2} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>

                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="#">
                                <img src={img2} alt="image" />
                            </a>
                            <div class="date">
                                <span>January 29, 2021</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span class="category">Ideas</span>
                            <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                            <a href="#" class="details-btn">Read Story</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* end of blog page content */}


            {/* facility section  */}
            <FacilitySection/>
            {/* end of facility section */}


            {/* social media section */}
            <SocialMediaSection/>
            {/* end social media section */}

        </>
    )
}
