import React from "react";
import '../css/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <div className="title">
                <h1>INFOLYMPIC</h1>
                <img src="./src/assets/olympic.png" alt="logo" />
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"><img src="./src/assets/in.png" alt="LikedIn" /></a>
                   <a href="https://www.instagram.com/accounts/login/"> <img src="./src/assets/insta.png" alt="Instagram" /></a>
                   <a href="https://pt-br.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110"> <img src="./src/assets/face.png" alt="Facebook" /></a>
                    <a href="https://x.com/i/flow/login?mx=2"><img src="./src/assets/Tt.png" alt="Twitter" /></a>
                </div>
            </div>
            <div className="contact">
                <h2>Fale Conosco</h2>
                <ul>
                    <li>(11) 96775-0424</li>
                    <li>R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos</li>
                    <li>infolympic@outlook.com</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;