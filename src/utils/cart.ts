import { GuitarType } from '../const/modal';
import { GuitarTypes } from '../types/card-data';

export const getCartName = (type: string, name: string) => `${GuitarType[type as keyof GuitarTypes]} ${name}`;
