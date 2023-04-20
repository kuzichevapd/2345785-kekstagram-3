const listOfEffects = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview img');

function changeEffect (evt) {
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

}

listOfEffects.addEventListener('change', changeEffect);

export {changeEffect};
