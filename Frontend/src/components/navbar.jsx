import { Link, Route, Routes } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export default function AppNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Nav>
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/products">products</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/cart">shopping cart</Link>
      </Nav.Item>
    </Nav>

    </Container>
    </Navbar>
  );
}
