import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes'
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from 'components/topBar'
import { CurrentUserProvider } from 'context/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


