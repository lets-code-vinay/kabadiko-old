import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';

declare global {
    interface window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose;
    }
}
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )|| compose;


const Store = createStore(rootReducer, composeEnhancers (applyMiddleware(thunkMiddleware)));


// const Store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)));

Store.subscribe(() => {});

export default Store;