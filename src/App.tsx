// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TaskList from './components/TaskList/TaskList';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <TaskList className="pendente" title="Pendente" />
        <TaskList className="em-andamento" title="Em Andamento" />
        <TaskList className="concluido" title="Concluído" />

      </div>
    </div>
  );
}