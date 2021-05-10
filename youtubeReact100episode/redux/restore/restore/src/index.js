import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { BookStoreServiceProvider } from './components/bookStoreServiceContext/bookStoreServiceContext';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import BookstoreService from './services/bookStoreService';
import store from './store';


const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)