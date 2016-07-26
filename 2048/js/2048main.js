var $board=$("#board"),
    emptyGridCellPos=[/*'0,0','0,1',...,'3,2','3,3'*/],
    score=0,
    $score=$('#score'),
    $record=$('#record'),
    isLocked=false;



var boardNum=new Array(/*2,4,0,0...8,0,0,4*/),
    isAdded=new Array(/*false,true,...false,false*/);
for(var i=0;i<4;i++){
    boardNum[i]=[];
    isAdded[i]=[];
    for(var j=0;j<4;j++){
        boardNum[i][j]=0;
        isAdded[i][j]=false;
    }
}

function game(){
    init();
}

//初始化游戏
function init(){
    setRecord();
    //放置棋子，赋值0
    setGridCell();
    //随机给两个棋子初始值
    createNum();
    createNum();
}

//设置得分记录
function setRecord(){
	if(localStorage.getItem("record")!==null){
		record=parseInt(localStorage.getItem("record"));
	}else{
    	localStorage.setItem("record","0");
	}
    $record.text(record);
}

//产生新数字
function createNum(){
    checkBoardEmpty();
    
    if(emptyGridCellPos.length!==0){
        var n=Math.floor(Math.random()*emptyGridCellPos.length),
            i=parseInt(emptyGridCellPos[n].split(',')[0]),
            j=parseInt(emptyGridCellPos[n].split(',')[1]);
            
        boardNum[i][j]=setInitNum();
        refreshBoardView();
    }
}

//回合结算
function roundEnd(){
    $board.remove(".num-cell");
    refreshBoardView();
    $score.text(score);    
    if(record<score){
        record=score;
        $record.text(record);
        localStorage.setItem("record",record);
    }
    createNum();
    if(isGameover()){
        gameover();
    }
}

//游戏结束
function gameover(){
    setTimeout(function(){
        $(".board-page").fadeOut();
        $(".gameover-page").fadeIn();    
    },1500)  
}







   

