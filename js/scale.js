const imagePreview = document.querySelector('.img-upload__preview img');
const scaleControl = document.querySelector('.img-upload__scale');
const scaleValue = document.querySelector('.scale__control--value');
export const DEFAULT_SCALE = 100;

const getCurrentImageScale = function () {
  return DEFAULT_SCALE * imagePreview.style.transform.replace(/[^0-9.,]+/g, '');
}

const makeSmallerImage = function () {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale > 25) {
    imagePreview.style.transform = `scale(${(currentImageScale - 25) / DEFAULT_SCALE})`;
  }
}

const makeBiggerImage  = function () {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale < 100) {
    imagePreview.style.transform = `scale(${(currentImageScale + 25) / DEFAULT_SCALE})`;
  }
}

export const updateImageScaleValue = function () {
  const currentImageScale = getCurrentImageScale();
  scaleValue.value = `${currentImageScale}%`;
}

const changeScale = function (evt) {
  if (evt.target.matches('.scale__control--smaller')) {
    makeSmallerImage();
  }
  if (evt.target.matches('.scale__control--bigger')) {
    makeBiggerImage();
  }
  updateImageScaleValue();
}

scaleControl.addEventListener('click', changeScale);

