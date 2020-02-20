const postFavActivity = async userdata => {
  const response = await fetch(`/api/activity`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'Application/json',
    },
    body: JSON.stringify(userdata),
  })
  return await response.json()
}

export default postFavActivity
