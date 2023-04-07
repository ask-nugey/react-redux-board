import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset.css';
import 'base.scss';
import 'index.scss';
import App from 'App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postReducer from 'features/Posts';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
