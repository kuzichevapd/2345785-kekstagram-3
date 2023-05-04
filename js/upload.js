import { isEscKeyPressed } from "./util.js";
import { updateImageScaleValue } from "./scale.js";
import { DEFAULT_SCALE } from "./scale.js";
import { changeEffect } from "./effects.js";
import { addHideHandler } from "./util.js";
import { resetEffect } from "./effects.js";

const imagePreview = document.querySelector('.img-upload__preview img');
const uploadField = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const body = document.body;
const closeButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__submit');


const onFormEscKeydown = function (evt) {
  if (isEscKeyPressed(evt)) {
    evt.preventDefault();
    closePhotoEditorForm();
  }
}

export const closePhotoEditorForm = function () {
  photoEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadField.value = '';
  closeButton.removeEventListener('click', closePhotoEditorForm);
  document.removeEventListener('keydown', onFormEscKeydown);
  cleanForm();
}

export const cleanForm = function ()  {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
  document.querySelector('.scale__control--value').value = '100%';
};

export const openPhotoEditorForm = function () {
  imagePreview.style.transform = `scale(${DEFAULT_SCALE / 100})`;
  updateImageScaleValue();
  photoEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closePhotoEditorForm);
  document.addEventListener('keydown', onFormEscKeydown);
}

uploadField.addEventListener('change', openPhotoEditorForm);

export const unblockSubmitButton = function () {
  submitButton.disabled = false;
};

export const blockSubmitButton = function () {
  submitButton.disabled = true;
};

const hideSuccessMessage = function () {
  const message = document.querySelector('.success');
  document.body.removeChild(message);
};

export const showSuccessMessage = function () {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler(document.querySelector('.success__button'), hideSuccessMessage);
};

const hideErrorMessage = function () {
  const message = document.querySelector('.error');
  document.body.removeChild(message);
};

export const showErrorMessage = function () {
  const message = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler(document.querySelector('.error__button'), hideErrorMessage);
};
