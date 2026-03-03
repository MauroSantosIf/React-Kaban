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

const tasks = { // Nosso objeto que representa uma tarefa
  id:generateId(),
  title: 'Nova Tarefa',
  state: 'Pendente'
}


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

  
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <TaskList className="pendente" title="Pendente" onAddTask={addTask}  tasks={task}/> 
        {/*Passando a função addTask como prop para o componente TaskList*/}
        {/* <TaskList className="em-andamento" title="Em Andamento" />
        <TaskList className="concluido" title="Concluído" /> */}

      </div>
    </div>
  );
}