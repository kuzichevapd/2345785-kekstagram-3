const listOfEffects = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview img');
let previousEffect = 'none';

export const changeEffect = function (evt) {
  if (evt.target.matches('#effect-none')) {
    imagePreview.className = 'effects__preview--none';
  }
  if (evt.target.matches('#effect-chrome')) {
    imagePreview.className = 'effects__preview--chrome';
  }
  if (evt.target.matches('#effect-sepia')) {
    imagePreview.className = 'effects__preview--sepia';
  }
  if (evt.target.matches('#effect-marvin')) {
    imagePreview.className = 'effects__preview--marvin';
  }
  if (evt.target.matches('#effect-phobos')) {
    imagePreview.className = 'effects__preview--phobos';
  }
  if (evt.target.matches('#effect-heat')) {
    imagePreview.className = 'effects__preview--heat';
  }
  previousEffect = evt.target.value;
}

export const resetEffect = function () {
  imagePreview.classList.remove(`effects__preview--${previousEffect}`);
  imagePreview.style.filter = '';
  picture.style.scale = 1;
  previousEffect = undefined;
  document.querySelector('#effect-none').checked = true;
};

listOfEffects.addEventListener('change', changeEffect);

