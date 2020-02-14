const postLogIn = async userdata => {
  const response = await fetch(`/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userdata)
  });
  return await response.text();
};

export default postLogIn;
