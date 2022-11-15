/**
 * The item view that renders the list elements
 * @param { TodoControllerType } todoController 
 * @param { HTMLElement } rootElement 
 */
 const TodoItemsView = (todoController, rootElement) => {

    const render = todo => {
        const createElements = () => {
            const template = document.createElement('DIV'); // only for parsing
            template.innerHTML = `
                <button class="delete">&times;</button>
                <input type="text" size="42">
                <input type="checkbox">            
            `;
            return template.children;
        };
        const [deleteButton, inputElement, checkboxElement] = createElements();

        checkboxElement.onclick = _ => todo.setDone(checkboxElement.checked);
        deleteButton.onclick    = _ => todoController.removeTodo(todo);

        todoController.onTodoRemove( removedTodo => {
            if (removedTodo !== todo) return;
            rootElement.removeChild(inputElement);
            rootElement.removeChild(deleteButton);
            rootElement.removeChild(checkboxElement);
        } );

        rootElement.appendChild(deleteButton);
        rootElement.appendChild(inputElement);
        rootElement.appendChild(checkboxElement);
    };

    // binding
    todoController.onTodoAdd(render);

    // we do not expose anything as the view is totally passive.
};

/**
 * 
 * @param { TodoControllerType } todoController 
 * @param { HTMLElement } numberOfTasksElement - the element that displays the number of tasks
 */
const TodoTotalView = (todoController, numberOfTasksElement) => {

    const render = () =>
        numberOfTasksElement.innerText = "" + todoController.numberOfTodos();

    // binding
    todoController.onTodoAdd(render);
    todoController.onTodoRemove(render);
};

/**
 * 
 * @param { TodoControlelrType } todoController 
 * @param { HTMLElement } numberOfOpenTasksElement - the element sthat displays the number of open tasks
 */
const TodoOpenView = (todoController, numberOfOpenTasksElement) => {

    const render = () =>
        numberOfOpenTasksElement.innerText = "" + todoController.numberOfOpenTasks();

    // binding
    todoController.onTodoAdd(todo => {
        render();
        todo.onDoneChanged(render);
    });
    todoController.onTodoRemove(render);
};
