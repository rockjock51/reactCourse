import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFIlters";

export default () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
