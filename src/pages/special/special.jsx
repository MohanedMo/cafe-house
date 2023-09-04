import { useSelector, useDispatch } from "react-redux";

import Main from "../../components/main/main"
import Sectitle from "../../components/section-title/section-title";
import Card from "../../components/card/card"
import MenuHome from "../../components/menu/menu-home"
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { hideNav } from '../../rtk/slices/navStatus';

import "./special.css"

const Special = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.items)
  const drinksSpecial = state.products.slice(0,6)
    const data = {
      main: {
        title: "Today Special",
        describtion:
          "Cafe House template is a mobile-friendly responsive Bootstrap v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        btn: "Read More"
      },
      popularTitle: "Popular Items",
      menutitle : "Daily Menu"
      };
    return ( 
      <>
      <Navbar/>
      <div onClick={() => dispatch(hideNav())} className="special">
        <Main data={data.main}/>
        <div className="cards-special" id="details">
        <Sectitle data={data.popularTitle}/>
        <div>
          <div className="container d-flex flex-wrap justify-content-center justify-content-md-between ">
        {drinksSpecial.map((d) => (
        <Card key={d.id} data ={d}/>
        ))}
        </div>
          </div>
        </div>
        <Sectitle data={data.menutitle}/>
        <MenuHome/>
            <Footer/>
      </div>

        </>
     );
}
 
export default Special;