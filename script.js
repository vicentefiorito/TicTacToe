// Gameboard Object
const Gameboard = (() => {
    const boardContainer = document.getElementById('board-container')
    const createBoard = () => {
        for(i = 0; i < 9; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            boardContainer.appendChild(cell)
        }
    }

    return {createBoard}
})();

// creates the initial board
Gameboard.createBoard()