const deleteFav = async data => {
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
