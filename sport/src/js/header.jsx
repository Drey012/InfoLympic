import React from 'react'
import { useState, useEffect } from 'react';
import '../css/header.scss'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define a partir de 50px de rolagem
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div>
                <a href="/">
                    <h1>INFOLYMPIC</h1>
                    <img src="./src/assets/olympic.png" alt="logo" />
                </a>

                
            </div>
            <ul>
                    <a href="#info"><li>Informações</li></a>
                    <a href="#equip"><li>Equipamentos</li></a>
                    <a href="#evo"><li>Evolução</li></a>
                </ul>
        </header>

    );
}

export default Header;