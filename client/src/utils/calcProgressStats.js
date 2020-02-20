const calcProgressStats = userLibrary => {
  const activitiesCompleted = userLibrary.length
  const minutesCompleted = userLibrary.reduce(
    (accum, activity) => accum + activity.duration,
    0
  )
  return {
    activitiesCompleted,
    minutesCompleted,
  }
}

export default calcProgressStats
