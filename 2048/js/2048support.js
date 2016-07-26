//检查为0单元格
function checkBoardEmpty(){
    emptyGridCellPos=[];
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(boardNum[i][j]===0){
                emptyGridCellPos.push(""+i+","+j+"");
            }    
        }
    }
}

//随机初始值
function setInitNum(){
    return (Math.random()>0.7)?4:2;
}

//Y轴方向上无障碍
function noBlockY(fromRow,col,toRow,board){
    var minX,
        maxX;
    if(fromRow>toRow){
        minX=toRow;
        maxX=fromRow;
    }else{
        minX=fromRow;
        maxX=toRow;
    }
    for(var i=minX+1;i<maxX;i++){
        if(board[i][col]!==0){
            return false;
        }
    }
    return true;
}

//X轴方向上无障碍
function noBlockX(row,fromCol,toCol,board){
    var minY,
        maxY;
    if(fromCol>toCol){
        minX=toCol;
        maxX=fromCol;
    }else{
        minX=fromCol;
        maxX=toCol;
    }
    for(var j=minX+1;j<maxX;j++){
        if(board[row][j]!==0){
            return false;
        }
    }
    return true;
}

//判定游戏是否结束
function isGameover(){
    if(!(upAvailable()||rightAvailable()||downAvailable()||leftAvailable())){
        return true;
    }else {
        return false;
    }
}


