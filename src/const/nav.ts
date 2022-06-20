import { AppRoute } from './app-route';

export const navData = [
  {
    id: 0,
    linkName: 'Каталог',
    path: AppRoute.CATALOG,
  },
  {
    id: 1,
    linkName: 'Где купить?',
    path: AppRoute.NOT_FOUND,
  },
  {
    id: 2,
    linkName: 'О компании',
    path: AppRoute.NOT_FOUND,
  },
];

export const enum LogoType {
  HEADER = 'HEADER',
  FOOTER = 'FOOTER',
}
