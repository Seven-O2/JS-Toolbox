// @ts-check
const Formulae = {
    A1: '1', B1: '1', C1: 'n(A1) + n(B1)',
    A2: '2', B2: '2', C2: 'n(A2) + n(B2)',
    A3: 'n(A1) + n(A2)', B3: 'n(B1) + n(B2)', C3: 'n(C1) + n(C2)',
};

const cols = ["A", "B", "C"];
const rows = ["1", "2", "3"];

/**
 * Starter function that starts the excel application by getting the container
 * and filling the table
 */
function startExcel() {
    const dataContainer = document.getElementById('dataContainer');
    if(dataContainer != null) fillTable(dataContainer);
}

/**
 * Fills the table with some default values and also some formulas which show
 * the power of the application
 * @param {HTMLElement} container
 */
function fillTable(container) {
    rows.forEach(row => {
        const tr = document.createElement("TR");
        cols.forEach(col => {
            const td = document.createElement("TD");
            const input = document.createElement("INPUT");
            const cellid = "" + col + row;
            input.setAttribute("VALUE", Formulae[cellid]);
            input.setAttribute("ID", cellid);

            input.onchange = evt => {
                Formulae[cellid] = input.value;
                refresh();
            };
            input.onclick = evt => input.value = Formulae[cellid];
            td.appendChild(input);
            tr.appendChild(td);
        });
        container.appendChild(tr);
    });
}

/**
 * Evaluates the values inside the table and writes it to the fields
 * @return { void }
 */
function refresh() {
    cols.forEach(col => {
        rows.forEach(row => {
            const cellid = "" + col + row;
            const input = document.getElementById(cellid);
            if(input != null) input.value = eval(Formulae[cellid]);
        });
    });
}

/**
 * Parses an input to a Number
 * @param {{ value: any; }} input - the input field where a numerical value should be parsed from
 * @return { Number } the number parsed from {@link input}
 */
function n(input) {
    return Number(input.value);
}