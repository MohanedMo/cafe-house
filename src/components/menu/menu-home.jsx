import { Link } from "react-router-dom";

import "./menu-home.css";

const MenuHome = () => {
  return (
    <div className="menu-home">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <div className="col-md-4">
          <img
            className="d-none d-md-block "
            src="/images/menu-board.png"
            alt="menu-board"
          />
        </div>
        <div className="list">
          <p>
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          </p>
          <ol className="my-4">
            <li>Tellus eget condimentum rhoncus.</li>
            <li>Sem quam semper libero.</li>
            <li>Sit amet adipiscing sem neque sed ipsum.</li>
            <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
            <li>Maecenas nec odio et ante tincidunt tempus.</li>
            <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
          </ol>
          <Link className="btn mb-sm-3" to="/menu">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuHome;
