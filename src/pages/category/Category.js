import React from 'react'
import './Category.css'
import CategoryArea from '../../component/category-area/CategoryArea'
import FacilitySection from '../../component/sliders/facility-section/FacilitySection'
import SocialMediaSection from '../../component/sliders/social-media-section/SocialMediaSection'

//importing modules


const Category = () => {
    return (
        <>
            {/* Start Page Title  */}
            <div class="NavigationSection">
                <div class="NavigationSection_title">
                    <h2>Categories</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li id='divider'>|</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            {/* End Page Title  */}


            {/* CategoryArea */}
            <CategoryArea/>
            {/* end CategoryArea */}


            {/* FacilitySection */}
            <FacilitySection/>
            {/* end FacilitySection */}

            {/* SocialMediaSection */}
            <SocialMediaSection/>
            {/* end SocialMediaSection */}
        </>
    )
}

export default Category
