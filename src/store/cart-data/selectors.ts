import { NameSpace } from '../../const/store';
import { State } from '../../types/state';
import { GuitarsData } from '../../types/card-data';

export const getCartGuitars = (state: State): GuitarsData => state[NameSpace.CART].guitars;
