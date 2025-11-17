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
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  // Deleta uma task
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // Confere se o modal esta aparecendo e o esconde, ou inverso
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  // Edita uma task
  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (task: ITask) => {
    const updatedTask = task;

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    hideOrShowModal(false)
  };

  return (
    <>
      <div>
        <Modal
          children={
            <Formulario
              btnText="Editar Tarefa"
              taskList={taskList}
              task={taskToUpdate}
              handleUpdate={updateTask}
            />
          }
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
            <Lista
              taskList={taskList}
              handleDelete={deleteTask}
              handleEdit={editTask}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
