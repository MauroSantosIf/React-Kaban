import React from 'react';
import './Navbar.css'
import logo from '../../assets/react.svg'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt="Logo do react para o quadro de tarefas" className='logo' />
            <span>React Kanban</span>
        </nav>
    )
}