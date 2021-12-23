import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import UserContext from './context/userContext';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <UserContext>
    <App />
    </UserContext>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);