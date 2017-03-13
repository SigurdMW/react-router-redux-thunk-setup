import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// components
import App from './components/App'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'

const appRoutes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="*" component={PageNotFound} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(
  appRoutes,
  document.getElementById('root')
)