const postFormData = async (userdata) => {
    const response = await fetch(`/api/signup` , {
    method:'POST',
    headers: {
        'Content-type': " application/json",
        Accept: "Applcation/json",
    },
    body:JSON.stringify(userdata)
})
return await response.text()
}

export default postFormData;