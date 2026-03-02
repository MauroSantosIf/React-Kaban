import React from "react";
import './TaskList.css'

export default function TaskList({title, className}: {title: string, className: string}) {
    return(
        <div className={`TaskList ${className}`}>
            <div className="title">{title}</div>
        </div>
    )
}