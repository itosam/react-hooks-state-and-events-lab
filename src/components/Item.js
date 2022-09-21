import React, {useState} from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState("false")
  
  const clickAdd = () => {
    setIsAddedToCart((isAddedToCart) => !isAddedToCart)
  }
  const cartClass = isAddedToCart ? "" : "in-cart";

  return (
    <li className= {cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddedToCart ? "add" : "remove"} onClick={clickAdd}>{isAddedToCart ? "Add to" : "Remove From"} Cart</button>
    </li>
  );
}

export default Item;
