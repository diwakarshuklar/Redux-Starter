import * as React from "react";
import { Provider } from 'react-redux';
import configureStore from './store';
import Root from "./First";

class App extends React.Component {
    render () {
        return  (
            <Provider store={configureStore()}>
                <Root name="Diwakar"/>  
            </Provider>
        );
    }
};

export default App;