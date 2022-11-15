// requires ../observable/observable.js

/**
 * @typedef TodoControllerType
 * @property { Number } numberOfTodos - returns the number of all todos (open or closed)
 * @property { Number } numberOfOpenTasks - returns the number of all todos (open)
 * @property { () => Todo } addTodo - adds a todo to the todo list and returnes it
 * @property { () => } removeTodo - removes the todo from the todo list
 * @property { Listener => void } onTodoAdd - adds a listener to the todo list that gets triggered when an element is added to the list
 * @property { Listener => void } onTodoRemove - adds a listener to the todo list that gets triggered when an element is removed from the list
 */

/**
 * The Controller of the MVC model for the todo list
 * @returns { TodoControllerType }
 * @constructor
 */
const TodoController = () => {

    /**
     * @typedef TodoType
     * @property { boolean } getDone - returns the done state of this Todo
     * @property { boolean => void } setDone - sets the done state of this Todo and updates the listeners
     * @property { ObserverCallback<boolean> => void } onDoneChanged - adds a listener to the todo
     */
    /**
     * A simple todo that returns the property to work on a todo
     * @returns { TodoType }
     * @constructor
     */
    const Todo = () => {                                // facade
        const textAttr = Observable("text");            // we currently don't expose it as we don't use it elsewhere
        const doneAttr = Observable(false);
        return {
            getDone:       doneAttr.getValue,
            setDone:       doneAttr.setValue,
            onDoneChanged: doneAttr.onChange,
        }
    };

    // observable array of Todos, this state is private
    const todoModel = ObservableList([]); 
    const addTodo = () => {
        const newTodo = Todo();
        todoModel.add(newTodo);
        return newTodo;
    };
    return {
        numberOfTodos:      todoModel.count,
        numberOfOpenTasks:  () => todoModel.countIf( todo => ! todo.getDone() ),
        addTodo:            addTodo,
        removeTodo:         todoModel.del,
        onTodoAdd:          todoModel.onAdd,
        onTodoRemove:       todoModel.onDel,
    }
};
