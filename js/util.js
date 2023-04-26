export function getRandomInt(numberFrom, numberTo) {
  if (numberFrom > numberTo || numberFrom < 0 || numberTo < 0) {
    return 0;
  }
  if (numberFrom === numberTo) {
    return numberFrom;
  }
  return Math.floor(numberFrom + (numberTo - numberFrom + 1) * Math.random());
}

export function checkLength(str, len) {
  len = Number(len);
  str = String(str);
  if (len < 0) {
    return 0;
  }
  return str.length <= len;
}

export function isEscKeyPressed(evt) {
  return evt.key === 'Escape';
}

export function addHideHandler (element, hideHandler) {
  element.addEventListener('click', hideHandler);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hideHandler();
    }
  });
};


