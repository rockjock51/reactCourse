import React from "react";
import ReactDOM from "react-dom";

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

store.dispatch(addExpense({ description: "Water Bill", amount: 10000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 20000 }));
store.dispatch(setTextFilter("water"));
console.log(store.getState());
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
