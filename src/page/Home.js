import React from 'react';
import './Home.css';
import Tinder from './components/Tinder';

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>BLYU</h1>
      </header>
      <nav className="home-nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <main className="home-main">
        <section>
            <Tinder />
        </section>
      </main>
    </div>
  );
}

export default Home;
