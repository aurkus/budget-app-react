import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ItemsList from './components/ItemsList';
import uuid from 'uuid/v4';
import Header from './components/Header';

const initialItems = localStorage.getItem("items")
 ? JSON.parse(localStorage.getItem("items")) : [];

function App() {

  const [items, setItems] = useState(initialItems);
  const [type, setType] = useState("inc");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // *********** Itialized **************
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // *********** functionality **************
  
  //add type
  const updateType = e => {
    setType(e.target.value);
  };

  //add descriptrion
  const updateDescription = e => {
    setDescription(e.target.value);
  };

  // add amount
  const updateAmount = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };
  
  const deleteItem = id => {
    let tempItems = items.filter(item => item.id !== id);
    setItems(tempItems);
    
  };

  const submitHandler = e => {
    e.preventDefault();
    const singleItem = { id: uuid(), type, description, amount };
    setItems([...items, singleItem]);
    // set charge back to empty string
    setDescription("");
    // set amount back to zero
    setAmount("");
  }

  return (
    <div className= "App">
      <div className="top">
        <Header items={items}/>
      </div>
      <div className="botom">
        <Form 
          onSubmit={submitHandler}
          type={type}
          updateType={updateType}
          description={description}
          updateDescription={updateDescription}
          amount={amount}
          updateAmount={updateAmount}
        />
        <ItemsList items={items} deleteItem={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
