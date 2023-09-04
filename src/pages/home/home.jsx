import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Main from "../../components/main/main";
import Brief from "../../components/brief/brief";
import Card from "../../components/card/card";
import Sectitle from "../../components/section-title/section-title";
import MenuHome from "../../components/menu/menu-home";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { hideNav } from "../../rtk/slices/navStatus";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.items);
  const drinksHome = state.products.filter(
    (i) =>
      i.title === "Cappuccino" || i.title === "Americano" || i.title === "Mocha"
  );

  const data = {
    main: {
      title: "Welcome To",
      describtion:
        "Cafe House template is a mobile-friendly responsive Bootstrap v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      btn: "Details",
    },
    brief: {
      title: "The Best Coffee for you",
      describtion:
        "This is free HTML5 website template from templatemo. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.",
    },
    popularTitle: "Popular Items",
    specialTitle: "Today's Special",
    menutitle: "Daily Menu",
  };
  return (
    <>
      <Navbar />
      <div onClick={() => dispatch(hideNav())} className="home">
        <Main data={data.main} />
        <Brief data={data.brief} />
        <Sectitle data={data.popularTitle} />
        <div className="cards" id="more">
          <div className="container d-flex flex-wrap justify-content-center justify-content-md-between ">
            {drinksHome.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </div>
        </div>
        <Sectitle data={data.specialTitle} />
        <div className="special-home">
          <div className="container d-flex flex-column flex-lg-row pb-3 justify-content-between">
            <div className="photo col-md-12 col-lg-6 position-relative p-0 ">
              <div className="text position-absolute w-100 bottom-0 p-3 text-white">
                <h4>Donec pede justo</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <img className="w-100" src="/images/special-1.jpg" alt="" />
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="photo position-relative p-0 mb-3">
                <div className="text position-absolute w-100 bottom-0 p-3 text-white">
                  <h4>Etiam sit amet</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>
                <img className="w-100" src="/images/special-2.jpg" alt="" />
              </div>
              <div className="small-images d-flex justify-content-between ">
                <div className="photo col-sm-5 position-relative p-0">
                  <div className="text position-absolute w-100 bottom-0 p-3 text-white">
                    <h6>Vivamus elementum</h6>
                  </div>
                  <img className="w-100" src="/images/special-3.jpg" alt="" />
                </div>
                <div className="photo col-sm-5 position-relative p-0">
                  <div className="text position-absolute w-100 bottom-0 p-3 text-white">
                    <h6>Quisque rutrum.</h6>
                  </div>
                  <img className="w-100" src="/images/special-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sectitle data={data.menutitle} />
        <MenuHome />
        <Footer />
      </div>
    </>
  );
};

export default Home;
