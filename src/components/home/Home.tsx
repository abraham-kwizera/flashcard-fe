import React from 'react'
import "./Style.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Card from '../card/Card';
const Home = () => {
  return (
 <>
        <Header />
        <div className="content">
            <div className="hero-message">
                <h1> Welcome to Flashcard App! </h1>
                <p> This will help you testing and improving memory through practiced information retrieval! </p>
            </div>
            <div className="hero-card">
                <div className="card">
                    <em>Hover on card to run Sample Demo!</em>
                    <Card />
                </div>
            </div>
        </div>
        <Footer />
 </>
  )
}

export default Home;
