import React, { Component } from 'react'

import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'hp'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
                activeStyle={{ color: 'blue' }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <h3>is loggedIn {this.state.isLoggedIn ? 'TRUE' : 'False'}</h3>
        <button onClick={() => this.setState({ isLoggedIn: true })}>Login </button>
        <hr />
        <Switch>
          <Route path='/' exact render={() => <h1>Домашняя страница</h1>} />
          {this.state.isLoggedIn ? <Route path='/about' component={About} /> : null}


          <Route path='/cars/:name' component={CarDetail} />
          <Route path='/cars' component={Cars} />
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found</h1>} /> */}
        </Switch>

      </div>
    );
  }
}

export default App
