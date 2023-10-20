import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  async function HandleAdd(id) {
    let uid = localStorage.getItem("userId");
    console.log(id);
    if (added) {
      try {
        let response = await axios.post(
          `http://localhost:3000/users/removeFromcart/${uid}/${id}`
        );
        setAdded(false);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    } else
      try {
        let response = await axios.post(
          `http://localhost:3000/users/addTocart/${uid}/${id}`
        );
        setAdded(true);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            quantity:{product.quantity}
            <br />
            Price:{product.price}
          </Card.Text>
          <Button variant="primary" onClick={() => HandleAdd(product._id)}>
            {added ? "remove" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
