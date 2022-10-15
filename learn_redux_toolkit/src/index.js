import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import {StoreContext} from "./hoc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </Provider>
);