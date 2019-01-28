import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
import Details from './components/counter-details/counter-details';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';



const initialState = {
    countersLimit: 0,
    listCounters: [],
    count: 0,
    userLogin: ''
};

function reducer(state = initialState, action) {
    let newCounters=[]
    switch (action.type) {
        case 'ADD_COUNTER':
            return Object.assign(
                {},
                state, {
                    listCounters: state.listCounters.concat([action.newCounter]),
                    count: state.count + 1
                });

        case 'INCREASE_COUNTER':
            
            let newC = [
                ...state.listCounters
            ];
            newC[action.indexCounter].clickCount ++
            return {
                ...state,
                listCounters: newC
            
            };

        case 'DELETE_COUNTER':
            newCounters = [
                ...state.listCounters
            ];
            newCounters.splice(action.indexCounter, 1);
            return {
                ...state,
                listCounters: newCounters,
                count: state.count - 1
            };
        
        case 'RESET_COUNTER':
            newCounters = [
                ...state.listCounters
            ];
            newCounters[action.indexCounter].clickCount = 0
            return {
                ...state,
                listCounters: newCounters
            
            };
        
        case 'BLOCK_COUNTER':
            newCounters = [
                ...state.listCounters
            ];
            newCounters[action.indexCounter].blocked = !newCounters[action.indexCounter].blocked
            return {
                ...state,
                listCounters: newCounters
            
            };
        
        case 'RESET_COUNTERS':
            newCounters = [
                ...state.listCounters
            ];
            newCounters.forEach(counter => {
                counter.clickCount = 0
            });
            return {
                ...state,
                listCounters: newCounters
            
            };
    

        case 'ADD_LIMIT':

            return Object.assign(
                {},
                state, {
                    countersLimit: action.countersLimit
                }
            );

        case 'ADD_USER':
            return Object.assign(
                {},
                state, {
                    userLogin: action.userLogin
                }
            );

        case 'DELETE_USER':
            return Object.assign(
                {},
                state, {
                    userLogin: ''
                }
        );
        



        default:
            return state;
    }
}

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path="/" component={Login} />
                <Route exact path="/app" component={App} />
                
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();
