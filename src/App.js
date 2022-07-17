
import { Component } from 'react';

import Form from './containers/to-do/FormContainer';
import ItemContainer from './containers/to-do/ItemContainer';
import './App.css';


export default class App extends Component {

    render () {
        return (
            <div className="App">
                <Form />
                <ItemContainer />
            </div>
        );
    }
}
