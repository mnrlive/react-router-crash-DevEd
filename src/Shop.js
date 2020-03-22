import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const items_back = await data.json();
    console.log(items_back);
    setItems(items_back);
  };

  return (
    <div>
      {items.map(item => {
        return (
          <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;
