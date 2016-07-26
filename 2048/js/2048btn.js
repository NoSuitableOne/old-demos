//重新开始
$('#restart').on('click',function(){
    emptyGridCellPos=[/*'0,0','0,1',...,'3,2','3,3'*/];
    score=0;
    isLocked=false;
    
    boardNum=new Array(/*2,4,0,0...8,0,0,4*/);
    isAdded=new Array(/*false,true,...false,false*/);

    for(var i=0;i<4;i++){
        boardNum[i]=[];
        isAdded[i]=[];
        for(var j=0;j<4;j++){
            boardNum[i][j]=0;
            isAdded[i][j]=false;
        }
    }
    
    $score.text(score);
    $(".gameover-page").fadeOut(1000);
    $(".descript-page").fadeOut(1000);
    $('.board-page').fadeIn(100);
    
    init();
})

//弹出说明
$("#descript").on("click",function(){
    isLocked=true;
    $(".descript-page").slideDown(600);
})
//继续游戏
$("#resume").on("click",function(){
    isLocked=false;
    $(".descript-page").slideUp(600);
})

//绑定键盘移动事件
$(window).on("keydown",function(event){
    //上锁，防止连续按键
    if(isLocked){
        return;
    }
    isLocked=true;
    switch (event.keyCode){
        case 38:
            if(upAvailable()){
                moveUp();
            }    
        break;
        case 87:
            if(upAvailable()){
                moveUp();
            }    
        break;
        case 39:
            if(rightAvailable()){
                moveRight();
            }    
        break;
         case 68:
            if(rightAvailable()){
                moveRight();
            }    
        break;
        case 40:
            if(downAvailable()){
                moveDown();
            }    
        break;
        case 83:
            if(downAvailable()){
                moveDown();
            }    
        break;
        case 37:
            if(leftAvailable()){
                moveLeft();
            }    
        break;
        case 65:
            if(leftAvailable()){
                moveLeft();
            }    
        break;
        default: 
        break;
    }
})

//解锁
$(window).on("keyup",function(event){
    switch (event.keyCode){
        case 38:
            isLocked=false;    
        break;
        case 87:
            isLocked=false;    
        break;
        case 39:
            isLocked=false;     
        break;
        case 68:
            isLocked=false;     
        break;
        case 40:
            isLocked=false;      
        break;
        case 83:
            isLocked=false;      
        break;
        case 37:
            isLocked=false;     
        break;
        case 65:
            isLocked=false;     
        break;
        default: 
        break;
    }
})
