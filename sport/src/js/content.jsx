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
                        <img src="./src/assets/gradient.png" alt="fundo" />
                        <img src="./src/assets/cellphone.png" alt="cell" />
                    </div>
                </div>
            </div>
            <div className="texts">
                <div>
                    <p>
                        O <span>tênis de mesa</span> é um esporte dinâmico, rápido e estratégico, praticado por milhões de pessoas ao redor do mundo.
                    </p>
                </div>
                <div className="subs">
                    <p> Originado como uma variação do tênis de quadra, ele se tornou uma modalidade olímpica e é altamente popular, especialmente na Ásia e na Europa. Nesta página, você conhecerá tudo sobre o esporte.</p>
                </div>
            </div>
            <div className="info">
                <div><h2>Informações</h2></div>
                <div>
                    <div className="info-card">
                        <div className="texto">
                            <p>
                                O tênis de mesa surgiu na Inglaterra no final do século XIX como uma adaptação do tênis tradicional para ambientes fechados. Inicialmente, era jogado com livros como rede e rolhas de garrafa como bolas. O esporte ganhou popularidade e, em 1926, foi fundada a Federação Internacional de Tênis de Mesa (ITTF), que passou a regulamentar o jogo mundialmente.
                            </p>
                        </div>
                        <div className="titulo">
                            <h3>Origem do Tênis de Mesa</h3>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="texto">
                            <p>
                                <ul>
                                    <li>Campeonato Mundial de Tênis de Mesa (ITTF World Table Tennis Championships) – realizado desde 1926.</li>
                                    <li>Jogos Olímpicos – modalidade incluída desde 1988.</li>
                                    <li>Copa do Mundo de Tênis de Mesa (World Cup ITTF) – disputada anualmente.</li>
                                    <li>Circuito WTT (World Table Tennis) – liga profissional moderna organizada pela ITTF.</li>
                                </ul>
                                <br />

                            </p>
                        </div>
                        <div className="titulo">
                            <h3>Principais Campeonatos</h3>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="texto">
                            <ul>
                                <li>Ma Long (China) –  Um dos maiores, com títulos mundiais e olímpicos.</li>
                                <li>Deng Yaping (China) – tetracampeã olímpica e um dos maiores nomes do tênis de mesa feminino.</li>
                                <li>Jan-Ove Waldner (Suécia) –  atleta ocidental que desafia o domínio asiático.</li>
                                <li>Hugo Calderano (Brasil) – principal nome do tênis de mesa brasileiro.</li>
                            </ul>

                        </div>
                        <div className="titulo">
                            <h3>Principais Jogadores</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="equipment">
                <div>
                    <h2>Equipamentos Utilizados</h2>
                </div>
                <div className="equipment-container">
                    <div className="racket">
                        <div className="image"><img src="./src/assets/racket2.png" alt="raquete" /></div>
                        <div className="equip-text">composta por madeira e borracha, pode variar conforme a estratégia do jogador (ataque, defesa, controle).</div>
                    </div>
                    <div className="ball">
                        <div className="image"><img src="./src/assets/ball.png" alt="bola" /></div>
                        <div className="equip-text"> 40 mm de diâmetro, feita de plástico ou celuloide.</div>
                    </div>
                    <div className="table">
                        <div className="image"><img src="./src/assets/table.png" alt="Mesa" /></div>
                        <div className="equip-text">com dimensões oficiais de 2,74m x 1,525m e 76 cm de altura, geralmente de madeira ou fibra sintética.</div>
                    </div>
                    <div className="net">
                        <div className="image"><img src="./src/assets/net.png" alt="Rede" /></div>
                        <div className="equip-text">tem 15,25 cm de altura e divide a mesa ao meio.</div>
                    </div>
                </div>
            </div>
            <div className="evolution">
                <div className="evolution-text">
                    <h2>Evolução do Tênis de Mesa</h2>
                    <p>
                    Ao longo dos anos, o tênis de mesa evoluiu significativamente. Com o avanço da tecnologia, as raquetes passaram a ser feitas com materiais que aumentam a velocidade e o controle da bola. Além disso, o esporte se tornou olímpico nos Jogos de Seul 1988, consolidando-se como uma das modalidades mais populares do mundo, especialmente na Ásia e na Europa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content;