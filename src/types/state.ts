import {RootState} from '../store/root-reducer';
import { GuitarData } from './card-data';


export type CatalogData = {
  guitars: GuitarData[],
  isDataLoaded: boolean,
};

export type State = RootState;
