
/**
 * @template _T_
 * @param { _T_ } value - the changed value that is thrown into the callback
 * @function ObserverCallback
 */

/**
 * @typedef ObservableType
 * @template _T_
 * @property { () => _T_ } getValue - returns the state of this observable
 * @property { _T_ => void } setValue - sets the state of this observable and updates the listeners
 * @property { ObserverCallback<_T_> => void } onChange - adds a listener to the observable
 */

/**
 * A simple observable that updates listeners with the new value
 * @template _T_
 * @param { _T_ } value - the initial value of this observable
 * @return { ObservableType<_T_> }
 * @constructor
 */
const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue));
        }
    }
};

/**
 * A function that checks if a certain predicate is true for an element
 * @typedef Predicate
 * @property { * } element
 * @returns { Boolean } - if the passed element matches the predicate
 * @function
 */

/**
 * @typedef ObservableListType
 * @template _T_
 * @property { ObserverCallback => void } onAdd -
 * @property { ObserverCallback => void } onDel -
 * @property { item: _T_ => void } add -
 * @property { item: _T_ => void } del -
 * @property { () => Number} count -
 * @property { Predicate => Number} countIf -
 */

/**
 * A simple Observable list that updates the listeners with newly added or removed values
 * @template _T_
 * @param { Array<_T_> } list - the list where the observer is built upon
 * @return { ObservableListType<_T_> }
 * @constructor 
 */
const ObservableList = list => {
    const addListeners = [];
    const delListeners = [];
    return {
        onAdd: listener => addListeners.push(listener),
        onDel: listener => delListeners.push(listener),
        add: item => {
            list.push(item);
            addListeners.forEach( listener => listener(item))
        },
        del: item => {
            const i = list.indexOf(item);
            if (i >= 0) { list.splice(i, 1) } // essentially "remove(item)"
            delListeners.forEach( listener => listener(item));
        },
        count:   ()   => list.length,
        countIf: pred => list.reduce( (sum, item) => pred(item) ? sum + 1 : sum, 0)
    }
};

// currently missing: a way to unregister listeners -> might lead to memory leak
