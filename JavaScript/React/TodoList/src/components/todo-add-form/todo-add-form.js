import React, { Component } from 'react';

import './todo-add-form.css';

export default class TodoAddForm extends Component {
    state = {
        label: ''
    };

    // Отключаем базовое поведение формы
    // И передаём this.state.label в функцию
    // которая передевалась из App
    isSubmitForm = (event) => {
        event.preventDefault();

        // Получаем label для меньшего написания
        const { label } = this.state;

        // Ограничиваем колличество символов
        if (label.length >= 5 && label.length <= 60) this.props.addNewItem(label);
        else alert('Для задачи, колличество символов должно быть более 5, но менее 60.');

        // Когда текст написан, и нажата кнопка enter label очиститься,
        // а поскольку input и label связаны, input очиститься то же.
        this.setState({ label: '' });
    }

    // Передаём записанный в Input текст в this.state.label
    onToggleInput = ({target}) => this.setState({ label: target.value });

    render() {

        return (
            <form onSubmit={ this.isSubmitForm }>
                <input 
                    type="text" 
                    className="todo-add-form" 
                    placeholder="Какого новое дело?" 
                    value={ this.state.label }
                    onChange={ this.onToggleInput }
                />
            </form> 
        );
    }
}