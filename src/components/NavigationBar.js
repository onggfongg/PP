import React from "react";
import { Link } from "react-router-dom";
import profile from "./profile.svg";
import Sidebar from "react-sidebar";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Prizeinterpack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                Sign Up
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productList">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-cart">
                My Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">
                Contact us
              </Link>
            </li>

            {/* <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}

          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              <img
                alt=""
                src={profile}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
