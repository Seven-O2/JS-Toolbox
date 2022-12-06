// a dataflow abstraction that is not based on concurrency but on laziness
const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value
                 ? value = howto()
                 : value;
};