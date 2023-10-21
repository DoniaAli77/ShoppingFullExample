import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Link, useNavigate } from "react-router-dom";
import AppNavBar from "../components/navbar";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
let backend_url = "http://localhost:3000/api/v1";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [cookies, removeCookies] = useCookies([]);
  useEffect(() => {
    async function fetchData() {
      let uid = localStorage.getItem("userId");
      try {
        console.log('cookies',cookies)
        if (!cookies.token) {
          navigate("/login");
        }
        const response = await axios.get(
          `${backend_url}/users/cart/${uid}`,{withCredentials:true}
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
  }, [cookies,navigate]);

  function redirectTocheckout() {
    navigate("/checkout", { state: { total: total } });
  }
  return (
    <>
      <AppNavBar />

      <div style={{ display: 'flex' }}>
          {products.map((product) => (
            <div style={{ margin: "20px" }}>
              <ProductCard product={product} />
            </div>
          ))}
          
        </div>
<div style={{margin:"30px"}}>
<p style={{color:'white'}}>your total amount is {total} </p>
      <Button onClick={redirectTocheckout}>checkout</Button>
</div>
    
    </>
  );
}
