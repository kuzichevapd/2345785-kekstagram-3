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

function createPhotosArray(numberOfPhotos) {
  const res = [];
  let i;
  for (i = 0; i < numberOfPhotos; i++) {
    res[i] = {
      id: i,
      url: "photos/${i}.jpg",
      description: "This is your photo number ${i}",
      likes: getRandomInt(15, 200),
      comments: getRandomInt(0, 200),
    }
  }
  return res;
}

const usersPhotos = createPhotosArray(25);
