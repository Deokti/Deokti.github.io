import React, { Component } from 'react';

import HeaderTitle from '../header-app';
import TodoAddForm from '../todo-add-form';
import TodoList from '../todo-list';

import './App.css';

export default class App extends Component {
    // Просчёт countID для того, 
    // чтобы поместить это число в key
    countID = 0;

    // Создаём базовые списки дел
    createNewTodoItem(label) {
        return {
            label,
            done: false,
            id: this.countID++
        }
    }
    
    state = {
        TodoItems: []
    }

    // Функцию по созданию и сохранению данных в localStorage
    saveTodoLocalStorage = (todoItems) => {
        let todos;
        if (localStorage.getItem('todos') === null) todos = [];
        else todos = JSON.parse(localStorage.getItem('todos'));

        todos.push(todoItems);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
  
    // Компонент действует при загрузке страницы
    componentDidMount() {
        this.setState(({ TodoItems }) => {
            // Получаем элементы из localStroge и в помощью parse делаем массив
            const getSavedToLocalStorag = JSON.parse(localStorage.getItem('todos'));

            // Как выглядят элементы в разных состояниях
            // console.log("DEFAULT:", localStorage.getItem('todos'))
            // console.log("PARSE:", JSON.parse(localStorage.getItem('todos')))
            // console.log("STRINGIFY:", JSON.stringify(localStorage.getItem('todos')))


            // Если внутри пусто, то ничего не происходит
            if (getSavedToLocalStorag === null) return;

            // Перебираем все названия дел из localStroge и на каждой итерации
            // создаём нужную обёртку
            const newArrayTodoLocal = getSavedToLocalStorag.map((item) => {
                return this.createNewTodoItem(item);
            });

            // Записываем это в другую переменную,
            // включая и те данные, которые были в TodoItems ранее
            const allArray = [
                ...TodoItems,
                ...newArrayTodoLocal
            ]

            // Изменяем содержимое TodoItems на новое
            return { TodoItems: allArray }
        });  
    }

    // Добавляет новыое дело 
    // App => todo-add-form
    addNewItem = (label) => {
        // Когда всё произошло, данные state обвноявляются
        // Для начала получаем TodoItems
        this.setState(({ TodoItems }) => {
            const newTodoItems = [
                ...TodoItems,
                this.createNewTodoItem(label),
            ];
            
            // Записывет текст из label в localStroge
            this.saveTodoLocalStorage(label);

            // Возвращаем новый this.state.TodoItems
            return { TodoItems: newTodoItems };
        });
    }

    // Удаляем элемент из localStroge
    removeTodoLocalStroge(todo) {
        let todos;
        if (localStorage.getItem('todos') === null) todos = [];
        else todos = JSON.parse(localStorage.getItem('todos'));

        // Получает текст в массиве, например ["Первое дело"]
        // И удаляем его
        todos.splice(todos.indexOf(todo), 1);

        // Записываем в localStroge новые данные
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Реализуем удаление
    // App => TodoList(id) => tood-list-item.onClick 
    onDeleteItem = (id) => {
        this.setState(({ TodoItems }) => {
            // Получаем и сравниваем id
            const currentIdElement = TodoItems.findIndex(element => element.id === id);

            // Получаем элемент элемент по индексу, а затем его label т.е текст
            const currentElementByName = TodoItems[currentIdElement].label;

            
            // Создаём новый массив после удаления элемента
            const newArrayAfterItemDeletion = [
                // Копируем все элементы, которые были до того элемента,
                // который ходим удалить
                ...TodoItems.slice(0, currentIdElement),
                
                // Получаем все элементы + 1 (тот который мы удалили),
                // после свершения задуманного
                ...TodoItems.slice(currentIdElement + 1),
            ]


            // Удаляем элемент и localStroge
            this.removeTodoLocalStroge(currentElementByName);

            // Записываем полученное, как новое состояние state
            return { TodoItems: newArrayAfterItemDeletion };
        });
    }


    render() {
        // Деструктуризация 
        const { TodoItems } = this.state;
        // console.log('APP:', TodoItems)

        return (
            <section className="App">
                <HeaderTitle title="Список дел" />
                <div className="App-form">
                    <TodoAddForm addNewItem={ this.addNewItem } />
                    <TodoList 
                        todo={ TodoItems } 
                        onDeleteItem={ this.onDeleteItem } 
                    />
                </div>
            </section>
        )
    }
}