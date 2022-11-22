/**
 * @typedef TodoType
 * @property { () => Boolean }                                      getDone
 * @property { (Boolean) => void}                                   setDone
 * @property { (callback: onValueChangeCallback<Boolean>) => void } onDoneChanged
 */

/**
 * @constructor
 * @return { TodoType }
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

/**
 * @typedef TodoControllerType
 * @property { () => TodoType}                                  addTodo
 * @property { (cb: ObservableListCallback<TodoType>) => void } onTodoAdd
 * @property { (TodoType) => void }                             removeTodo
 * @property { (cb: ObservableListCallback<TodoType>) => void } onTodoRemove
 * @property { () => Number }                                   numberOfTodos
 * @property { () => Number }                                   numberOfOpenTasks
 * @property { (cb: ObservableListCallback<TodoType>) => void } removeTodoRemoveListener - for test cases only
 */

/**
 * @constructor
 * @return { TodoControllerType }
 */
const TodoController = () => {

    const todoModel = ObservableList([]); // observable array of Todos, this state is private

    const addTodo = () => {
        const newTodo = Todo();
        todoModel.add(newTodo);
        return newTodo;
    };

    return {
        numberOfTodos:            todoModel.count,
        numberOfOpenTasks:        () => todoModel.countIf(todo => ! todo.getDone() ),
        addTodo:                  addTodo,
        removeTodo:               todoModel.del,
        onTodoAdd:                todoModel.onAdd,
        onTodoRemove:             todoModel.onDel,
        removeTodoRemoveListener: todoModel.removeDeleteListener, // only for the test case, not used below
    }
};