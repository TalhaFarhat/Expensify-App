import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './styles/styles.scss';


const store = configureStore();


var rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)
root.render(jsx);

