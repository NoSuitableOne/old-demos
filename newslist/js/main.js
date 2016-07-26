var $btn = $('.btn'),
    cur = 3,
    isLocked = false;

$(".news").on("mouseenter mouseleave", ".content-ct", function(){
    $(this).toggleClass('bg-active');
    $(this).children().toggleClass('text-active');
})

$(".news").on("dblclick",".content-ct",function(){
    $(this).css({
            "-webkit-animation-name": "shakemove",
            "-webkit-animation-duration": "1s",
            "-webkit-animation-timing-function": "linear",
            "-webkit-animation-iteration-count":1,
            "-moz-animation-name": "shakemove",
            "-moz-animation-duration": "1s",
            "-moz-animation-timing-function": "linear",
            "-moz-animation-iteration-count":1,
            "-o-animation-name": "shakemove",
            "-o-animation-duration": "1s",
            "-o-animation-timing-function": "linear",
            "-o-animation-iteration-count":1,
            "animation-name": "shakemove",
            "animation-duration": "1s",
            "animation-timing-function": "linear",
            "animation-iteration-count":1
        });
})

$(".news").on("webkitAnimationEnd",".content-ct",function(){
    $(this).attr("hidden","hidden");
})
$(".news").on("animationend",".content-ct",function(){
    $(this).hide();
})

loadMore();

$btn.on("click",function(){
    loadMore();
})

function loadMore() {
    if (isVisible($btn)) {
        getAjax();
    }
}

$(window).on('scroll', function() {

    var clock = true;

    if (clock) {
        clearTimeout(clock);
    }
    clock = setTimeout(function() {
        if (isVisible($btn)) {
            if (isLocked) {
                return;
            } else {
                getAjax();
            }
        };
    }, 200)
})

function isVisible($node) {
    var scroll = $(window).scrollTop(),
        offsetTop = $node.offset().top,
        winH = $(window).height();

    if (offsetTop <= winH + scroll) {
        return true;
    } else {
        return false;
    }
}

function getAjax() {

    isLocked = true;

    $btn.text('')
        .css({
            backgroundImage: "url(img/wait.gif)",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '50%'
        });

    $.ajax({
        url: '3.php',
        methods: 'GET',
        dataType: 'json',
        cache: 'false',
        data:{
            start: cur,
            len: 6
        },
        success: function(ret) {
            success(ret);
        },
        error: function() {
            error();;
        },
        complete: function() {
            compelete();
        }
    });
}

function success(ret) {
    if (ret.status == 1) {
        for (var j = 0; j < ret.data.length; j++) {
            var $li = $("<li class='content-ct'></li>");
            $li.append($("<p class='content'>" + ret.data[j] + "</p>"));
            $('ul').append($li);
        }
        cur += 6;
    } else {
        $btn.removeAttr('style').text("没有数据");
    }
}

function error() {
    $btn.removeAttr('style').text('网络异常');
}

function compelete() {
    isLocked = false;
    setTimeout("$btn.removeAttr('style').text('加载更多')",3000);
}