import React, { Component } from 'react';
import {createStore} from 'redux'
import rootReducer from './reducers/RootReducer'
class Store extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default (initialState)=>{
    return createStore(rootReducer, initialState)
}