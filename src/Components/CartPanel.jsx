import { useContext } from "react";
import "./CartPanel.css";
import addToCart from "../cart.js"

function CartPanel({ show, setShow, element}) {

  const {cartItem,setCartItem}=useContext(addToCart);

  // const [chosenProduct, setChosenProduct]=useState([{}])

  // useEffect(()=>{
  //   if (element && Object.keys(element).length !== 0){
  //   setChosenProduct((prev)=>[...prev,element])
  //   }
 
  // },[element])

  function remove(indexToRemove){
    let updatedCart=cartItem.filter((item,index)=>(index!==indexToRemove));
    setCartItem(updatedCart)
  }
  
  return (
    <>
    <div id="cart-panel" className={show ? "show" : ""}>
      <div id="cart-header">
        <h2>Your Cart</h2>
        <button onClick={() => setShow(false)} id="close-btn">✖</button>
      </div>
      {cartItem.length>=1?(
      cartItem.map((item, key)=>(
        <div id="cart-items" key={key}>
        <div id="img-div">
          <img src={item.images?.[0]}alt="" />
          <button id="remove-btn"onClick={()=>{
            remove(key);
          }}>Remove</button>
        </div>
        <div id="second-div">
          <h1>${item.price}</h1>
          <h3>{item.title}</h3>
        </div>
      </div>
      ))
      ):<p>Cart is empty</p>
    }
    <button id="buy-btn">Buy Now</button>
    </div>
    </>
  );
}

export default CartPanel;
