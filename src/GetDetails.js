
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action/cartActions';
import { decreaseQty } from './redux/action/productAction';
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function GetDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [icon, setIcon] = useState(<BsCart3 />)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <>

      <Button variant="outline-secondary" onClick={handleShow}>
        Product Details
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton onClick={(e) => { setIcon(<BsCart3 />) }}>
          <Modal.Title>{props.product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          price: {props.product.price}<BsCurrencyDollar /><br></br>
          description: {props.product.description}<br></br>
          Quantity  in stock: {props.product.qty}<br></br>
          <img src={props.product.image} style={{ height: "120px" }} /></Modal.Body>

        <Modal.Footer>
          <Button style={{backgroundColor:"#CF9FFF"}} onClick={(e) => {
            handleClose();
            setIcon(<BsCart3 />);
          }}>
            Close
          </Button>
          <Button style={{backgroundColor:"#CF9FFF"}}  onClick={() => navigate('/cartDetails')}>cart<BsCart3/></Button>
          <Button style={{backgroundColor:"#CF9FFF"}} onClick={(e) => {
            e.preventDefault();
            let adding = dispatch(addToCart(props.product));
            if (adding !== false) dispatch(decreaseQty(props.product.id));
            setIcon(<BsFillCartCheckFill />)
          }}>
            {icon}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default GetDetails;