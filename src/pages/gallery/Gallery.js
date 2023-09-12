import React from 'react'
import './Gallery.css'


//importing images
import img1 from '../../assets/img/gallery/item1.jpg'
import img2 from '../../assets/img/main-banner1.jpg'



//importing modules
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'

const Gallery = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Gallery Masonry (3 in Row)</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}

            {/* gallery */}
            <div className='gallery_area'>
                <div className='gallery_area1'>
                    <div className="single-gallery-item">
                        <img src={img1} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="single-gallery-item">
                        <img src={img2} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="single-gallery-item">
                        <img src={img2} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='gallery_area1'>
                    <div className="single-gallery-item">
                        <img src={img2} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="single-gallery-item">
                        <img src={img1} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="single-gallery-item">
                        <img src={img2} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='gallery_area1'>
                    <div className="single-gallery-item">
                        <img src={img1} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="single-gallery-item">
                        <img src={img1} alt="image" />
                        <div className="gallery-content">
                            <div className='gallery-content_inner'>
                                <span>SHIRT</span>
                                <h3>Long Sleeve Leopard T-Shirt</h3>
                                {/* <a href="assets/img/gallery/item1.jpg" data-effect="zoomInDown" className="popup-btn" /> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* end gallery */}

            {/* facilitysection */}
            <FacilitySection />
            {/* end facilitysection */}

            {/* socialmedia section */}
            <SocialMediaSection />
            {/* end socialmedia section */}
        </>
    )
}

export default Gallery
