import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
function AddProduct() {
  let { state, dispatch } = useContext(GlobalContext);
  const [file,setfile]=useState()
  const Productadded = async (e) => {
    e.preventDefault();

    let productImage = document.getElementById("image");
    let productName = document.getElementById("itemName");
    let productCategory = document.getElementById("itemCategory");
    let productDec = document.getElementById("ProductDesc");
    let unitName = document.getElementById("unitname");
    let unitPrice = document.getElementById("unitPrice");
    productImage = productImage.files[0];
    console.log(productImage);
    let formData = new FormData();
// console.log(file);
    formData.append("photo",productImage);
    formData.append("productName", productName.value);
    formData.append("productCategory", productCategory.value);
    formData.append("productDec", productDec.value);
    formData.append("unitName", unitName.value);
    formData.append("unitPrice", unitPrice.value);

    axios({
      method: "post",
      url: `${state.baseUrl}/product`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials:true,
    })
      .then((res) => {
       console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <div className="main">
      <h4 className="heading">Add new item</h4>
      <form className="addProductForm" onSubmit={Productadded}>
        {/* <div className="productImageDiv"> */}
        <input type="file" className="productImage" id="image" required  />
        {/* </div> */}
        <input type="text" className="itemName" id="itemName" required />
        <select name="" id="itemCategory" className="itemCategory" required>
          <option value="catagory">catagory</option>
          <option value="catagory">catagory</option>
        </select>
        <textarea
          name=""
          cols="30"
          rows="10"
          className="ProductDesc"
          id="ProductDesc"
          required
        ></textarea>
        {/* <div className="UnitName"> */}
        <p>Unit Name:</p>
        <input type="text" required id="unitname" />
        {/* </div> */}
        {/* <div className="UnitPrice"> */}
        <p>Unit Price:</p>
        <input type="number" required id="unitPrice" />
        {/* </div> */}
        <input className="AddProductBtn" type="submit" value={"Add Product"} />
      </form>
    </div>
    // <form onSubmit={Productadded} className="form">
    //   <input className="input" type="file" name="image" id="image" />
    //   <input
    //     className="input"
    //     type="text"
    //     placeholder="tweet text"
    //     name="text"
    //     id="name"
    //   />
    //   <input
    //     className="input"
    //     type="text"
    //     placeholder="tweet text"
    //     name="text"
    //     id="descr"
    //   />
    //   <input
    //     className="input"
    //     type="text"
    //     placeholder="tweet text"
    //     name="text"
    //     id="unitname"
    //   />
    //   <input
    //   className="input"
    //   type="text"
    //   placeholder="tweet text"
    //   name="text"
    //   id="category"
    // />
    //   <input
    //   className="input"
    //   type="text"
    //   placeholder="tweet text"
    //   name="text"
    //   id="unitprice"
    // />

    //   <input type="submit" className="button" value="SetPost" />
    // </form>
  );
}

export default AddProduct;
