`use strict`

class Rook{
    constructor(x, y, color) {
        this.j = x;
        this.i =y;
        this.x = x*canvas.width/8;
        this.y = y*canvas.width/8;
        this.width = canvas.width/8;
        this.color = color;
        this.img = new Image();
        this.img.src = `img/${this.color}Rook.png`;
    }
    possibleMove(){
        let possibleMovesList = [];
    }
}
class Bishop {
    constructor(x, y, color, destination) {
        this.j = x;
        this.i =y;
        this.x = x*canvas.width/8;
        this.y = y*canvas.width/8;
        this.width = canvas.width/8;
        this.color = color;
        this.img = new Image();
        this.img.src = `img/${this.color}Bishop.png`;
    }
    possibleMoves(){
        let possibleMovesList = []
        let x = this.j + 1
        let y = this.i + 1
        while (x < 8 && y < 8){
            if (board[x][y] == null){
                possibleMovesList.push([x, y])
            }
            else if  (board[x][y] === this.color){
                possibleMovesList.push([x, y])
                break
            }
            x++
            y++
        }
        x = this.j + 1
        y = this.i - 1
        while (x < 8 && y >= 0){
            if (board[x][y] == null){
                possibleMovesList.push([x, y])
            }
            else if  (board[x][y] === this.color){
                possibleMovesList.push([x, y])
                break
            }
            x++
            y--
        }
        x = this.j - 1
        y = this.i + 1
        while (x >= 0 && y < 8){
            if (board[x][y] == null){
                possibleMovesList.push([x, y])
            }
            else if  (board[x][y] === this.color){
                possibleMovesList.push([x, y])
                break
            }
            x--
            y++
        }
        x = this.j - 1
        y = this.i - 1
        while (x >= 0 && y >= 0){
            if (board[x][y] == null){
                possibleMovesList.push([x, y])
            }
            else if  (board[x][y] === this.color){
                possibleMovesList.push([x, y])
                break
            }
            x--
            y--
        }

        return possibleMovesList
    }
}