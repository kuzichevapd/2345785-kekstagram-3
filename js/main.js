const randomInt = function(numberFrom, numberTo) {
  if (numberFrom > numberTo || numberFrom < 0 || numberTo < 0) {
    return 0;
  }
  if (numberFrom == numberTo) {
    return numberFrom;
  }
  return Math.floor(numberFrom + (numberTo - numberFrom + 1) * Math.random());
};

const checkLength = function(str, maxLen) {
  return(str.length <= maxLen)
};
