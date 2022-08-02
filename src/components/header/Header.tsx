import React from 'react'
import './Style.css';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Flashcard App</div>
      <nav>
      <a href="../home/Home.tsx">Home</a>
      <a href="../quiz/Quiz.tsx">Quiz</a>
      </nav>
      </div>
  )
}

export default Header