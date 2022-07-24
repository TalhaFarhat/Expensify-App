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


store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10095 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

var rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)
root.render(jsx);

