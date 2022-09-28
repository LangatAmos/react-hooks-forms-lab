import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
    id:uuid(),
    name,
    category,
    })
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleNameChange} value={name}  type="text" name="name" />
      </label>
      <label>
        Category:
        <select onChange={handleCategoryChange}  name="category" value= {category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;