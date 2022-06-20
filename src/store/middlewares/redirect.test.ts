import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import {redirectToRoute} from '../action';
import {State} from '../../types/state';
import { AppRoute } from '../../const/app-route';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /catalog', () => {
    store.dispatch(redirectToRoute(AppRoute.CATALOG));
    expect(fakeHistory.location.pathname).toBe(AppRoute.CATALOG);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.CATALOG),
    ]);
  });

  it('should not to be redirect /lose because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: '/lose'});
    expect(fakeHistory.location.pathname).not.toBe('/lose');
  });
});
