export const getRandom = (maxNumber: number) => {
  var randomNumbers = "";
  for (let i = 0; i <= 3; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber).toString();
    randomNumbers += randomNumber;
  }
  return randomNumbers;
};
