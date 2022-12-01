import React from "react";

const TotalPrice = (props) => {

    const getTotalPrice = () => {
        let sum = 0;
        props.counters.forEach((item) => {
            sum += item.value * item.price;
        })
        return sum.toFixed(1);
    }

    return <>
            <p className="m-2 fs-4">Total price: {getTotalPrice()} $</p>
    </>
}

export default TotalPrice;