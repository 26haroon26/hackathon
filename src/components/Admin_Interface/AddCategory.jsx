import React from "react";
import "./AddCategory.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import axios from "axios";

function AddCategory() {
  let { state, dispatch } = useContext(GlobalContext);
  const Categoryadded = async (e) => {
    e.preventDefault();

    let CategoryImage = document.getElementById("categoryImage");
    let CategoryName = document.getElementById("CategoryName");
    CategoryImage = CategoryImage.files[0];
    console.log(CategoryImage);
    let formData = new FormData();
    formData.append("CategoryImage", CategoryImage);
    formData.append("CategoryName", CategoryName.value);

    axios({
      method: "post",
      url: `${state.baseUrl}/addCategory`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  const UpdateFullName = async (e) => {
    e.preventDefault();

    let userFullName = document.getElementById("userFullName");

    let formData = new FormData();
    formData.append("newFullName", userFullName.value);
    formData.append("userID", state.user._id);
    console.log(userFullName.value);
    console.log(state.user._id);
    axios({
      method: "put",
      url: `${state.baseUrl}/updateUserFullName`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
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
        <p>Setting</p>
      <div className="conntainer1">
        <form className="update" onSubmit={UpdateFullName}>
          
          <img src="./Logo.png" className="image" id="userImage" alt="" />
          <div >
            {" "}
            <input
              type="text"
              className="userName"
              id="userFullName"
              placeholder={state?.user?.FullName}
            />
            <input type="submit" value={"ok"} />
          </div>
        </form>
        <form className="addProductForm" onSubmit={Categoryadded}>
          <input
            type="file"
            className="productImage"
            id="categoryImage"
            required
          />
          <div>
            <input
              type="text"
              className="itemName"
              id="CategoryName"
              required
            />
            <input className="AddProductBtn" type="submit" value={"Add"} />
          </div>
        </form>
      </div>

      <div className="AllCategories">
        <p>All Categories</p>
        <div className="category">
          <img src="./Logo.png" className="categoryImage" alt="" />
          <p>Fruits</p>
        </div>
      </div>
      <button className="logout">Logout</button>
    </div>
  );
}

export default AddCategory;
