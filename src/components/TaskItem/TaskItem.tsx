import {useState}from "react";  
import PropTypes from 'prop-types';
import './TaskItem.css';


export default function TaskItem({
    id, 
    title, 
    taskState,
    onTaskUpdate,
    onDeleteTask
    }) {

    const [isEditing, setIsEditing] = useState(false);

    const [editableTitle, setEditableTitle] = useState(title);


    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    };

    const onKeyPress = (event) => {
    if (event.key === 'Enter') {
        if (editableTitle.trim().length === 0) {
            onDeleteTask(id);{/*Removemos eles aqui */}
        } else {
            onTaskUpdate(id, editableTitle, taskState);
        }
        setIsEditing(false);
    }
};
    const onTaskStateChange = (event) => {
        onTaskUpdate(id, editableTitle, event.target.value);
    }
    if(isEditing){
        return <input type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress}/>
    }else{
        return (
            <div className="task-item">
                {/*Lista mudando automaticamente*/}
                <div onClick={(e)=> setIsEditing(true)}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="Pendente">Pendente</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído">Concluído</option>
                </select>
            </div>  
        );

    }
}

TaskItem.propTypes={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}