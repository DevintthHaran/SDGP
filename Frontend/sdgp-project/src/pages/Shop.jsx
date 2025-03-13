import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ShopNavbar from "../components/ShopNavbar";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import "../style/Shop.css";

// Import images
import LearningSoftSkills from "../Images/Learning Soft Skills.jpg";
import PeopleSmart from "../Images/Personal Intelligence.jpg";
import ConversationallySpeaking from "../Images/Conversationally Speaking.jpg";
import FineArtSmallTalk from "../Images/The Fine Art of Small Talk.jpg";
import Header from "../components/Header";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false); // Controls cart visibility
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const products = [
    {
      name: "Learning Soft Skills",
      price: 1317.80,
      image: LearningSoftSkills,
      description:
        "The Learning Soft Skill by Dr.Shlipi Saxena covers about Communication, Leadership, Social, Listening skill which would improve their personality and make them industry ready.",
    },
    {
      name: "PeopleSmart",
      price: 8489.53,
      image: PeopleSmart,
      description:
        "PeopleSmart by Mel Silberman Ph.d is a practical guide to improving your interpersonal effectiveness in both professional and personal relationships.",
    },
    {
      name: "Conversation -ally Speaking",
      price: 8184.98,
      image: ConversationallySpeaking,
      description:
        "Conversationally Speaking by Alan Garner offers tips for improving your conversation skills and reducing social anxiety.",
    },
    {
      name: "The Fine Art of Small Talk",
      price: 9069.36,
      image: FineArtSmallTalk,
      description:
        "The Fine Art of Small Talk offers tips from communications expert Debra Fine about making better small talk.",
    },
  ];

  const toggleCart = () => setCartOpen(!cartOpen); // Open/close cart when icon is clicked

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const buyNow = () => {
    if (cartItems.length === 0) {
      alert("The Cart is empty. Please select item(s) to place order.");
      return;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItems([]);
    navigate("/order"); // Redirect to the order page
  };

  return (
    <div>
      <Header />
      <ShopNavbar toggleCart={toggleCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        cartOpen={cartOpen} // Pass cartOpen to control visibility
        toggleCart={toggleCart}
        buyNow={buyNow}
      />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
