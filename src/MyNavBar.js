import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Shop from './Shop';
import About from './About';
import CartDetails from './CartDetails';
import { BsShopWindow } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";



function Color() {
  const navigate = useNavigate();
  return (
    <>
      <br />
      <Navbar style={{backgroundColor:"#CF9FFF"}}>
        <Container>
          <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("./")}></Nav.Link>
            <Nav.Link onClick={() => navigate("./Shop")}><BsShopWindow/> Shop</Nav.Link>
            <Nav.Link onClick={() => { navigate("./About") }}>About <BsBookmarkHeart/></Nav.Link>
            <Nav.Link onClick={() => { navigate("./CartDetails") }}> CartDetails<BsCart3/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Color;