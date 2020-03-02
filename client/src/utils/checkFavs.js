const checkFavs = async userId => {
  const response = await fetch(`/api/favourites`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'Application/json',
    },
    body: JSON.stringify({ userId: userId }),
  })
  return await response.json()
}

export default checkFavs
