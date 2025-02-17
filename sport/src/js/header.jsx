import React from 'react'
import '../css/header.scss'

function Header() {
    return (
        <header className="header">
            <div>
                <a href="/">
                    <h1>INFOLYMPIC</h1>
                    <img src="./src/assets/olympic.png" alt="logo" />
                </a>
            </div>
        </header>

    );
}

export default Header;