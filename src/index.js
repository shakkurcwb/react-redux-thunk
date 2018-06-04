import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import ItemList from './components/item-list.js';

const store = configureStore();

render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('root')
);