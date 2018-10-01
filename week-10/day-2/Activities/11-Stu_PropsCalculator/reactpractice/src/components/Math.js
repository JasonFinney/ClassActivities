import React from "react";

const Math = (props) => {
    console.log(props);
    return (
        <div className={`math math-${props.type || ""}`}>

        </div>
    );
};

export default Math;