const checkUser = async email => {
  const response = await fetch(`/api/checkuser`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email: email }),
  })
  return await response.json()
}

export default checkUser
