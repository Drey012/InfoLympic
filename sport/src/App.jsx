import './css/global.scss'
import Header from './js/header'
import Content from './js/content'
import Footer from './js/footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: false, // A animação ocorre apenas uma vez ao rolar a página
    });
  }, []);
  
  return (
    <>
      <Header />
      <Content/>
      <Footer/>
    </>
  )
}

export default App
