import { AppRoute } from '../const/app-route';

export type Crumb = {
  id: number;
  linkName: string;
  path: AppRoute;
}

export type DynamicCrumb = {
  id: number;
  linkName: string;
  path: string;
}

export type CrumbsData = {
  crumbs: Crumb[],
  dynamicLink?: DynamicCrumb | null,
}
