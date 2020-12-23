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