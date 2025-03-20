const baseUrl = "https://alfa-leetcode-api.onrender.com/"
// const baseUrl = "https://api.github.com/users/"
export const getUserDetails = async (username) => {
    const res1 = await fetch(`${baseUrl}${username}`)
    const res_obj1 = await res1.json();
    const res2 = await fetch(`${baseUrl}userprofile/${username}`)
    // const res2 = await fetch(`${baseUrl}${username}`)
    const res_obj2 = await res2.json();
    return {res_obj1, res_obj2};
}