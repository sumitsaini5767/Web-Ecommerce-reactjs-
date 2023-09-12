import React from 'react'
import './CategoryArea.css'


//importing images
import img1 from '../../assets/img/categories/img5.jpg'
import img2 from '../../assets/img/categories/img7.jpg'
import img3 from '../../assets/img/categories/img8.jpg'



const CategoryArea = () => {
    return (
        <>
            <div className='CategoryArea'>
                <div className='CategoryArea_left CategoryArea_divs'>
                    <img src={img1}></img>
                    <div className='content'>
                        <h3>New Collections!</h3>
                    </div>
                </div>
                <div className='CategoryArea_right'>
                    <div className='CategoryArea_right_up'>
                        <div className='CategoryArea_right_up1 CategoryArea_divs'>
                            <img src={img2}></img>
                            <div className='content'>
                                <h3>Our Popular Products</h3>
                            </div>
                        </div>
                        <div className='CategoryArea_right_up2 CategoryArea_divs'>
                            <img src={img2}></img>
                            <div className='content'>
                                <h3>Hot Trending Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className='CategoryArea_right_down CategoryArea_divs'>
                        <img src={img3}></img>
                        <div className='content'>
                            <h3>Winter Collections!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryArea
