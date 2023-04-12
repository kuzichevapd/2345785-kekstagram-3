import { isEscKeyPressed } from "./util.js";

const uploadField = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const body = document.body;
const closeButton = document.querySelector('#upload-cancel');

function onFormEscKeydown(evt) {
  if (isEscKeyPressed(evt)) {
    evt.preventDefault();
    closePhotoEditorForm();
  }
}

function closePhotoEditorForm() {
  photoEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadField.value = '';
  closeButton.removeEventListener('click', closePhotoEditorForm);
  document.removeEventListener('keydown', onFormEscKeydown);
}

function openPhotoEditorForm() {
  photoEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closePhotoEditorForm);
  document.addEventListener('keydown', onFormEscKeydown);
}

uploadField.addEventListener('change', openPhotoEditorForm);
