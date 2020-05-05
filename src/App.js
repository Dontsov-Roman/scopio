import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from 'constants/routes'
import Landing from './modules/Landing'
import Country from './modules/Country'
import { store } from './modules/store'
import './App.scss'

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path={routes.root} exact component={Landing} />
      <Route path={routes.country} component={Country} />
    </Router>
  </Provider>
)

export default App
