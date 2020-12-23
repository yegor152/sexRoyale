`use strict`

let canvas = document.getElementById(`canvas`);
canvas.height = document.documentElement.clientHeight*0.9;
canvas.width = canvas.height;
let ctx = canvas.getContext(`2d`);


let board = [];
let figures = new Set();

for(let i=0;i<8;i++){
    board[i] = [];
}

function draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black'
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if((i+j)%2) ctx.fillRect(j*canvas.width/8,i*canvas.width/8,canvas.width/8, canvas.width/8)
        }
    }

    for(let figure of figures){
        ctx.drawImage(figure.img, figure.x,figure.y, figure.width, figure.width);
    }
}
let setI = setInterval(draw, 50);

