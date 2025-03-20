import React from "react";
import { useCard } from "../context/Card";

const Input = (props) => {
    const card = useCard()
    return (
        <input
        className="p-2 m-2 bg-slate-200 rounded-sm shadow-lg" 
        placeholder={`Search User ${props.name}`}
        type="text"
        onChange={(e) => {
            if(props.name == "one"){
                return card.setSearchUser1(e.target.value)
            }
            else{
                return card.setSearchUser2(e.target.value)
            }
        }} 
        />
    )
}

export default Input;