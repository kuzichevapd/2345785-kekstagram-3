// точка входа

import {createPhotosArray} from './data';
import { displayPictures} from './pictures.js';

const usersPhotos = createPhotosArray(25);
displayPictures(usersPhotos);
