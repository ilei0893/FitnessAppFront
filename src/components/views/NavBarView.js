import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const NavBarView = (props) => {
  let { isLoggedIn } = props;
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto"/>
          <Link pullRight to="/login">Login</Link>
      </Navbar>
    );
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/food" className="nav-link">
        My Foods
      </Link>
      <Link to="/exercises" className="nav-link">
        Exercises
      </Link>
      <Link to="/foodEntries" classname="nav-link">
        Foods
      </Link>
      <Nav className="ml-auto"/>
        {/* <Link pullRight to="/login" onClick={isLoggedIn = false}>Sign Out</Link> */}
    </Navbar>
  );
};

export default NavBarView;
