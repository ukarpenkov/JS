import React from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                {/* <Route path="/profile"
                    render={() => <Sidebar />} /> */}
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                        render={() => <DialogsContainer />} />
                    <Route path="/profile"
                        render={() => <Profile />} />
                    <Route path="/users"
                        render={() => <UsersContainer />} />
                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
