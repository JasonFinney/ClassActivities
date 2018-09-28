import React from "react";
import "../styles/Header.css";
const Header = () => {
  const myStyle = {
    headerStyle: {
      backgroundColor: 'red',
      height: '200px'
    },
    textStyle: {
      justifyContent: 'center',
      color: 'white',
      fontSize: '100px'
    }
  }
  return (
    <header style={myStyle.headerStyle}>
      <h1 style={myStyle.textStyle}>Welcome</h1>
    </header>
  );
};
export default Header;
