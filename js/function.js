`use strict`

class Rook{
    constructor(x, y, color) {
        this.i = y;
        this.j =x;
        this.x = x*canvas.width/8;
        this.y = y*canvas.width/8;
        this.width = canvas.width/8;
        this.color = color;
        this.img = new Image();
        this.img.src = `img/${this.color}Rook.png`;
    }
    possibleMove(){
        let possibleMovesList = [];
        for(let i=this.i+1; i<board.length; i++){
            let curFigure = board[i][this.j];
            if(!curFigure) possibleMovesList.push([i,this.j])
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push([i,this.j])
                break;
            }
        }
        for(let i=this.i-1; i>=0; i--){
            let curFigure = board[i][this.j];
            if(!curFigure) possibleMovesList.push([i,this.j])
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push([i,this.j])
                break;
            }
        }
        for(let  j=this.j+1; j<board.length; j++){
            let curFigure = board[this.i][j];
            if(!curFigure) possibleMovesList.push([this.i,j])
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push([this.i,j])
                break;
            }
        }
        for(let  j=this.j-1; j>=0; j--){
            let curFigure = board[this.i][j];
            if(!curFigure) possibleMovesList.push([this.i,j])
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push([this.i,j])
                break;
            }
        }
        return possibleMovesList;
    }
}
class Bishop {
    constructor(x, y, color) {
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
            else if  (board[x][y].color === this.color){
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
            else if  (board[x][y].color === this.color){
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
            else if  (board[x][y].color === this.color){
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
            else if  (board[x][y].color === this.color){
                possibleMovesList.push([x, y])
                break
            }
            x--
            y--
        }

        return possibleMovesList
    }
}
class Knight{
    constructor(x, y, color) {
        this.j = x;
        this.i =y;
        this.x = x*canvas.width/8;
        this.y = y*canvas.width/8;
        this.width = canvas.width/8;
        this.color = color;
        this.img = new Image();
        this.img.src = `img/${this.color}Knight.png`;
    }
    possibleMoves(){
        let possibleMovesList = []
        if (this.j + 1 < 8 && this.i + 2 < 8){
            if (board[this.j + 1][this.i + 2] && board[this.j + 1][this.i + 2].color !== this.color
            || !board[this.j + 1][this.i + 2]) {
                possibleMovesList.push([this.j + 1, this.i + 2])
            }
        }
        if (this.j + 2 < 8 && this.i + 1 < 8){
            if (board[this.j + 2][this.i + 1] && board[this.j + 2][this.i + 1].color !== this.color
                || !board[this.j + 2][this.i + 1]) {
                possibleMovesList.push([this.j + 2, this.i + 1])
            }
        }
        if (this.j - 1 >= 0 && this.i - 2 >= 0){
            if (board[this.j - 1][this.i - 2] && board[this.j - 1][this.i - 2].color !== this.color
                || !board[this.j - 1][this.i - 2]) {
                possibleMovesList.push([this.j - 1, this.i - 2])
            }
        }
        if (this.j - 2 >= 0 && this.i - 1 >= 0){
            if (board[this.j - 2][this.i - 1] && board[this.j - 2][this.i - 1].color !== this.color
                || !board[this.j - 2][this.i - 1]) {
                possibleMovesList.push([this.j - 2, this.i - 1])
            }
        }
        if (this.j + 1 < 8 && this.i - 2 >= 0){
            if (board[this.j + 1][this.i - 2] && board[this.j + 1][this.i - 2].color !== this.color
                || !board[this.j + 1][this.i - 2]) {
                possibleMovesList.push([this.j + 1, this.i - 2])
            }
        }
        if (this.j + 2 < 8 && this.i - 1 >= 0){
            if (board[this.j + 2][this.i - 1] && board[this.j + 2][this.i - 1].color !== this.color
                || !board[this.j + 2][this.i - 1]) {
                possibleMovesList.push([this.j + 2, this.i - 1])
            }
        }
        if (this.j - 1 >= 0 && this.i + 2 < 8){
            if (board[this.j - 1][this.i + 2] && board[this.j - 1][this.i + 2].color !== this.color
                || !board[this.j - 1][this.i + 2]) {
                possibleMovesList.push([this.j - 1, this.i + 2])
            }
        }
        if (this.j - 2 >= 0 && this.i + 1 < 8){
            if (board[this.j - 2][this.i + 1] && board[this.j - 2][this.i + 1].color !== this.color
                || !board[this.j - 2][this.i + 1]) {
                possibleMovesList.push([this.j - 2, this.i + 1])
            }
        }
        return possibleMovesList
    }

}