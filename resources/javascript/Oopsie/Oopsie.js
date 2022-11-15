// @ts-check

/**
 * @typedef PlayerType
 * @property { () => String } getName
 * @property { (stride: Number) => void } proceed - proceeds the {@link stride} amount of fields
 * @property { () => void } fallback - resets the player to the fallback index
 * @property { () => void } turn - updates the fallback index of the player to the current progress
 * @property { () => number } getFallbackIndex
 * @property { () => number } getProgressIndex
 * @property { () => void } reset - resets the player to the start
 */

/**
 * Creates a new player with the {@link givenName} and returns the needed functions
 * @param { String } givenName
 * @return { PlayerType }
 */
function Player(givenName) {
    let name = givenName;
    let fallbackIndex = 0;
    let progressIndex = 0;
    return {
        getName          : () => { return name },
        proceed          : stride => progressIndex += stride,
        fallback         : () => progressIndex = fallbackIndex,
        turn             : () => fallbackIndex = progressIndex,
        getFallbackIndex : () => fallbackIndex,
        getProgressIndex : () => progressIndex,
        reset            : () => {
            fallbackIndex = 0;
            progressIndex = 0;
        }
    }
}


/**
 * Starts the game by creating 100 fields
 * @return { void }
 */
function start() {
    const fields = document.getElementById('fields');

    for (let i = 0; i < 100; i++) {
        const field = document.createElement("DIV");
        field.setAttribute("ID", "FIELD-" + i);
        field.textContent = " ";
        if(fields != null) fields.appendChild(field);
    }
    display();
}

/**
 * Rolls a dice and increments the progress of the current player, or if an
 * Oopsie (3) happens, resets the current player and switches to the other
 * player
 * @return { void }
 */
function dice() {
    const stride = Math.round(1 + Math.random() * 5);
    const dice = document.getElementById('dice')
    if( dice != null) dice.innerText = "" + stride;
    if (stride === 3) {
        if(dice != null) dice.innerText = "OOPSIE -> ";
        player.fallback();
        switchPlayer();
    } else {
        player.proceed(stride);
        if (player.getProgressIndex() === otherPlayer.getProgressIndex()) {
            otherPlayer.reset();
        }
    }
    display();
}

/**
 * Locks in the current player's progress and switches to the other
 * @return { void }
 */
function turn() {
    const dice = document.getElementById('dice')
    if(dice != null) dice.innerText = "";
    player.turn();
    switchPlayer();
    display();
}

/**
 * Displays the playfield and sets the colorful squares
 * @return { void }
 */
function display() {
    for (let i = 0; i < 100; i++) {
        const field = document.getElementById("FIELD-" + i);
        if(field != null) field.setAttribute("CLASS", "field");
    }

    const dice = document.getElementById('dice')
    if( dice != null) {
        dice.innerText += "   " + player.getName();
        dice.className = player.getName();
    }
    const fallbackField1 = document.getElementById("FIELD-" + player1.getFallbackIndex());
    if(fallbackField1 != null) fallbackField1.setAttribute("CLASS", "field fallback1");
    const progressField1 = document.getElementById("FIELD-" + player1.getProgressIndex());
    if(progressField1 != null) progressField1.setAttribute("CLASS", "field progress1");
    const fallbackField2 = document.getElementById("FIELD-" + player2.getFallbackIndex());
    if(fallbackField2 != null) fallbackField2.setAttribute("CLASS", "field fallback2");
    const progressField2 = document.getElementById("FIELD-" + player2.getProgressIndex());
    if(progressField2 != null) progressField2.setAttribute("CLASS", "field progress2");
}

/**
 * Function that switches the player with the other player
 * @return { void }
 */
function switchPlayer() {
    [player, otherPlayer] = [otherPlayer, player];
}

const player1 = Player("One");
const player2 = Player("Two");
let player = player1;
let otherPlayer = player2;