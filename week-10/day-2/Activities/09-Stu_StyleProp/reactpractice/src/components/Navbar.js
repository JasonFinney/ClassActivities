import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const myStyle = {
    navbarStyle: {
      backgroundColor: 'green',
      justifyContent: 'flex-end',
      height: '50px'
    },
    linkStyle: {
      float: 'right',
      color: 'white',
    }
  }
  return (
    <nav style={myStyle.navbarStyle}>
      <a style={myStyle.linkStyle} href="/">Welcome</a>
    </nav>
  );
};
export default Navbar;
