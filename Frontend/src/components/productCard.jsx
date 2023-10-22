import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
let backend_url = "http://localhost:3000/api/v1";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  let role = localStorage.getItem("role");
  let location = useLocation();

  async function HandleAdd(id) {
    let uid = localStorage.getItem("userId");
    console.log(id);
    if (added) {
      try {
        let response = await axios.put(
          `${backend_url}/users/removeFromcart/${uid}/${id}`,
          null,
          { withCredentials: true }
        );
        setAdded(false);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    } else
      try {
        let response = await axios.put(
          `${backend_url}/users/addTocart/${uid}/${id}`,
          null,
          { withCredentials: true }
        );
        setAdded(true);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {role == "admin" ? (
              <>
                quantity:{product.quantity}
                <br />
              </>
            ) : (
              <></>
            )}
            Price:{product.price}
          </Card.Text>
          {location.pathname == "/cart" ? (
            <></>
          ) : (
            <Button variant="primary" onClick={() => HandleAdd(product._id)}>
              {added ? "remove" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
