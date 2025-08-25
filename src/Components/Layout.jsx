import Header from "./Header.jsx"
import {Outlet} from "react-router-dom"
import { useState} from "react";
import addToCart from "../cart.js";

function Layout(){
    const [cartItem, setCartItem] = useState([]);
return(
    <>
     <addToCart.Provider value={{cartItem, setCartItem}}>
      <Header />
      <Outlet />
    </addToCart.Provider>
    </>
)
}
export default Layout;