import "./Product.css"
import addToCart from "../cart";
import { useContext } from "react";

function Product({title, price,url,element}){


    const {cartItem,setCartItem}=useContext(addToCart);

    function addCartItem(){
        setCartItem((prev)=>[...prev,element]);
    }
    return(
        <>
        <div id="product-div">
            <div id="img-div">
                <img src={url}alt="shoespic" />

            </div>
            <div id="data-div">
                <h1>{title}</h1>
                <h2>${price}</h2>
                <button onClick={addCartItem}>Add to Cart</button>
            </div>
        </div>

        </>
    )
}
export default Product;