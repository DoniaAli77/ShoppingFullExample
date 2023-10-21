import { useEffect, useState } from "react";
import AppNavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
let backend_url = "http://localhost:3000/api/v1";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cookies, removeCookies] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("cookies", cookies);
        if (!cookies.token) {
          navigate("/login");
        }
        const response = await axios.get(`${backend_url}/products`, {
          withCredentials: true,
        });
        console.log("response");
        setProducts([...response.data]);
        // if (!response.status == 200) {
        //   console.log('status from p page', response.status)
        //   removeCookies('token')
        //   navigate('/login')
        // }
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }

    fetchData();
  }, [cookies, navigate]);

  return (
    <>
      <AppNavBar />
      <ul>
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <div style={{ margin: "20px" }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}
