class TicTacToe {
    constructor() {
      this.numrow=3;
      this.numcol=3;
      this.matrix=[];
      this.currentPlayer='x';
      for (var i=0;i<this.numrow;i++){
        this.matrix[i]=[];
        for(var j=0;j<this.numcol;j++){
          this.matrix[i][j]=null;
        }
      }
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if(!this.matrix[rowIndex][columnIndex]){
        this.matrix[rowIndex][columnIndex]=this.currentPlayer;
        if (this.currentPlayer=='x'){
          this.currentPlayer='o';
        }
        else{
          this.currentPlayer='x';
        }
      }
      return this;
    }

    isFinished() {
      if (this.getWinner()!=null || this.isDraw()){
        return true;
      }
      return false;
    }

    getWinner() {
      //проверка по вертикали
      for (var j=0;j<this.numcol;j++){
        if (this.matrix[0][j]==this.matrix[1][j] && this.matrix[0][j]==this.matrix[2][j] && this.matrix[0][j]!=null){
          return this.matrix[0][j];
        }
      }
      //проверка по горизонтали
      for (var i=0;i<this.numrow;i++){
        if (this.matrix[i][0]==this.matrix[i][1] && this.matrix[i][0]==this.matrix[i][2] && this.matrix[i][0]!=null){
          return this.matrix[i][0];
        }
      }
      //проверка по главной диагонали
      if (this.matrix[0][0]==this.matrix[1][1] && this.matrix[0][0]==this.matrix[2][2] && this.matrix[0][0]!=null){
        return this.matrix[0][0];
      }
      //проверка по побочной диагонали
      if (this.matrix[2][0]==this.matrix[1][1] && this.matrix[2][0]==this.matrix[0][2] && this.matrix[2][0]!=null){
        return this.matrix[2][0];
      }
      return null;
    }

    noMoreTurns() {
      var num=0;
      for(var i=0;i<this.numrow;i++){
        for(var j=0;j<this.numcol;j++){
          if (this.matrix[i][j]!=null){
            num++;
          }
        }
      }
      if (num==9){
        return true;
      }
      return false;
    }

    isDraw() {
      if (this.getWinner()==null && this.noMoreTurns()==true){
        return true;
      }
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
