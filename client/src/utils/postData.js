 const postLogIn = async (userdata) => {
    const response = await fetch(`/api/login` , {
    method:'POST',
    headers: {
        'Content-type': " application/json",
        Accept: "Applcation/json",
    },
    body:JSON.stringify(userdata)
})
// return await response.json()
}

export default postLogIn;