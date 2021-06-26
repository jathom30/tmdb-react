import React from 'react'
import './App.css'
import './theme.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.path === '/'}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App
