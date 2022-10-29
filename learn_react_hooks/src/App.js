import {Link, useRoutes} from 'react-router-dom'
import ContextAndReducer from './page/ContextAndReducer';
import CustomHook from './page/CustomHook';
import RefAndCallbackAndMemo from './page/RefAndCallbackAndMemo';
import ReduxHook from './page/ReduxHook'
import RefComponent from './page/RefComponent';
import routes from './router/index'
function App() {
    return (
        <div className="App">
             <div> react hooks学习</div>
            <Link to={'/home'}>首页</Link>
            <Link to={'/about'}>关于</Link>
            {useRoutes(routes)}
            <ContextAndReducer />
            <RefComponent/>
            <RefAndCallbackAndMemo/>
            <ReduxHook />
            <CustomHook />
        </div>
    );
}

export default App;
