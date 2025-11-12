import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
  useEffect,
} from "react";

import styles from "./Formulario.module.css";

//Interfaces
import { type ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Formulario = ({ btnText, taskList,setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  
  
  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(title === ""||difficulty===0){
      
    }
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList,newTask])
    setTitle('')
    setDifficulty(0)
    console.log(taskList)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandle} className={styles.form} action="">
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da Tarefa"
          onChange={handleChange}
          value={title}
          required
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
          onChange={handleChange}
          value={difficulty}
         
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default Formulario;
