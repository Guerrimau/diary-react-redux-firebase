import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

//Aqui se juntan distintos middlewares
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Sirve para tener distintos reducers
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
