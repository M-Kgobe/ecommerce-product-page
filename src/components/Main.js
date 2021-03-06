import React from "react";
import product1 from '../images/image-product-1.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMinus,faPlus,faCartArrowDown} from "@fortawesome/free-solid-svg-icons"

function Main(){
    return(
        <main>
            <div className="display">
                <div className="product-display">
                    <img src={product1} alt="shoe" />
                </div>
                <ul className="product-thumbnails">
                    <li className="thumbnail-1"><img src={thumbnail1} alt="thumbnail"/></li>
                    <li className="thumbnail-2"><img src={thumbnail1} alt="thumbnail"/></li>
                    <li className="thumbnail-3"><img src={thumbnail1} alt="thumbnail"/></li>
                    <li className="thumbnail-4"><img src={thumbnail1} alt="thumbnail"/></li>
                </ul>
            </div>
            <div className="product-info">
                <div className="info">
                    <div className="info-header">
                        <h4>Sneaker Company</h4>
                        <h1>Fall Limited Edition Sneakers</h1>
                    </div>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                </div>
                <div className="cart-pricing">
                    <h3>$125.00 <span className="discount">50%</span><br/><span className="original-price">$250.00</span></h3>
                    <div className="add-to-cart">
                        <h4><span><FontAwesomeIcon icon={faMinus}/></span> 0 <span><FontAwesomeIcon icon={faPlus}/></span></h4>
                        <button><FontAwesomeIcon icon={faCartArrowDown}/> Add to Cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main