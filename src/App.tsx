import { useState } from "react";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";


//CSS
import styles from "./App.module.css";
import Lista from "./components/Lista/Lista";

//Interface
//import { ITask } from "./interfaces/Task";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <Formulario
            btnText="Criar Tarefa"
            />
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
