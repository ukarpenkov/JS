import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();

    }
    render() {
        if (!this.props.initialized) { return <Preloader /> }
        return (


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


        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp