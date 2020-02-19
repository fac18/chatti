const personaliseInstructions = (input, userData) => {
  return input
    .replace(/\(name\)/g, userData.childName)
    .replace(
      /\(possessivepronoun\)/g,
      userData.childGender === 'male'
        ? 'his'
        : userData.childGender === 'female'
        ? 'her'
        : 'their'
    )
    .replace(
      /\(subjectpronoun\)/g,
      userData.childGender === 'male'
        ? 'he'
        : userData.childGender === 'female'
        ? 'she'
        : 'they'
    )
    .replace(
      /\(objectpronoun\)/g,
      userData.childGender === 'male'
        ? 'him'
        : userData.childGender === 'female'
        ? 'her'
        : 'them'
    )
}

export default personaliseInstructions
