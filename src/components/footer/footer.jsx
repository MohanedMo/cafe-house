import { NavLink, Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container d-flex flex-column flex-md-row text-center text-md-start justify-content-between">
        <div className="main-menu col-12 col-md-3">
          <h4 className="fw-bold">Main Menu</h4>
          <ul className="p-0">
            <li className="mt-3">
              <NavLink
                className="page-link text-uppercase text-decoration-none fw-bold"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                className="page-link text-uppercase text-decoration-none fw-bold"
                to="/special"
              >
                Special
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                className="page-link text-uppercase text-decoration-none fw-bold"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                className="page-link text-uppercase text-decoration-none fw-bold"
                to="/book"
              >
                book
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                className="page-link text-uppercase text-decoration-none fw-bold"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="about col-12 col-md-5 mt-3 mt-md-0">
          <h4 className="fw-bold">About us</h4>
          <p>
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet.
          </p>
          <p>
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus.
          </p>
        </div>
        <div className="social col-12 col-md-3 mt-md-0">
          <h4 className="fw-bold">Get Social</h4>
          <p>
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante.
          </p>
          <ul className="d-flex mt-4 p-0 justify-content-center justify-content-md-start">
            <li>
              <Link
                className="link p-2 me-3"
                to="https://www.youtube.com/channel/UCBMYTWV8iLNknThVNa-RfsQ"
              >
                <i class="fa-brands fa-youtube text-white"></i>
              </Link>
            </li>
            <li>
              <Link className="link p-2 me-3" to="https://github.com/MohanedMo">
                <i className="fa-brands fa-github text-white"></i>
              </Link>
            </li>
            <li>
              <Link
                className="link p-2 me-3"
                to="https://www.linkedin.com/in/mohaned-mohamed-240933209/"
              >
                <i className="fa-brands fa-linkedin text-white"></i>
              </Link>
            </li>
            <li>
              <Link
                className="link p-2 me-3"
                to="https://codepen.io/tukxofcz-the-typescripter"
              >
                <i className="fa-brands fa-codepen text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
