const changeToDbFormat = data => {
  data.weekly_goal = data.weekly_goal.split(" ")[0];
  const timeArray = data.new_ideas_time.split("");
  const amPmIndication = timeArray.splice(timeArray.length - 2, 2).join("");
  const dbFriendlyTime =
    (amPmIndication === "am" ? timeArray : Number(timeArray) + 12) + ":00:00";
  data.new_ideas_time = dbFriendlyTime;
  console.log(data);
  return data;
};

export default changeToDbFormat;
