import {getRandomInt} from './util.js';

const descriptions = [
  'круто',
  'классно',
  'отлично',
  'фантастика'
];

let photos = [];
let i;
for (i = 1; i <= 25; i++) {
  photos.push ({
    id: i,
    url: `photos/${i}.jpg`,
    description: descriptions[getRandomInt(0, descriptions.length - 1)],
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200),
  });
}

export {photos};
