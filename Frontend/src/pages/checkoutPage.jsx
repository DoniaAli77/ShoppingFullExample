import { useContext } from "react";
import AppNavBar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
let backend_url = "http://localhost:3000/api/v1";

import axios from "axios";
export default function Checkout() {
  const location = useLocation();
  const [cookies, removeCookies] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let uid = localStorage.getItem("userId");
      try {
        console.log("cookies", cookies);
        if (!cookies.token) {
          navigate("/login");
        }
        const response = await axios.get(
          `${backend_url}/users/checkout/${uid}`,
          { withCredentials: true }
        );
        console.log("response");
        // setCheckout(response.data);
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <AppNavBar />
      <div style={{ textAlign: "center", color: "white" ,margin:'30px',fontSize:'25px'}}>
      <p>
        thank you for purchasing your total amount is
        <br />
        using state through navigator: {location.state.total}
        <br />
      </p>
      </div>
    
    </>
  );
}
