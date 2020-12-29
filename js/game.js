`use strict`

let canvas = document.getElementById(`canvas`);
canvas.height = document.documentElement.clientHeight * 0.9;
canvas.width = canvas.height;
let ctx = canvas.getContext(`2d`);


let board = [];
let boardStyle = [];
let possibleMoves = [];
let curFocus;
for (let i = 0; i < 8; i++) {
    board[i] = [];
    boardStyle[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = null;
        boardStyle[i][j] = {color: ((i + j) % 2) ? "black" : "white"};
    }
}

function colorMap(color, highlighted) {
    if (color === 'black') {
        if (highlighted) return '#AAA23A'
        else return '#B58863'
    } else if (color === 'white') {
        if (highlighted) return '#CDD26A'
        else return '#F0D9B5'
    }
}

board[3][5] = new Bishop(3, 5, 'white');
let figures = new Set
figures.add(board[3][5])

canvas.addEventListener('click', function (ev) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            boardStyle[i][j].highlighted = false;
        }
    }

    let i = Math.floor(ev.offsetY / (canvas.width / 8));
    let j = Math.floor(ev.offsetX / (canvas.width / 8));
    let curTarget = board[i][j];
    if (possibleMoves.find(cell => (cell.i == i && cell.j == j))) {
        curFocus.destination = {
            x: j * canvas.width / 8,
            y: i * canvas.width / 8,
            i: i,
            j: j,
        };
        curFocus.destination.angle = Math.atan2(curFocus.y - curFocus.destination.y, curFocus.x - curFocus.destination.x);
        board[curFocus.i][curFocus.j] = null;
        curFocus = null;
        possibleMoves = [];
    } else if (curTarget) {
        possibleMoves = curTarget.possibleMoves()
        curFocus = curTarget;
        for (let cell of possibleMoves) {
            boardStyle[cell.i][cell.j].highlighted = true
        }
    }
})

function draw() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            ctx.fillStyle = colorMap(boardStyle[i][j].color, boardStyle[i][j].highlighted)
            ctx.fillRect(j * canvas.width / 8, i * canvas.width / 8, canvas.width / 8, canvas.width / 8)
        }
    }

    for (let figure of figures) {
        if (figure) {
            if (figure.destination) {
                if (figure.destination.x != figure.x || figure.destination.y != figure.y) {
                    let old = {
                        x: Math.sign(figure.destination.x - figure.x),
                        y: Math.sign(figure.destination.y - figure.y),
                    }
                    figure.x -= figure.speed * Math.cos(figure.destination.angle);
                    figure.y -= figure.speed * Math.sin(figure.destination.angle);
                    if (Math.sign(figure.destination.x - figure.x) != old.x) figure.x = figure.destination.x
                    if (Math.sign(figure.destination.y - figure.y) != old.y) figure.y = figure.destination.y
                } else{
                    figure.i = figure.destination.i;
                    figure.j = figure.destination.j;
                    board[figure.destination.i][figure.destination.j] = figure;
                    delete figure.destination;
                }
            }
            drawImage(figure);
        }
    }
}

let setI = setInterval(draw, 10);

