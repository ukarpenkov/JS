
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertSate } from './context/alert/alertState';
import { GithubState } from './context/github/githubState';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <GithubState>
      <AlertSate>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-14'>
            <Alert alert={{ text: 'testAlert!' }} />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/profile/:name' component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertSate>
    </GithubState>
  );
}

export default App;
