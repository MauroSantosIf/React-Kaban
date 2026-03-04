// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useState} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TaskList from './components/TaskList/TaskList';


let idCounter = 0; // Variável para controlar o ID das tarefas
const generateId = () => {
  idCounter += 1;
  return idCounter;
};



export default function App() {

  const [task, setTask] = useState<{id: number; title: string; state: string}[]>([]);

  const addTask = (title: string, state: string) => {
 
    const newTask = {
      id: generateId(),
      title,
      state
    
    };

    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });

  };

  const onTaskUpdate = (id: number, title: string, state: string) => {
    setTask((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {...task, title, state};
        }else{
          return task;
        }
      }
    )});
  }
  
  const deleteTask = (id: number) => {
    {/*Toda task que tiver o id igual ao id passado como parâmetro */}
    setTask((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <TaskList 
                className="pendente"
                title="Pendente"
                onAddTask={addTask}
                taskState={"Pendente"}
                tasks={task.filter((t) => t.state === "Pendente")}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={deleteTask}
                
        />
         
         
        <TaskList 
                className="em-andamento" 
                title="Em Andamento" 
                onAddTask={addTask}  
                taskState={"Em Andamento"}
                tasks={task.filter((t) => t.state === "Em Andamento")} 
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={deleteTask}
                
        />

        <TaskList 
                className="concluido" 
                title="Concluído" 
                onAddTask={addTask}  
                taskState={"Concluído"}
                tasks={task.filter((t) => t.state === "Concluído")} 
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={deleteTask}
        />  
        {/*Passando a função addTask como prop para o componente TaskList*/}
        

      </div>
    </div>
  );
}