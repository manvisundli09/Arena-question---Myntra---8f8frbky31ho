import React, { useState } from 'react';
import '../styles/App.css';
import data from '../data';

const App = () => {
  const [products, setProducts] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = data.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
    );
    setProducts(filteredProducts);
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    const filteredProducts = data.filter((product) => product.gender === gender);
    setProducts(filteredProducts);
  };

  const handleWhiteShirtsChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const filteredProducts = products.filter((product) => product.color === 'white');
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  };

  const handleFoldedSleevesChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const filteredProducts = products.filter((product) => product.category === 'folded sleeves');
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  };

  const handleSortingChange = (e) => {
    const sortBy = e.target.value;
    let sortedProducts = [];
    if (sortBy === 'new') {
      sortedProducts = [...products].sort((a, b) => a.date - b.date);
    } else if (sortBy === 'priceLowToHigh') {
      sortedProducts = [...products].sort((a, b) => a.finalPrice - b.finalPrice);
    } else if (sortBy === 'betterDiscount') {
      sortedProducts = [...products].sort((a, b) => b.discount - a.discount);
    }
    setProducts(sortedProducts);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product, size) => {
    const updatedProduct = { ...product, size };
    setCartItems([...cartItems, updatedProduct]);
  };

  const openCartModal = () => {
    // Implement code to open cart modal
  };

  const closeCartModal = () => {
    // Implement code to close cart modal
  };

  return (
    <div id="main">
      <nav>
        {/* Navigation elements */}
        <div className="icon-holder">
          {/* Logo */}
        </div>
        <div className="search-bar">
          {/* Search bar */}
        </div>
        <div className="cart-holder" onClick={openCartModal}>
          {/* Cart icon */}
          <div className="cart-list-length">{cartItems.length}</div>
        </div>
      </nav>

      <div className="filter-holder">
        <h2>Gender</h2>
        {/* Gender radio buttons */}
        <h2>Categories</h2>
        {/* Checkbox for white shirts */}
        {/* Checkbox for folded sleeves */}
      </div>

      <div className="sort-holder">
        {/* Sorting dropdown */}
      </div>

      <div className="product-tile-holder">
        {/* Product tiles */}
      </div>

      {selectedProduct && (
        <div id="product-modal">
          {/* Product modal content */}
          <button className="close-modal" onClick={closeProductModal}>×</button>
        </div>
      )}

      <div id="cart-modal-content">
        {/* Cart modal content */}
        <button className="close-modal" onClick={closeCartModal}>×</button>
      </div>
    </div>
  );
};

export default App;
