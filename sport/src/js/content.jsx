import React from "react";
import '../css/content.scss';

function Content() {
    return (
        <div className="content">
            <div className="intro">
                <div className="description">
                    <div className="title">
                        <h1>Tênis de Mesa</h1>
                        <img src="./src/assets/racket1.png" alt="raquete" />
                    </div>
                    <div className="button-container">
                        <button href="">Saiba Mais</button>
                    </div>
                </div>
                <div className="image">
                    <div className="background-image">
                        <img src="./src/assets/cellphone.png" alt="cell" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;