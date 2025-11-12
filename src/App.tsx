import { useState } from "react";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Modal from "./components/Modal/Modal";

//CSS
import styles from "./App.module.css";
import Lista from "./components/Lista/Lista";

//Interface
import { type ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <>
      <div>
        <Modal
          children={<Formulario btnText="Editar Tarefa" taskList={taskList} />}
        />
        <Header />
        <div className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <Formulario
              btnText="Criar Tarefa"
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>

          <div>
            <h2>Suas Tarefas</h2>
            <Lista taskList={taskList} handleDelete={deleteTask} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
