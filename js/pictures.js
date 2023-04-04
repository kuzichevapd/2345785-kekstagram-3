const pictureTemplate = document.querySlector('#picture');

function generatePicture(object) {
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


function displayPictures(objects) {
  const fragment = new DocumentFragment();
  picturesData.forEach((object) => {
    fragment.append(generatePicture(objects));
  });
  document.querySelector('.pictures').append(fragment);
}

export { displayPictures }


