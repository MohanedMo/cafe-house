import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { toggleNav } from "../../rtk/slices/navStatus";

import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navStatus = useSelector((state) => state.navbarStatus);
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
        <div className="container ">
          <Link className="navbar-brand d-flex" to="/">
            <img src="/images/logo.png" alt="not found" />
            <h1 className="mt-2 ms-2 mb-0 fs-2">Cafe House</h1>
          </Link>
          <button
            onClick={() => dispatch(toggleNav())}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={
              navStatus === true
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item  text-uppercase text-center">
                <NavLink
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  text-uppercase">
                <NavLink className="nav-link fw-bold special" to="/special">
                  today Special
                </NavLink>
              </li>
              <li className="nav-item  text-uppercase text-center">
                <NavLink className="nav-link fw-bold" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item  text-uppercase text-center">
                <NavLink className="nav-link fw-bold" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item  text-uppercase text-center">
                <NavLink className="nav-link fw-bold" to="/admin">
                  admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
