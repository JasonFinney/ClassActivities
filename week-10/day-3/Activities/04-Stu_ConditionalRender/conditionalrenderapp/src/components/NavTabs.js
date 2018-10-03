import React from "react";

const AssignClass = (tabname, currentPage) => {
  if (tabname === currentPage) {
    return "nav-link active"
  } else {
    return "nav-link"
  }
}

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")} className={AssignClass("Home", props.currentPage)}>
        Home
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("About")} className={AssignClass("About", props.currentPage)}>
        About
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Blog")} className={AssignClass("Blog", props.currentPage)}>
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Contact")} className={AssignClass("Contact", props.currentPage)}>
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
