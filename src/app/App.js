import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { axiosItems } from "../rtk/slices/get-items";
import { useSelector } from 'react-redux';
import './App.css';

import Book from '../pages/book/book';
import Home from '../pages/home/home';
import Menu from '../pages/menu/menu';
import Special from '../pages/special/special';
import Error from '../pages/error/error';
import MenuContent from '../components/menu-content/menu-content';
import { axiosCustomers } from '../rtk/slices/get-customers';
import Admin from '../pages/admin/admin';
import Tables from '../pages/tables/tables';
import Loading from '../components/loading/loading';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(axiosItems())
    dispatch(axiosCustomers())
  },[])
  const state = useSelector((state) => state.items)
  const menuProducts = state.products.slice(1,11)
  return (
      <>
      {state.isLoaded === false ? (
        <Loading/>
      ): (
<>
<div className='curtain'></div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}>
              {menuProducts.map((el) => (
                <Route key={el.id} path={`${el.title}`} element={<MenuContent/>}/>
              )
              )}
        </Route>
      <Route path="/special" element={<Special/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/tables" element={<Tables/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </>
      )}
    </>
  );
}

export default App;
