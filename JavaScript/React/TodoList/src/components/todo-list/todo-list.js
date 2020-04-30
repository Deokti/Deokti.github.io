import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';
// componentDidMount()

export default class TodoList extends Component {

    render() {
        const { todo, onDeleteItem } = this.props;
        // const getSavedToLocalStorag = JSON.parse(localStorage.getItem('todos'));

        const items = todo.map(({ label, id }) => {
            return (
                <li className="todo-list-li" key={id}>
                    <TodoListItem 
                        label={label} 
                        onDeleteItem={ () => onDeleteItem(id) }
                    />
                </li>
            )
        });

        return <ul className="todo-list">{ items }</ul>
    }
}
