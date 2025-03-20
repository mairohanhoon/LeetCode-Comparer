import { useContext, useState } from "react";
import { createContext } from "react";
import { getUserDetails } from "../api";

const CardContext = createContext(null);

export const useCard = () => {
    return useContext(CardContext);
}

export const CardProvider = (props) => {

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    const [searchUser1, setSearchUser1] = useState(null);
    const [searchUser2, setSearchUser2] = useState(null);

    const fetchData1 = async() => {
        const res = await getUserDetails(searchUser1);
        setData1(res);
    }
    const fetchData2 = async() => {
        const res = await getUserDetails(searchUser2);
        setData2(res);
    }

    return <CardContext.Provider
    value={{data1, data2, fetchData1, fetchData2, setSearchUser1, setSearchUser2, searchUser2, searchUser1}}
    >{props.children}</CardContext.Provider>
}