import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login';


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                {/* <Route path="/profile"
                    render={() => <Sidebar />} /> */}
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                        render={() => <DialogsContainer />} />
                    <Route path="/profile/:userId?"
                        render={() => <ProfileContainer />} />
                    <Route path="/users"
                        render={() => <UsersContainer />} />
                    <Route path="/login"
                        render={() => <LoginPage />} />
                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
