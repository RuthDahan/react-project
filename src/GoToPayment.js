import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteFromCart } from './redux/action/cartActions';
import { addQty } from './redux/action/productAction';
import { reductionQtyFromCart, additionQtyToCart } from "./redux/action/cartActions";
import { BsFillTrashFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import CartDetails from './CartDetails';
function GoToPayment() {

    useEffect(() => {
        alert("Are you sure????")

    }, []);

    ///
    const cartArray = useSelector((state) => state.cartReducer);

    function Pay() {
        let sum = 0;
        cartArray.forEach(product => {
            sum += product.price * product.amount;
        });
        return sum;
    }

    function changeSum() {
        document.getElementById("sum").innerHTML = Pay();
    }


    function view(item, id) {
        document.getElementById(id).innerHTML = item.amount;
    }

    /// 

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>amount</th>


                    </tr>
                </thead>
                {cartArray.map((item, i) => (
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ width: "100px" }}></img></td>
                            <td>{item.price} * {item.amount}</td>

                            <td>

                                <div id={i}>{item.amount}</div>


                            </td>

                        </tr>

                    </tbody>
                ))}
                <tr>
                    <td id={"sum"}>Total price:{Pay()}<BsCurrencyDollar /></td>
                </tr>

            </Table>


        </div>
    )

};
export default GoToPayment;
