import shoppingcart from "../assets/shoppingcart.png"
import "./Header.css"
import { useContext, useState } from "react"
import addToCart from "../cart.js"
import CartPanel from "./CartPanel.jsx"
import {Link} from "react-router-dom"


function Header(){

    const [show,setShow]=useState(false);

    const {cartItem,setCartItem}=useContext(addToCart);
    console.log(addToCart,"DATA");
    
    return(
        <>
        <div id="header-div">
            <img src={shoppingcart} alt="icon img" />
            <p>Items in Cart: {cartItem.length}</p>
            <button id="cart-btn"onClick={()=>{
                setShow(!show)
            }}>My Cart</button>

            <nav>
                <Link to="">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>

            <addToCart.Provider value={{cartItem,setCartItem}}>
            <CartPanel show={show} setShow={setShow} element={cartItem} />
            </addToCart.Provider>
            </div>
        </>
    )
}

export default Header;