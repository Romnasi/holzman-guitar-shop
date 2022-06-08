import {RootState} from '../store/root-reducer';
import { CardDataProps } from './card-data';


export type CatalogData = {
  guitars: CardDataProps[],
  isDataLoaded: boolean,
};

export type State = RootState;
