import React from "react";
import { Link } from "react-router-dom";
import "./Category_banner_area.css";

import img1 from '../../assets/img/categories/img1.jpg';
import img2 from '../../assets/img/categories/img2.jpg';

export default function Category_banner_area() {
    return (
        <>
            <div className="Category_banner_area">
                <div className="single-categories-box">
                    <img src={img1} alt="img" />
                    <div className="category-content">
                        <span>Don’t Miss Today</span>
                        <h3>50% OFF</h3>
                        <Link href="products-left-sidebar-3.html" className="default-btn"> Discover Now</Link>
                    </div>
                </div>
                <div className="single-categories-box">
                    <img src={img2} alt="img" />
                    <div className="category-content">
                        <span>New Collection</span>
                        <h3>Need Now</h3>
                        <Link href="products-left-sidebar-3.html" className="default-btn">Discover Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
