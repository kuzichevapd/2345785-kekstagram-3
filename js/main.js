import { photos } from './data.js';
import { displayPictures} from './pictures.js';
import './upload.js';
import { validateForm } from './validation.js';
import { getData } from './api.js';

validateForm();
getData(displayPictures(photos));
