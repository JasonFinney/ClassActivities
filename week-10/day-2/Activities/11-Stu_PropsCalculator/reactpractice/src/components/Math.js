import React from "react";

const Math = (props) => {
    console.log(props);
    let value;
    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
        default:
            value = NaN;
    }

    return <section><br></br>{value}</section>
};

export default Math;