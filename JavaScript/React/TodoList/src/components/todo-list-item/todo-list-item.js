import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({label, onDeleteItem}) => {
    return (
        <span className="todo-list-item-template"> 
            <p className="todo-list-item-label">{ label }</p>

            <button className="todo-list-item-delete" onClick={ onDeleteItem }>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M11.6 10L18.7 2.9C18.9 2.7 19 2.4 19 2.2 19 1.9 18.9 1.6 18.7 1.4L18.1 0.8C17.9 0.6 17.6 0.5 17.3 0.5 17.1 0.5 16.8 0.6 16.6 0.8L9.5 7.9 2.4 0.8C2.2 0.6 1.9 0.5 1.7 0.5 1.4 0.5 1.1 0.6 0.9 0.8L0.3 1.4C-0.1 1.8-0.1 2.5 0.3 2.9L7.4 10 0.3 17.1C0.1 17.3 0 17.6 0 17.8 0 18.1 0.1 18.4 0.3 18.6L0.9 19.2C1.1 19.4 1.4 19.5 1.7 19.5 1.9 19.5 2.2 19.4 2.4 19.2L9.5 12.1 16.6 19.2C16.8 19.4 17.1 19.5 17.3 19.5H17.3C17.6 19.5 17.9 19.4 18.1 19.2L18.7 18.6C18.9 18.4 19 18.1 19 17.8 19 17.6 18.9 17.3 18.7 17.1L11.6 10Z" fill="#fff"/>
                </svg>
            </button>
        </span>
    );
}

export default TodoListItem;