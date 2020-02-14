const getUserData = async userEmail => {
  const response = await fetch(`/api/userdata`, {
    method: "POST",
    body: JSON.stringify({ email: userEmail }),
    headers: { "Content-Type": "application/json" }
  });
  return await response.json();
};

export default getUserData;
