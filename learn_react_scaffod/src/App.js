import './App.css';
// import LifeCycle from "./components/life_cycle";
import React from 'react'
// import ContentCp from './components/context_cp';
// import RefComponent from './components/RefComponent';
// import ControlForm from './components/control_form';
// import FormSubmit from './components/FormSubmit';
import HocComponents from './components/HocComponents';
// import Main from './components/props/main';
// import TabControlWrap from './components/tab_control'
// import SlotComponent from './components/slot';
// import ScopeSlot from './components/scope_slot';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: true
        }
    }
    removeComponent() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return (
            // <div className="App">
            //     <button onClick={() => this.removeComponent()}>卸载组件</button>
            //     {
            //         this.state.isActive && <LifeCycle />
            //     }
            // </div>
            // <Main />
            // <TabControlWrap></TabControlWrap>
            // <SlotComponent />
            // <ScopeSlot />
            // <ContentCp />
            // <RefComponent />
            // <ControlForm />
            // <FormSubmit/>
            <HocComponents />
        );
    }
}
export default App;
