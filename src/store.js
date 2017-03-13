import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

// enable redux devtools
const enhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  rootReducer,
  enhancers
)

export const history = syncHistoryWithStore(browserHistory, store)

// enable hot reload of reducer-files 
if(module.hot){
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default
		store.replaceReducer(nextRootReducer)
	})
}

export default store