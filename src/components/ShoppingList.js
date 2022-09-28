import React, { useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import uuid from 'react';
import { v4 as uuidv4 } from 'uuid';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");  //control selected category
  const [search, setSearch] = useState('');  //control search state
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const itemsToDisplay = items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))  //to include partial matches

  //return JSX 
  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;