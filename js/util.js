function getRandomInt(numberFrom, numberTo) {
  if (numberFrom > numberTo || numberFrom < 0 || numberTo < 0) {
    return 0;
  }
  if (numberFrom === numberTo) {
    return numberFrom;
  }
  return Math.floor(numberFrom + (numberTo - numberFrom + 1) * Math.random());
}

function checkLength(str, len) {
  len = Number(len);
  str = String(str);
  if (len < 0) {
    return 0;
  }
  return str.length <= len;
}

function isEscKeyPressed(evt) {
  return evt.key === 'Escape';
}

export {getRandomInt, checkLength };
export {isEscKeyPressed};
