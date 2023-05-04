import '../pristine/pristine.min.js';
import {closePhotoEditorForm, openPhotoEditorForm,
  showSuccessMessage, showErrorMessage,
   blockSubmitButton, unblockSubmitButton} from './upload.js';
import {postData} from './api.js';


const image = document.querySelector('.img-upload__preview > img');
const form = document.querySelector('#upload-select-image');

export const validateForm = function () {
  form.querySelector('#upload-file').addEventListener('change', (evt) => {
    image.src = window.URL.createObjectURL(evt.target.files[0]);
    openPhotoEditorForm();
  });
  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    successClass: 'form--valid',
    errorClass: 'form--invalid',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'form__error',
    errorTextTag: 'span'
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      postData(new FormData(evt.target),
      showSuccessMessage,
      showErrorMessage,
        () => {unblockSubmitButton(); closePhotoEditorForm();}
      );
    }
  });
};
