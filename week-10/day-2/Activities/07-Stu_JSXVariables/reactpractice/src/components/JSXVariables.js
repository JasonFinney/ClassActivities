import React from "react";

const JSXVariables = () => {
  const name = "Jason Finney";
  const num1 = 5;
  const num2 = 10;
  var randnum = Math.floor(Math.random() * 10);
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length - 1} letters</h2>
          <h2>I think React is a Godsend</h2>
          <h2>Also here is a random number: {randnum}</h2>
          <h2>Here is that number multiplied by 5! - {randnum * num1}</h2>
          <h2>Here is that number multiplied by 10! - {randnum * num2}</h2>
        </div>
      </div>
    </div>
  );
};
export default JSXVariables;
