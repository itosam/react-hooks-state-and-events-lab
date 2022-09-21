import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 const [selectedCategory, setSelectedCategory] = useState("All")// instead of a boolean, since we have a Filter, we want to have the value to match "ALL", to render all of the items
 const handleSelectedCategory = (e) => {
  setSelectedCategory(e.target.value)
 }

 let filteredItems =  items.filter((item) => {
  if (selectedCategory === "All") return "true"

  return (item.category === selectedCategory)
 })
console.log(filteredItems)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
