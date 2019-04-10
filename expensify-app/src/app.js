import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import ExpenseDashboard from "./components/ExpenseDashboard";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import Help from "./components/help";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboard} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={Help} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
