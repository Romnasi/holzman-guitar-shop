export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy/';
export const REQUEST_TIMEOUT = 5000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const enum APIRoute {
  GUITARS = '/guitars',
  COMMENTS = '/comments',
}
