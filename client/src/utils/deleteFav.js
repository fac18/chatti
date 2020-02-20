const deleteFav = async data => {
    console.log('im trying over here')
    const response = await fetch(`/api/deletefavourites`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  }
  
  export default deleteFav