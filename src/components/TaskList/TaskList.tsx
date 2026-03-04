import './TaskList.css';
import PropTypes from 'prop-types';
import React from "react";
import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({
    title, 
    className, 
    onAddTask, 
    tasks, 
    onTaskUpdate, 
    taskState
    }) {

    const addTask = () => {
        onAddTask('Nova Tarefa', taskState); // Chamando a função onAddTask passada como prop, passando o título da nova tarefa e o estado (que é o título da lista)
    }    

    return(
        <div className={`TaskList ${className}`}>
            <div className="title">{title}</div>

            <div className="content">

                {tasks.map((task)=>{
                    return <TaskItem 
                            key={task.id} 
                            id={task.id} 
                            title={task.title} 
                            taskState={task.state} 
                            onTaskUpdate={onTaskUpdate}
                    />
                })}

            </div>

            <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
    )
}


//Alterando o escopo da propTypes para o componente TaskList
TaskList.propTypes={
    title:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}