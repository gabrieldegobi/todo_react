import { useState } from "react";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Lista from "./components/Lista/LIsta";

//CSS
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <Formulario />
          </div>

          <div>
            <h2>Suas Tarefas</h2>
            <Lista />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
