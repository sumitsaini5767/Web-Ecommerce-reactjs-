import React from 'react'
import './ProductArea.css'
import { Link } from 'react-router-dom'
import img13 from '../../assets/img/products/img13.jpg'
import img_hover13 from '../../assets/img/products/img-hover13.jpg'

export default function ProductArea() {
  return (
    <>
          <div className='product-area'> 
        
            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div> 
            
            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div>

            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div>

            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div>

            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div>

            <div className='product_area_product'>
                <div className='product_area_product_img'>
                    <div className='product_area_product_icons'>
                        <div className="product_area_product_icon1"><box-icon   name="heart" size="md" ></box-icon></div>
                        <div className="product_area_product_icon2"><box-icon  name="refresh"  size="md"></box-icon></div>
                        <div className="product_area_product_icon3"><box-icon  name="search-alt" size="md"></box-icon></div>
                    </div>
                    {/* <div className='tooltip-labels'>
                        <span className='tooltip-label1'>Add to Wishlist</span>
                        <span className='tooltip-label2'>Compare</span>
                        <span className='tooltip-label3'>quick View</span>
                    </div> */}
                    <div class="new-tag">New!</div>
                </div>
                <div className='product_area_product_detils'> 
                    <div className="products-content">
                        <span className="category">T-Shirt</span>
                        <h3>
                            <Link href="products-type-3.html">
                            Long Sleeve Leopard T-Shirt
                            </Link>
                        </h3>
                        <div className="star-rating">
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                            <box-icon name="star" size="1rem" color="#f49f0b" type="solid"></box-icon>
                        </div>
                        <div className="price">
                            <span className="old-price">$321</span>
                            <span className="new-price">$250</span>
                            <Link href="#" className="add-to-cart">
                            Add to Cart
                            </Link>
                        </div>
                        
                    </div>
                    <span className="products-discount">
                    <span> 20% OFF </span>
                    </span>
                </div>
            </div>
            
                
            
          </div>
    </>
  )
}
