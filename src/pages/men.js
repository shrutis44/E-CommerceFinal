import React from 'react'

const Men = () => {
  return (
    <div className="Ryans">
            <div className="head">
                <h1>Ryan <span>Men's Wear</span></h1>
            </div>
            <div className="card">
                <div className="crd">
                    <img src="/men/men1.jpeg" alt="" onclick="show(this)"/>
                    <div className="crdText">
                        <h2>Cotton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                 </div>

                 <div className="crd">
                    <img src="/men/men2.jpeg" alt="" onclick="show(this)"/>
                    <div className="crdText">
                        <h2>Cotton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        </br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                 </div>
                 <div class="crd">
                    <img src="/men/men3.jpeg" alt="" onclick="show(this)"/>
                    <div class="crdText">
                        <h2>Cotton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                 </div>
                </div>
                <div class="cards">
                    <div class="crd">
                        <img src="/men/men4.jpeg" alt="" onclick="show(this)"/>
                        <div class="crdText">
                            <h2>Cutton Trending Shirt's</h2>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                            <button>Buy Now</button>
                            <button onclick="addCart()">Add to Cart</button>
                        </div>
                     </div>
    
                     <div className="crd">
                        <img src="/men/men5.webp" alt="" onclick="show(this)"/>
                        <div className="crdText">
                            <h2>Cutton Trending Shirt's</h2>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                            <button>Buy Now</button>
                            <button onclick="addCart()">Add to Cart</button>
                        </div>
                     </div>
                     <div className="crd">
                        <img src="/men/men6.jpg" alt="" onclick="show(this)"/>
                        <div className="crdText">
                            <h2>Cutton Trending Shirt's</h2>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                            <button>Buy Now</button>
                            <button onclick="addCart()">Add to Cart</button>
                        </div>
                     </div>
                    
                </div>
            </div>
  )
}

export default Men;
