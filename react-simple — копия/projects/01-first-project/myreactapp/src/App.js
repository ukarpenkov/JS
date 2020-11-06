import React from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';

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
                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
