import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//0.Reducer to handle the store update
import todosReducer from './reducers/todos';

//1. Create App Store
const store = createStore(todosReducer);

//2. Wrap the App root element with React-Redux provider component & associate the  store with provider
const AppJSX = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(AppJSX, document.getElementById('root'));

registerServiceWorker();
