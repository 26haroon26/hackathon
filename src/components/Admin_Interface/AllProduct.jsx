import React from "react";
import  './AllProduct.css'
// import  Bottomnavigation from '../Common-Screen/Bottomnavigation'
function AllProduct() {
  return (
    <div className="main">
      <h2 className="heading">All product</h2>
      <div className="productList">
      <div className="product">
          <img src="./logo.png"  className='productimage' alt="" />
          <div className="text">
            <p>Apple</p>
            <p>1.kg</p>
          </div>
          <p>$5.6</p>
        </div> <div className="product">
          <img src="./logo.png"  className='productimage' alt="" />
          <div className="text">
            <p>Apple</p>
            <p>1.kg</p>
          </div>
          <p>$5.6</p>
        </div> <div className="product">
          <img src="./logo.png"  className='productimage' alt="" />
          <div className="text">
            <p>Apple</p>
            <p>1.kg</p>
          </div>
          <p>$5.6</p>
        </div>
      </div>
      {/* <bottomnavigation/> */}
    </div>
  );
}

export default AllProduct;
