import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import { HashRouter } from 'react-router-dom';
import { ThemeContext, UserContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <HashRouter>
            <Suspense>
               <ThemeContext.Provider value={{color: 'red', fontSize: '20px'}}>
                    <UserContext.Provider value={{name: 'korea'}}>
                        <App/>
                    </UserContext.Provider>
               </ThemeContext.Provider>
            </Suspense>
       </HashRouter>
    </Provider>
);
