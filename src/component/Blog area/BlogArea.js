import React from "react";
import "./BlogArea.css";

//importing imges
import img1 from "../../assets/img/blog/img1.jpg";

export default function BlogArea() {
    return (
        <>
            <div className="main_BlogArea">
                <div class="section-title">
                    <span class="sub-title">Recent Story</span>
                    <h2>From The Xton Blog</h2>
                </div>
                <div className="BlogArea">
                    <div className="BlogArea_blog">
                        <div className="BlogArea_img">
                            <img src={img1} />
                        </div>
                        <div className="BlogArea_content">
                            <span class="category">Ideas</span>
                            <h3>
                                <a href="single-blog-1.html">
                                    The #1 eCommerce blog to grow your business
                                </a>
                            </h3>
                            <a href="single-blog-1.html" class="details-btn">
                                Read Story
                            </a>
                        </div>
                    </div>

                    <div className="BlogArea_blog">
                        <div className="BlogArea_img">
                            <img src={img1} />
                        </div>
                        <div className="BlogArea_content">
                            <span class="category">Ideas</span>
                            <h3>
                                <a href="single-blog-1.html">
                                    The #1 eCommerce blog to grow your business
                                </a>
                            </h3>
                            <a href="single-blog-1.html" class="details-btn">
                                Read Story
                            </a>
                        </div>
                    </div>

                    <div className="BlogArea_blog">
                        <div className="BlogArea_img">
                            <img src={img1} />
                        </div>
                        <div className="BlogArea_content">
                            <span class="category">Ideas</span>
                            <h3>
                                <a href="single-blog-1.html">
                                    The #1 eCommerce blog to grow your business
                                </a>
                            </h3>
                            <a href="single-blog-1.html" class="details-btn">
                                Read Story
                            </a>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </>
    );
}
