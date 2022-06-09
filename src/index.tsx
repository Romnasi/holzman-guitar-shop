import React from 'react';
import ReactDOM from 'react-dom';
import { createAPI } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { rootReducer } from './store/root-reducer';
import { fetchGuitarsAction, fetchCommentsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import { redirect } from './store/middlewares/redirect';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchGuitarsAction());
store.dispatch(fetchCommentsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
