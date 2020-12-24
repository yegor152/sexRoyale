`use strict`

let canvas = document.getElementById(`canvas`);
canvas.height = document.documentElement.clientHeight * 0.9;
canvas.width = canvas.height;
let ctx = canvas.getContext(`2d`);


let board = [];
let boardStyle = [];
for (let i = 0; i < 8; i++) {
    board[i] = [];
    boardStyle[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = null;
        boardStyle[i][j] = {color: ((i + j) % 2) ? "black" : "white"};
    }
}
board[2][2] = new Rook(2, 2, 'black')
let figures = new Set();
figures.add(board[2][2])

canvas.addEventListener('click', function (ev) {
    let i = Math.floor(ev.offsetY / (canvas.width / 8));
    let j = Math.floor(ev.offsetX / (canvas.width / 8));
    if (board[i][j]) {
        let curTarget = board[i][j];

        for (let sel of curTarget.possibleMoves()) {
            boardStyle[sel.i][sel.j].highlited = true
        }
    }
})

function draw() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (boardStyle[i][j].highlited) ctx.fillStyle = '#ffff99';
            else ctx.fillStyle = boardStyle[i][j].color
            ctx.fillRect(j * canvas.width / 8, i * canvas.width / 8, canvas.width / 8, canvas.width / 8)
        }
    }

    for (let figure of figures) {
        ctx.drawImage(figure.img, figure.x, figure.y, figure.width, figure.width);
    }
}

let setI = setInterval(draw, 500);

