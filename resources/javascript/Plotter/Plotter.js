// @ts-check
const minX = -6;
const maxX = 6;
const minY = -2;
const maxY = 2;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas = document.getElementById('canvas');
    if(userFunction != null){
        const displayIt = () => display(canvas, /** @type { Number }*/ x => /** @type { function } */ eval(userFunction.value));
        displayIt();
        if (userFunction != null) userFunction.onchange = () => displayIt();
    }
}

/**
 * Displays the function {@link f}, helper lines (grid) and the numbers
 * @param {HTMLElement | null} canvas
 * @param { function } f
 * @return { void }
 */
function display(canvas, f) {
    if (canvas != null) {
        // clear
        const context = canvas.getContext("2d");
        context.fillStyle = "#fbfbfb";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // draw the function plot
        const normx = normalizeX(canvas.width);
        const normy = normalizeY(canvas.height);

        // draw helper lines
        context.fillStyle = "#000000";
        context.strokeStyle = "#AFAFAF";
        context.font = "15px Arial";
        for(let y = minY + 1; y < maxY; y++){
            context.beginPath();
            context.moveTo(normx(minX), normy(y));
            context.lineTo(normx(maxX), normy(y));
            context.stroke();
            context.fillText(y, normx(minX + 0.2), normy(y));
        }

        context.textAlign = "center";
        for(let x = minX + 1; x < maxX; x++){
            context.beginPath();
            context.moveTo(normx(x), normy(minY));
            context.lineTo(normx(x), normy(maxY));
            context.stroke();
            context.fillText(x, normx(x), normy(minY + 0.01));
        }
        

        // Draw function
        context.strokeStyle = "#000001"
        context.beginPath();
        context.moveTo(normx(minX), normy(f(minX)));
        const stride = (maxX - minX) / 1000; // 100 Stützstellen
        for (let x = minX; x <= maxX; x += stride) {
            context.lineTo(normx(x), normy(f(x)));
            context.stroke();
        }
    }
}

/**
 * Returns a function that can be called on a number, which then gets normalized to
 * the {@link height}
 * @param { Number } height 
 * @returns { function }
 */
const normalizeY = height => (/** @type {number} */  y) => {
    const scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

/**
 * Returns a function that can be called on a number, which then gets normalized to
 * the {@link width}
 * @param { Number } width 
 * @returns { function }
 */
const normalizeX = width => x => {
    const scaleFactor = width / (maxX - minX);
    return (x - minX) * scaleFactor;
};
