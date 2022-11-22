/**
 * @constructor
 * @param { TodoControllerType } todoController
 * @param { HTMLElement }        rootElement
 * @return void
 */
 const TodoItemsView = (todoController, rootElement) => {

    const render = todo => {

        function createElements() {
            const template = document.createElement('DIV'); // only for parsing
            template.innerHTML = `
                <button class="delete">&times;</button>
                <input type="text" size="36">
                <input type="checkbox">            
            `;
            return template.children;
        }
        const [deleteButton, inputElement, checkboxElement] = createElements();

        checkboxElement.onclick = _ => todo.setDone(checkboxElement.checked);
        deleteButton.onclick    = _ => todoController.removeTodo(todo);

        todoController.onTodoRemove( (removedTodo, removeMe) => {
            if (removedTodo !== todo) return;
            rootElement.removeChild(inputElement);
            rootElement.removeChild(deleteButton);
            rootElement.removeChild(checkboxElement);
            removeMe();
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
 * @constructor
 * @param { TodoControllerType } todoController
 * @param { HTMLElement }        numberOfTasksElement
 * @return void
 */
const TodoTotalView = (todoController, numberOfTasksElement) => {

    const render = () =>
        numberOfTasksElement.innerText = "" + todoController.numberOfTodos();

    // binding
    todoController.onTodoAdd(render);
    todoController.onTodoRemove(render);
};

/**
 * @constructor
 * @param { TodoControllerType } todoController
 * @param { HTMLElement }        numberOfOpenTasksElement
 * @return void
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