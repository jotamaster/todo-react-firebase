import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers/index'
//middlewares
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


let middlewares = [];

middlewares.push(thunk)
middlewares.push(logger);


const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middlewares)))

export {
  store
}
