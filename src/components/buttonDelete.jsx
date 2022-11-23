import React from "react";

const ButtonDelete = (props) => {

    const handleDelete = () => {
        props.setCounters(prevState => prevState = [])
    }

    return <>
        <button className="btn btn-primary btn-m m-2 d-flex" onClick={handleDelete}>
            Очистить</button>
    </>
}

export default ButtonDelete;