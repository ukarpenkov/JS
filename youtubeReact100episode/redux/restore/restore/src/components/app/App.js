import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardPage from '../pages/cardPage';
import HomePage from '../pages/homePage';
import ShopHeader from '../shop-header/shop-header';
import './App.css'


const App = () => {

    return (
        <main role='main' className='constainer'>
            <ShopHeader />
            <Switch>
                <Route path='/'
                    component={HomePage} exact />
                <Route path='/cart'
                    component={CardPage} />

            </Switch>
        </main>

    )

}
export default App