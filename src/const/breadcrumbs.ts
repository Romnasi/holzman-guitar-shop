import { AppRoute } from './app-route';

export const catalogBreadcrumbs = [
  {
    id: 0,
    linkName: 'Главная',
    path: AppRoute.MAIN,
  },
  {
    id: 1,
    linkName: 'Каталог',
    path: AppRoute.CATALOG,
  },
];

export const cartBreadcrumbs = [
  {
    id: 0,
    linkName: 'Главная',
    path: AppRoute.MAIN,
  },
  {
    id: 1,
    linkName: 'Каталог',
    path: AppRoute.CATALOG,
  },
  {
    id: 2,
    linkName: 'Корзина',
    path: AppRoute.CART,
  },
];
