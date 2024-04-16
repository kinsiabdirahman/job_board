// Home.js

import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './Home.css'; // Import the CSS file for Home styles

function Home() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (itemName, itemId, itemPrice) => {
    const newItem = { name: itemName, id: itemId, price: itemPrice };
    setCartItems([...cartItems, newItem]);
    console.log(`Added ${itemName} (ID: ${itemId}, Price: ${itemPrice}) to cart`);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const cartItemCount = cartItems.length;

  useEffect(() => {
    // Fetch data from the API
    fetch('https://mdishidatabase.vercel.app/foods')
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="hero-container">
          <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg" alt="Hero Image" className="hero-image" />
          <div className="text-container">
            <h1 className="hero-caption">Your Appetite, Our Pleasure</h1>
            <p className="hero-paragraph">Explore a world of delicious cuisines at your fingertips.</p>
          </div>
        </div>
      </header>
      <main>

        {/*Backend Connection i.e Job List*/}

      </main>
    </div>
  );
}

export default Home;
