import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Brief from "../../components/brief/brief";
import Sectitle from "../../components/section-title/section-title";
import MenuContent from "../../components/menu-content/menu-content";
import Navbar from "../../components/navbar/navbar";
import { hideNav } from "../../rtk/slices/navStatus";

import "./menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.items);
  const menuProducts = state.products.slice(1, 11);
  const data = {
    main: {
      title: "Our Menu",
      describtion:
        "Cafe House template is a mobile-friendly responsive Bootstrap v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      btn: "Menu",
    },
    brief: {
      title: "Variety of Menus",
      describtion:
        "This is free HTML5 website template from templatemo. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.",
    },
    menutitle: "Daily Menu",
  };
  return (
    <>
      <Navbar />
      <div onClick={() => dispatch(hideNav())} className="menu">
        <Main data={data.main} />
        <Brief data={data.brief} />
        <Sectitle data={data.main.title} />
        <div className="menu-content" id="more">
          <div className="container d-flex justify-content-between flex-column flex-md-row">
            <div className="menu-image position-relative  col-sm-12">
              <img
                className="w-100 h-100"
                src="./images/vertical-menu-bg.png"
                alt=""
              />
              <ul className="drinks position-absolute top-0">
                <li>
                  <NavLink to={`/menu`}>{state.products[0].title}</NavLink>
                </li>
                {menuProducts.map((el) => (
                  <li key={el.id}>
                    <NavLink to={`/menu/${el.title}`}>{el.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="elements col-12 col-md-8">
              <Routes>
                <Route
                  path="/"
                  element={<MenuContent drink={state.products[0]} />}
                />
                {menuProducts.map((el) => (
                  <Route
                    key={el.id}
                    path={`${el.title}`}
                    element={<MenuContent drink={el} />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Menu;
