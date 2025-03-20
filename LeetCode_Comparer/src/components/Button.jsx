import React from "react";

const Button = (props) => {
    return (
        <button
        className="p-2 m-2 bg-blue-500 shadow-lg rounded-lg text-white"
        onClick={props.onClick}
        >Search</button>
    )
}

export default Button;