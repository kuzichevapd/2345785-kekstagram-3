// точка входа

import {createPhotosArray} from './data';
import { displayPictures } from './pictures';

const usersPhotos = createPhotosArray(25);
displayPictures(usersPhotos);
