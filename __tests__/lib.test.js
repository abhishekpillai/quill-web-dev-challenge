import { calculateDiffBetweenPassages } from '../src/lib'

it("returns list of errors in second passage when compared to first one", () => {
  const passageWithoutErrors = "hello, how are you?";
  const passageWithErrors = "hello how are you?";

  const expectedResult = [{
    correctWord: "hello,",
    errorWord: "hello"
  }]

  const result = calculateDiffBetweenPassages(passageWithoutErrors, passageWithErrors);

  expect(result).toEqual(expectedResult);
});
