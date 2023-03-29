import {getRandomInt} from './util';

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
    };
  }
  return res;
}

export {createPhotosArray};
