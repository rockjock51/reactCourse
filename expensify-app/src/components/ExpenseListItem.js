import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
            {amount} - {createdAt}
        </p>
    </div>
);

export default ExpenseListItem;
