import { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import Product from './Components/Product.jsx'
import addToCart from './cart.js'

function App() {
  const [newProduct, setNewProduct] = useState([]);
  // const [DATA, setDATA] = useState([]);

  const [cartItem, setCartItem]=useState([]);


  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
    
        setNewProduct(data.products); // data.products is the array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
    
      {/* <Header /> */}
      <div id="product-container">
      {newProduct.map((element,index)=>(
        <Product title={element.title} price={element.price} url={element.images} element={element}/> 
      ))}
      </div>
      {/* <CartPanel show={show} setShow={setShow}/> */}
     
      
    </>
  );
}

export default App;
