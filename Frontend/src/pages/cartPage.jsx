import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Link, useNavigate } from "react-router-dom";
import AppNavBar from "../components/navbar";
import axios from "axios";
export default function CartPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchData() {
      let uid = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          "http://localhost:3000/users/cart/" + uid
        );
        console.log("response");

        let t = response.data.reduce(
          (acc, product) => product.price + acc,
          0
        );
        setProducts([...response.data]);
        console.log(t);
        setTotal(t);
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function redirectTocheckout() {
    navigate("/checkout", { state: { total: total } });
  }
  return (
    <>
      <AppNavBar />

      {products.map((product) => (
        <ProductCard product={product} />
      ))}

      <p>your total amount is {total} </p>
      <button onClick={redirectTocheckout}>checkout</button>
    </>
  );
}
