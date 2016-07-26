//四个方向的移动
function moveUp(){
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            for(var k=0;k<i;k++){
                if(boardNum[i][j]!==0){
                    if(boardNum[k][j]===boardNum[i][j]&&noBlockY(i,j,k,boardNum)&&!isAdded[k][j]){
                        moveAnimation(i,j,k,j);
                        boardNum[k][j]+=boardNum[i][j];
                        boardNum[i][j]=0;
                        isAdded[k][j]=true;
                        score+=boardNum[k][j];
                        continue;
                    }else if(boardNum[k][j]===0&&noBlockY(i,j,k,boardNum)){
                        moveAnimation(i,j,k,j,boardNum);
                        boardNum[k][j]=boardNum[i][j];
                        boardNum[i][j]=0;
                        continue;
                    }    
                }
            }
        }
    }
    setTimeout("roundEnd()",350);
}

function moveRight(){
    for(var j=2;j>-1;j--){
        for(var i=0;i<4;i++){
            for(var k=3;k>j;k--){
                if(boardNum[i][j]!==0){
                    if(boardNum[i][k]===boardNum[i][j]&&noBlockX(i,j,k,boardNum)&&!isAdded[i][k]){
                        moveAnimation(i,j,i,k);
                        boardNum[i][k]+=boardNum[i][j];
                        boardNum[i][j]=0;
                        isAdded[i][k]=true;
                        score+=boardNum[i][k];
                        continue;
                    }else if(boardNum[i][k]===0&&noBlockX(i,j,k,boardNum)){
                        moveAnimation(i,j,i,k);
                        boardNum[i][k]=boardNum[i][j];
                        boardNum[i][j]=0;
                        continue;
                    }    
                }
            }
        }
    }
    setTimeout("roundEnd()",350);
}

function moveDown(){
    for(var i=2;i>-1;i--){
        for(var j=3;j>-1;j--){
            for(var k=3;k>i;k--){
                if(boardNum[i][j]!==0){
                    if(boardNum[k][j]===boardNum[i][j]&&noBlockY(i,j,k,boardNum)&&!isAdded[k][j]){
                        moveAnimation(i,j,k,j);
                        boardNum[k][j]+=boardNum[i][j];
                        boardNum[i][j]=0;
                        isAdded[k][j]=true;
                        score+=boardNum[k][j];
                        continue;
                    }else if(boardNum[k][j]===0&&noBlockY(i,j,k,boardNum)){
                        moveAnimation(i,j,k,j);
                        boardNum[k][j]=boardNum[i][j];
                        boardNum[i][j]=0;
                        continue;
                    }    
                }
            }
        }
    }
    setTimeout("roundEnd()",350);
}

function moveLeft(){
    for(var i=3;i>-1;i--){
        for(var j=1;j<4;j++){
            for(var k=0;k<j;k++){
                if(boardNum[i][j]!==0){
                    if(boardNum[i][k]===boardNum[i][j]&&noBlockX(i,j,k,boardNum)&&!isAdded[i][k]){
                        moveAnimation(i,j,i,k);
                        boardNum[i][k]+=boardNum[i][j];
                        boardNum[i][j]=0;
                        isAdded[i][k]=true;
                        score+=boardNum[i][k];
                        continue;
                    }else if(boardNum[i][k]===0&&noBlockX(i,j,k,boardNum)){
                        moveAnimation(i,j,i,k);
                        boardNum[i][k]=boardNum[i][j];
                        boardNum[i][j]=0;
                        continue;
                    }    
                }
            }
        }
    }
    setTimeout("roundEnd()",350);
}

//判定是否可以移动
function upAvailable(){
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(boardNum[i][j]!==0){
                if(boardNum[i][j]===boardNum[i-1][j]||boardNum[i-1][j]===0){
                    return true;
                }  
            }
        }    
    }
    return false;
}  

function rightAvailable(){
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(boardNum[i][j]!==0){
                if(boardNum[i][j]===boardNum[i][j+1]||boardNum[i][j+1]===0){
                    return true;
                }
            }
        }  
    }
    return false;
}

function downAvailable(){
    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            if(boardNum[i][j]!==0){
                if(boardNum[i][j]===boardNum[i+1][j]||boardNum[i+1][j]===0){
                    return true;
                }
            }
        }  
    }
    return false;
}

function leftAvailable(){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(boardNum[i][j]!==0){
                if(boardNum[i][j]===boardNum[i][j-1]||boardNum[i][j-1]===0){
                    return true;
                }
            }
        }  
    }
    return false;
}

//移动动画
function moveAnimation(fromX,fromY,toX,toY){
    var $numCell=$("#num-cell-"+fromX+"-"+fromY);
    $numCell.animate({
        top:posTop(toX,toY)+"px",
        left:posLeft(toX,toY)+"px"
    },300)
}





















