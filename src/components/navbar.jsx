import React from "react";

const Navbar = (props) => {

    const handleSum = () => {
        let sum = 0;
        props.counters.forEach((count) => {
            sum = sum + count.value; 
        })
        return sum;
    }


    return <>
                <div className="d-flex flex-row mb-2 justify-content-between bg-secondary bg-opacity-10 p-4 w-75">
                    <h5 className="bd-highlight">Navbar</h5>
                    <div className="position-relative">
                        <h5 className="bd-highlight">Корзина</h5>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {handleSum()}
                        <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                </div>
    </>
}

export default Navbar;