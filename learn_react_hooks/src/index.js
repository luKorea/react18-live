import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import { HashRouter } from 'react-router-dom';
import { ThemeContext, TokenContext, UserContext } from './context';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <HashRouter>
            <Suspense>
               <ThemeContext.Provider value={{color: 'red', fontSize: '20px'}}>
                    <UserContext.Provider value={{name: 'korea'}}>
                        <TokenContext.Provider value={'korealu-token'}>
                            <App/>
                        </TokenContext.Provider>
                    </UserContext.Provider>
               </ThemeContext.Provider>
            </Suspense>
       </HashRouter>
    </Provider>
);
