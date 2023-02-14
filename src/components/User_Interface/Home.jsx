import React from 'react'
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/Context";

function Home() {
let { state, dispatch } = useContext(GlobalContext);
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    let response = await axios.post(
      `${state.baseUrl}/login`,
      {
        Email: data.get("Email"),
        Password: data.get("Password"),
      },
      {
        withCredentials: true,
      }
    );


  } catch (err) {
    console.log("error", err);

  }
};
    return (
    <div>Home</div>
  )
}

export default Home