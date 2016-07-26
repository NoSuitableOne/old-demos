//设置棋盘格
function setGridCell(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var $gridCell=$("#grid-cell-"+i+"-"+j);
            $gridCell.css({
                        'left':posLeft(i,j)+'px',
                        'top':posTop(i,j)+'px',
                        'visibility':'visible'
                    })
        }    
    }
}

//棋盘定位函数
function posLeft(i,j){
    return 16*(j+1)+90*j; 
}

function posTop(i,j){
    return 16*(i+1)+90*i; 
}

//棋盘实时更新
function refreshBoardView(){
    var newBoard="";
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            newBoard+="<div class='num-cell' id='num-cell-"+i+"-"+j+"' ";
            newBoard+="style='left:"+posLeft(i,j)+"px; ";           
            newBoard+="top:"+posTop(i,j)+"px; ";
            newBoard+=numCellCss(boardNum[i][j])+"'>"
            newBoard+=boardNum[i][j];
            newBoard+="</div>";
            isAdded[i][j]=false;
        }
    }
    $('.num-cell').remove();
    $board.append(newBoard);
}

//对应数字的UI
function numCellCss(num){
    switch (num) {
        case 0:
            return('opacity:0; z-index:8 ');
            break;
        case 2:
            return('opacity:1; background-color:#f92929; z-index:9');
            break;
        case 4:
            return('opacity:1; background-color:#ff6347; z-index:9');
            break;
        case 8:
            return('opacity:1; background-color:#ee5c42; z-index:9');
            break;
        case 16:
            return('opacity:1; background-color:#ed1b1b; z-index:9');
            break;
        case 32:
            return('opacity:1; background-color:#ff8247; z-index:9');
            break;
        case 64:
            return('opacity:1; background-color:#ee4000; z-index:9');
            break;
        case 128:
            return('opacity:1; background-color:#ee2c2c; z-index:9');
            break;
        case 256:
            return('opacity:1; background-color:#da463e; z-index:9');
            break;
        case 512:
            return('opacity:1; background-color:#ef430f; z-index:9');
            break;
        case 1024:
            return('opacity:1; background-color:#cd4f39; z-index:9');
            break;
        case 2048:
            return('opacity:1; background-color:#cd0000; z-index:9');
            break;
        case 4096:
            return('opacity:1; background-color:#a52a2a; z-index:9');
            break;
        case 8192:
            return('opacity:1; background-color:#ee3b3b; z-index:9');
        break;
        default:
        return('background-color:#eee685;');
        break;
    }
}