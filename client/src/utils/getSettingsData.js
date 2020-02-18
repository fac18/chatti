const getSettingData = async () => {
    const response = await fetch(`/api/settings`);
    return await response.text();
  };
  
  export default getSettingData;
  