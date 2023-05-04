const pictureTemplate = document.querySelector('#picture');

const generatePicture = function (object) {
  const picture = document.createElement('div');
  const pictureClone = pictureTemplate.content.cloneNode(true);
  picture.classList.add('picture');
  picture.append(pictureClone);

  const pictureImage = picture.querySelector('.picture__img');
  const pictureComments = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');

  pictureImage.src = object.url;
  pictureImage.alt = object.description;
  pictureComments.textContent = object.comments;
  pictureLikes.textContent = object.likes;

  return picture;
}


export const displayPictures = function (objects) {
  const fragment = new DocumentFragment();
  for (let i = 0; i < objects.length; i++) {
    fragment.append(generatePicture(objects[i]));
  }
  document.querySelector('.pictures').append(fragment);
}
