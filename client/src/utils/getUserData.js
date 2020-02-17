const getUserData = async () => {
  const response = await fetch(`/api/userdata`);
  return await response.json();
};

export default getUserData;
