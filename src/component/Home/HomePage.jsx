import React, { useState } from 'react';
import './HomePage.css';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
    <section className='Homecontainer'>
    <nav className="navbar" tabIndex="0" onBlur={() => setNavOpen(false)}>
        <div className="logo">Logo</div>
        <div className="user">
          Vikram Singh
          <button className="hamburger-btn" aria-label="Toggle navigation" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-left">
        <h1>Welcome to Our Badminton Shoes Store</h1>
        <p>Discover the ultimate comfort and performance with our premium badminton shoes. We offer top-quality footwear for all your badminton needs.</p>
        <p>With our cutting-edge designs and expert craftsmanship, your feet are in good hands. Say goodbye to foot fatigue and let our shoes enhance your game.</p>
        <p>From lightweight agility to superior grip, we provide shoes that handle every move with precision. Your satisfaction is our priority, and we guarantee optimal performance every time.</p>
        <button>Shop for Badminton Shoes Today</button>
        </div>
        <div className="hero-right">
          <img src="../../../shoes.png" alt="shoes" />
        </div>
      </section>
    </section>
    <Footer/>
    </>
  );
};

export default HomePage;
