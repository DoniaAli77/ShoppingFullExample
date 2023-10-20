import { useContext } from "react";
import AppNavBar from "../components/navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Checkout() {
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      let uid = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          "http://localhost:3000/users/checkout/" + uid
        );
        console.log("response");
        setCheckout(response.data);
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

      <p>
        thank you for purchasing your total amount is
        <br />
        using state through navigator: {location.state.total}
        <br />
      </p>
    </>
  );
}
