import React from "react";

async function fetchDataFromGitHub(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
const githubUserUrl = "https://api.github.com/users/mairohanhoon";
const userData = await fetchDataFromGitHub(githubUserUrl);
function Github(){
    console.log(userData); // The user data as an object
    return(
        <>
        <div className=" flex flex-col justify-center items-center">
        <h1 className='text-white w-2/5 text-center bg-slate-700 p-4 m-2 text-3xl'>{userData.name}</h1>
        
        <img className="w-44" src={userData.avatar_url} alt="profile Image" /></div>
        </>
    )
}

export default Github