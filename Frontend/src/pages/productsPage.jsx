import { useEffect, useState } from "react";
import AppNavBar from "../components/navbar";
import ProductCard from "../components/productCard";
import axios from "axios";
export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log('response')
        setProducts([...response.data]);
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
      <ul>
      {products.map((product) => (
       
        <ProductCard product={product} />
        
      ))}
      </ul>
    </>
  );
}
