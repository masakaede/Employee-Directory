import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Employee-Directory
      </a>

      <form className="form-inline my-2 my-lg-0">
        {props.children}
      </form>
    </nav>
  );
}

export default Navbar;
