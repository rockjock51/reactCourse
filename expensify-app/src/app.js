import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
    setTextFilter,
    setEndDate,
    setStartDate,
    sortByAmount,
    sortByDate,
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
