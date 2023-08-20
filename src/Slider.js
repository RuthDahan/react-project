import React from "react";
import { useState } from "react";

function Slider(props) {
    const [index, setIndex] = useState(0);
    const numOfChildren = React.Children.count(props.children);
    const children = React.Children.toArray(props.children);


    function a(index) {
        return (
            children[index]
        )

    }
    return (
        <>
            <div>
                <button className="" onClick={() => (setIndex(index - 1))} disabled={index === 0}>&lt; Previous </button>
                <button className="" onClick={() => (setIndex(index + 1))} disabled={index === (numOfChildren - 1)}> Next &gt;</button>

            </div>




            {a(index)}
        </>
    )

} export default Slider;
