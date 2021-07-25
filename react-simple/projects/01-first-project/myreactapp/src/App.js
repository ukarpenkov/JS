import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";

import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
//import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
// import ProfileContainer from './components/Profile/ProfileContainer'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     alert('Some error occured')
    //     console.error(promiseRejectionEvent);
    // }
    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    // componentWillUnmount() {
    //     window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    // }
    render() {
        if (!this.props.initialized) { return <Preloader /> }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path="/"
                            render={() => <Redirect to='/profile' />} />
                        <Route path="/dialogs"
                            render={withSuspense(DialogsContainer)} />
                        <Route path="/profile/:userId?"
                            render={withSuspense(ProfileContainer)} />
                        <Route path="/users"
                            render={() => <UsersContainer pageTitle={'Название страницы'} />} />
                        <Route path="/login"
                            render={() => <LoginPage />} />
                        <Route path="*"
                            render={() => <div>404 not found</div>} />
                    </Switch>
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