const imagePreview = document.querySelector('.img-upload__preview img');
const scaleControl = document.querySelector('.img-upload__scale');
const scaleValue = document.querySelector('.scale__control--value');
const DEFAULT_SCALE = 100;

function getCurrentImageScale() {
  return 100 * imagePreview.style.transform.replace(/[^0-9.,]+/g, '');
}

function makeSmallerImage() {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale > 25) {
    imagePreview.style.transform = `scale(${(currentImageScale - 25) / 100})`;
  }
}

function makeBiggerImage() {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale < 100) {
    imagePreview.style.transform = `scale(${(currentImageScale + 25) / 100})`;
  }
}

function updateImageScaleValue() {
  const currentImageScale = getCurrentImageScale();
  scaleValue.value = `${currentImageScale}%`;
}

function changeScale (evt) {
  if (evt.target.matches('.scale__control--smaller')) {
    makeSmallerImage();
  }
  if (evt.target.matches('.scale__control--bigger')) {
    makeBiggerImage();
  }
  updateImageScaleValue();
}

scaleControl.addEventListener('click', changeScale);

export {imagePreview};
export {updateImageScaleValue};
export {DEFAULT_SCALE};
