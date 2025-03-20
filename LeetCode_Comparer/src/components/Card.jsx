import React from "react";
import { useCard } from "../context/Card";

const Card = (props)=>{
    const user = useCard();
    const data = (props.value == "one") ? user.data1 : user.data2
    return(
        <div>
            <p>{data?.res_obj1?.name}</p>
            <p>Easy: {data?.res_obj2?.easySolved} / {data?.res_obj2?.totalEasy}</p>
            <p>Medium: {data?.res_obj2?.mediumSolved} / {data?.res_obj2?.totalMedium}</p>
            <p>Hard: {data?.res_obj2?.hardSolved} / {data?.res_obj2?.totalHard}</p>
        </div>
    )
}

export default Card;