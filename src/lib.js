export function calculateDiffBetweenPassages(passageWithoutErrors, passageWithErrors) {
  let passageArray = passageWithoutErrors.split(' ');
  let passageWithErrorsArray = passageWithErrors.split(' ');
  let passageErrorsDiffList = [];

  passageArray.forEach((correctWord, index) => {
    let possibleErrorWord = passageWithErrorsArray[index];
    if (correctWord !== possibleErrorWord) {
      passageErrorsDiffList.push({
        correctWord: correctWord,
        errorWord: possibleErrorWord
      })
    }
  });

  return passageErrorsDiffList;
}
