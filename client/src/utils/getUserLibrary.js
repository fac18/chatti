const getUserLibrary = async userEmail => {
  const response = await fetch(`/api/userlibrary`, {
    method: "POST",
    body: JSON.stringify({ email: userEmail }),
    headers: { "Content-Type": "application/json" }
  });
  return await response.json();
};

export default getUserLibrary;
