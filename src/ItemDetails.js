import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const item_fetched = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
    );
    const item_back = await item_fetched.json();

    console.log(item_back);
    setItem(item_back);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.id}</h2>
    </div>
  );
}

export default ItemDetails;
