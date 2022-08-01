import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { State } from '../types/state';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { fetchCommentsAction, fetchGuitarsAction, postCommentAction, postCouponAction } from './api-actions';
import { APIRoute, HTTP_CODE } from '../const/api';
import { mockGuitars, mockComments } from '../const/mock';
import { loadGuitars, loadComments, addComment, addDiscount, changeCouponStatus } from './action';
import { ReviewData } from '../types/review';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch Load_Guitars when GET /guitars', async () => {
    mockAPI
      .onGet(APIRoute.GUITARS)
      .reply(HTTP_CODE.OK, mockGuitars);

    const store = mockStore();
    await store.dispatch(fetchGuitarsAction());

    expect(store.getActions()).toEqual([
      loadGuitars(mockGuitars),
    ]);
  });

  it('should dispatch Load_Comments when GET /comments', async () => {
    mockAPI
      .onGet(APIRoute.COMMENTS)
      .reply(HTTP_CODE.OK, mockComments);

    const store = mockStore();
    await store.dispatch(fetchCommentsAction());

    expect(store.getActions()).toEqual([
      loadComments(mockComments),
    ]);
  });

  it('should dispatch add Comment when POST /comments', async () => {
    const fakeReview: ReviewData = {
      guitarId: 1,
      userName: 'Test User',
      advantage: 'Test advantage text',
      disadvantage: 'Test disadvantage text',
      comment: 'Test review text',
      rating: 5,
      id: 'testId',
      createAt: '2022-05-10T21:00:00.056Z',
    };
    mockAPI
      .onPost(APIRoute.COMMENTS)
      .reply(HTTP_CODE.CREATED, fakeReview);

    const store = mockStore();
    await store.dispatch(postCommentAction(fakeReview));

    expect(store.getActions()).toEqual([
      addComment(fakeReview),
    ]);
  });

  it('should dispatch add discount when POST /coupon', async () => {
    const fakeCoupon = 'light-333';
    const fakeDiscount = 15;
    mockAPI
      .onPost(APIRoute.COUPONS)
      .reply(HTTP_CODE.OK, fakeDiscount);

    const store = mockStore();
    await store.dispatch(postCouponAction(fakeCoupon));

    expect(store.getActions()).toEqual([
      addDiscount(fakeDiscount),
      changeCouponStatus(true),
    ]);
  });
});
