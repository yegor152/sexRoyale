`use strict`

function drawImage(obj){
    ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.width);
};
function constructorTemplate(z, i, j, color) {
    z.i = i;
    z.j = j;
    z.x = j*canvas.width/8;
    z.y = i*canvas.width/8;
    z.width = canvas.width/8;
    z.height = z.width;
    z.color = color;
    z.speed = 5;
    z.img = new Image();
};

class Rook{
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Rook.png`;
    }
    possibleMoves(){
        let possibleMovesList = [];
        for(let i=this.i+1; i<board.length; i++){
            let curFigure = board[i][this.j];
            if(!curFigure) possibleMovesList.push({i:i, j:this.j})
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push({i:i, j:this.j})
                break;
            }
        }
        for(let i=this.i-1; i>=0; i--){
            let curFigure = board[i][this.j];
            if(!curFigure) possibleMovesList.push({i:i, j:this.j})
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push({i:i, j:this.j})
                break;
            }
        }
        for(let  j=this.j+1; j<board.length; j++){
            let curFigure = board[this.i][j];
            if(!curFigure) possibleMovesList.push({i:this.i, j:j})
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push({i:this.i, j:j})
                break;
            }
        }
        for(let  j=this.j-1; j>=0; j--){
            let curFigure = board[this.i][j];
            if(!curFigure) possibleMovesList.push({i:this.i, j:j})
            else{
                if(curFigure && curFigure.color !== this.color) possibleMovesList.push({i:this.i, j:j})
                break;
            }
        }
        return possibleMovesList;
    }
}
class Bishop {
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Bishop.png`;
    }
    possibleMoves(){
        let possibleMovesList = []
        let x = this.j + 1
        let y = this.i + 1
        while (x < 8 && y < 8){
            if (board[x][y] == null){
                possibleMovesList.push({i:x, j:y})
            }
            else{
                if (board[x][y].color !== this.color){
                    possibleMovesList.push({i:x, j:y})
                }
                break
            }
            x++
            y++
        }
        x = this.j + 1
        y = this.i - 1
        while (x < 8 && y >= 0){
            if (board[x][y] == null){
                possibleMovesList.push({i:x, j:y})
            }
            else{
                if (board[x][y].color !== this.color){
                    possibleMovesList.push({i:x, j:y})
                }
                break
            }
            x++
            y--
        }
        x = this.j - 1
        y = this.i + 1
        while (x >= 0 && y < 8){
            if (board[x][y] == null){
                possibleMovesList.push({i:x, j:y})
            }
            else{
                if (board[x][y].color !== this.color){
                    possibleMovesList.push({i:x, j:y})
                }
                break
            }
            x--
            y++
        }
        x = this.j - 1
        y = this.i - 1
        while (x >= 0 && y >= 0){
            if (board[x][y] == null){
                possibleMovesList.push({i:x, j:y})
            }
            else{
                if (board[x][y].color !== this.color){
                    possibleMovesList.push({i:x, j:y})
                }
                break
            }
            x--
            y--
        }

        return possibleMovesList
    }
}
class Knight{
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Knight.png`;
    }
    possibleMoves(){
        let x = this.j
        let y = this.i
        let possibleMovesList = []
        let arr = [{i: x + 1, j: y + 2}, {i: x + 2, j: y + 1}, {i: x - 1, j: y - 2}, {i: x - 2, j: y - 1},
            {i: x + 1, j: y - 2}, {i: x + 2, j: y - 1}, {i: x - 1, j: y + 2}, {i: x - 2, j: y + 1}]
        for (let a = 0; a < 8; a++){
            if (arr[a].i >= 0 && arr[a].j >= 0 && arr[a].i < 8 && arr[a].j < 8) {
                if (!board[arr[a].i][arr[a].j] || board[arr[a].i][arr[a].j].color !== this.color){
                    possibleMovesList.push(arr[a])
                }
            }
        }
        // if (this.j + 1 < 8 && this.i + 2 < 8){
        //     if (board[this.j + 1][this.i + 2] && board[this.j + 1][this.i + 2].color !== this.color
        //     || !board[this.j + 1][this.i + 2]) {
        //         possibleMovesList.push({i:this.j + 1, j:this.i + 2})
        //     }
        // }
        // if (this.j + 2 < 8 && this.i + 1 < 8){
        //     if (board[this.j + 2][this.i + 1] && board[this.j + 2][this.i + 1].color !== this.color
        //         || !board[this.j + 2][this.i + 1]) {
        //         possibleMovesList.push({i:this.j + 2, j:this.i + 1})
        //     }
        // }
        // if (this.j - 1 >= 0 && this.i - 2 >= 0){
        //     if (board[this.j - 1][this.i - 2] && board[this.j - 1][this.i - 2].color !== this.color
        //         || !board[this.j - 1][this.i - 2]) {
        //         possibleMovesList.push({i:this.j - 1, j:this.i - 2})
        //     }
        // }
        // if (this.j - 2 >= 0 && this.i - 1 >= 0){
        //     if (board[this.j - 2][this.i - 1] && board[this.j - 2][this.i - 1].color !== this.color
        //         || !board[this.j - 2][this.i - 1]) {
        //         possibleMovesList.push({i:this.j - 2, j:this.i - 1})
        //     }
        // }
        // if (this.j + 1 < 8 && this.i - 2 >= 0){
        //     if (board[this.j + 1][this.i - 2] && board[this.j + 1][this.i - 2].color !== this.color
        //         || !board[this.j + 1][this.i - 2]) {
        //         possibleMovesList.push({i:this.j + 1, j:this.i - 2})
        //     }
        // }
        // if (this.j + 2 < 8 && this.i - 1 >= 0){
        //     if (board[this.j + 2][this.i - 1] && board[this.j + 2][this.i - 1].color !== this.color
        //         || !board[this.j + 2][this.i - 1]) {
        //         possibleMovesList.push({i:this.j + 2, j:this.i - 1})
        //     }
        // }
        // if (this.j - 1 >= 0 && this.i + 2 < 8){
        //     if (board[this.j - 1][this.i + 2] && board[this.j - 1][this.i + 2].color !== this.color
        //         || !board[this.j - 1][this.i + 2]) {
        //         possibleMovesList.push({i:this.j - 1, j:this.i + 2})
        //     }
        // }
        // if (this.j - 2 >= 0 && this.i + 1 < 8){
        //     if (board[this.j - 2][this.i + 1] && board[this.j - 2][this.i + 1].color !== this.color
        //         || !board[this.j - 2][this.i + 1]) {
        //         possibleMovesList.push({i:this.j - 2, j:this.i + 1})
        //     }
        // }
        return possibleMovesList
    }
}
class Queen{
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Queen.png`;
    }
    possibleMoves(){
        let bishop = new Bishop(this.j, this.i, this.color)
        let rook = new Rook(this.j, this.i, this.color)
        return bishop.possibleMoves().concat(rook.possibleMoves())
    }
}
class Pawn{
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Queen.png`;
    }
    possibleMoves(){
        let movesList = []
        if(this.color === 'white'){
            if(validCell(this.j - 1, this.i) && !board[this.j - 1][this.i]){
                movesList.push({i: this.j - 1, j: this.i})
            }
            if(this.j === 6){
                movesList.push({i: this.j - 2, j: this.i})
            }
            if(validCell(this.j - 1, this.i - 1) && board[this.j - 1][this.i - 1] &&
                board[this.j - 1][this.i - 1].color === 'black'){
                movesList.push({i: this.j - 1, j: this.i - 1})
            }
            if(validCell(this.j - 1, this.i + 1) && board[this.j - 1][this.i + 1] &&
                board[this.j - 1][this.i + 1].color === 'black'){
                movesList.push({i: this.j - 1, j: this.i + 1})
            }
        }
        if(this.color === 'black'){
            if(validCell(this.j + 1, this.i) && !board[this.j + 1][this.i]){
                movesList.push({i: this.j + 1, j: this.i})
            }
            if(this.j === 1){
                movesList.push({i: this.j + 2, j: this.i})
            }
            if(validCell(this.j + 1, this.i - 1) && board[this.j + 1][this.i - 1] &&
                board[this.j + 1][this.i - 1].color === 'black'){
                movesList.push({i: this.j + 1, j: this.i - 1})
            }
            if(validCell(this.j + 1, this.i + 1) && board[this.j + 1][this.i + 1] &&
                board[this.j + 1][this.i + 1].color === 'black'){
                movesList.push({i: this.j + 1, j: this.i + 1})
            }
        }
        return movesList
    }
}
class King {
    constructor(i, j, color) {
        constructorTemplate(this, i, j, color)
        this.img.src = `img/${this.color}Queen.png`;
    }
    possibleMoves(){
        let movesList = []
        let arr = [{i: this.j + 1, j: this.i + 1}, {i: this.j + 1, j: this.i - 1}, {i: this.j - 1, j: this.i + 1},
            {i: this.j - 1, j: this.i - 1}, {i: this.j, j: this.j + 1}, {i: this.j, j: this.j - 1},
            {i: this.j - 1, j: this.i}, {i: this.j + 1, j: this.i}]
        for(let a = 0; a < 8; a++){
            if(validCell(arr[a].i, arr[a].j) &&
                (!board[arr[a].i][arr[a].j] || board[arr[a].i][arr[a].j].color !== this.color)){
                movesList.push(arr[a])
            }
        }
        return movesList
    }

}
function validCell(x, y){
    let res = false
    if (x >= 0 && x < 8 && y >= 0 && y < 8){
        res = true
    }
    return res
}