import React from "react";

export default (props) => {
    console.log(props);
    return <div>Editing the expense of Id of {props.match.params.id}</div>;
};
