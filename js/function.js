`use strict`

class Rook{
    constructor(x, y, color) {
        this.i = x;
        this.j =y;
        this.x = x*canvas.width/8;
        this.y = y*canvas.width/8;
        this.width = canvas.width/8;
        this.color = color;
        this.img = new Image();
        this.img.src = `img/${this.color}.Bishop.png`;
    }
    possibleMove(){
        let possibleMovesList = [];
    }
}