import React, { useRef, useState } from 'react'
import './SocialMediaSection.css'
import '../../../assets/css/Flaticons.css'

import $ from 'jquery-slim';

//importing images
import img3 from '../../../assets/img/instagram/img3.jpg';
import img7 from '../../../assets/img/instagram/img7.jpg';
import { Link } from 'react-router-dom';

//importing icons
import '../../../assets/css/Flaticons.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

// importing OwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function SocialMediaSection() {

    const carouselRef = useRef(null);
    const carouselRef1 = useRef(null);
  
    const handlePrev = () => {
      carouselRef.current.prev();
      carouselRef1.current.prev();

    };
  
    const handleNext = () => {
      carouselRef.current.next();
      carouselRef1.current.next();

    };

    const responsiveOptions1 = {
        0: {
            items: 6,
        },
        768: {
            items: 6,
        },
        1024: {
            items: 6,
        },
    };

    const responsiveOptions = {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },
    };

    return (
        <>
            <div className='SocialMediaSection' >
                <div className='SocialMediaSection_tiles'>
                    <OwlCarousel autoplay responsive={responsiveOptions} loop ref={carouselRef1} autoplayHoverPause>
                        <div class="items">
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>
                        <div class="items">
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>
                    </OwlCarousel>
                </div>
                <div className='SocialMediaSection_slides'>
                    <OwlCarousel autoplay responsive={responsiveOptions1} loop margin={2} slideBy={6} ref={carouselRef} autoplayHoverPause>
                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-instagram-post">
                            <img src={img3} alt="image" />
                            <Link to="#" target="_blank"><AiOutlineInstagram></AiOutlineInstagram>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>

                        <div class="single-facebook-post">
                            <img src={img7} alt="image" />
                            <Link to="#" target="_blank"><GrFacebookOption></GrFacebookOption>@xton</Link>
                        </div>
                    </OwlCarousel>
                </div>

                <div class="owl-nav2">
                    <button type="button" role="presentation" class="owl-prev2" onClick={handlePrev}>
                        <i class="flaticon-left"></i>
                    </button>
                    <button type="button" role="presentation" class="owl-next2" onClick={handleNext}>
                        <i class="flaticon-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}


