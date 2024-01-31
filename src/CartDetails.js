import React from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteFromCart } from './redux/action/cartActions';
import { addQty } from './redux/action/productAction';
import { decreasQtyFromCart, addQtyToCart } from './redux/action/cartActions';
import { BsFillTrashFill } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import GoToPayment from ".//GoToPayment";

function CartDetails() {
    const cartArray = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    function Pay() {
        let sum = 0;
        cartArray.forEach(product => {
            sum += product.price * product.amount
        })
        return sum;
    }

    function ChangeSum() {
        document.getElementById("sum").innerHTML = Pay();
    }

    function View(item, id) {
        document.getElementById(id).innerHTML = item.amount;

    }
    return (
        <div >
            {cartArray.length === 0 ?

                <h1 id="emptyCartText">Oops,You still haven't bought any perfume!</h1>
                :

                <div id='not'>

                    <Table striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Amount </th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartArray.map((item, i) => (

                                <tr>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} style={{ height: "150px" }}></img></td>
                                    <td >{item.price}<BsCurrencyDollar /></td>

                                    <td>

                                        <button className="btn btn-info" onClick={(e) => {
                                            dispatch(decreasQtyFromCart(item.id))
                                            View(item, i);
                                            ChangeSum();
                                        }}><BsCartDash /></button>
                                        <div id={i}>{item.amount}</div>
                                        <button className="btn btn-info" onClick={(e) => {
                                            dispatch(addQtyToCart(item.id))
                                            View(item, i);
                                            ChangeSum();
                                        }}><BsCartPlus /></button>
                                    </td>

                                    <td><Button variant="secondary" onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(deleteFromCart(item.id))
                                        dispatch(addQty(item.id, item.amount))
                                    }} >Delete<BsFillTrashFill /></Button></td>
                                </tr>

                            ))}


                        </tbody>


                    </Table>
                    <button onClick={() => navigate('/GoToPayment')
                    }><BsCreditCard /><br />Final pay</button>
                </div>

            }
        </div>
    )

};
export default CartDetails;

