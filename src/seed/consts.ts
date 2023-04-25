import { v4 as uuidv4 } from 'uuid';

export const SETTING_APP_ID = `${process.env.APP_NAME}-setting-app-id`;

export const USER_DEFAULT_ID = process.env.USER_ID;

export const DATA_TYPE_STATUS_ACTIVE_ID = uuidv4();

export const DATA_TYPE_TEXT_ID = 'data-type-type-text';
export const DATA_TYPE_INT_ID = 'data-type-type-integer';
export const DATA_TYPE_FLOAT_ID = 'data-type-type-float';
export const DATA_TYPE_BOOL_ID = 'data-type-type-boolean';
export const DATA_TYPE_ENUM_ID = 'data-type-type-enum';
export const DATA_TYPE_ENUM_TYPE_ID = 'data-type-type-enum-type';
export const DATA_TYPE_FILE_UPLOAD_ID = 'data-type-type-file-upload';
export const DATA_TYPE_FILE_SELECT_ID = 'data-type-type-file-select';
export const DATA_TYPE_FILE_SELECT_CV_ID = 'data-type-type-file-cv';
export const DATA_TYPE_FILE_SELECT_CV_LENSA_ID = 'data-type-type-file-cv-lensa';
export const DATA_TYPE_FILE_AVATARS_ID = 'data-type-type-file-avatar';

export const DATA_TYPE_ENUM_OPTION_NAME_ID = uuidv4();
export const DATA_TYPE_ENUM_OPTION_URL_ID = uuidv4();
export const DATA_TYPE_OPTION_SYSTEM_OPTION_ID = uuidv4();
