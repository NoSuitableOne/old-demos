var isLocked = false,
    imgUrl = [
                "DiaDosNamorados_ZH-CN10966266512_1920x1080.jpg",
                "QuaiBranlyMuseum_ZH-CN10941225231_1920x1080.jpg",
                "ReichstagDome_ZH-CN9358724121_1920x1080.jpg",
                "TerracesSunrise_ZH-CN11993554223_1920x1080.jpg",
        		"SchonbrunnPalace_ZH-CN11907034371_1920x1080.jpg",
        		"HurricaneRidgeTiger_ZH-CN11087235010_1920x1080.jpg"
            ];

function setBg(imgIdx) {
    var $bgImg = $("#bg"),
        winH = $(window).height(),
        bgImgUrl = "url('img/" + imgUrl[imgIdx] + "')";

    $bgImg.css({
        "background-image": bgImgUrl,
        "top": "40px",
        "height": winH - 80

    });

    if (imgIdx === 0) {
        $("#left").addClass("arrow-end");
        return;
    } else if (imgIdx === 5) {
        $("#right").addClass("arrow-end");
        return;
    } else {
        $("#left").removeClass("arrow-end");
        $("#right").removeClass("arrow-end");
        return;
    }
}

$(".arrow").on("mouseenter", function (event) {
    var $target = $(event.target),
        imgIdx = $("#bg").data("img");
    if (imgIdx === 0) {
        if ($target.attr("id") === "left") {
            return;
        }
    }
    if (imgIdx === 5) {
        if ($target.attr("id") === "right") {
            return;
        }
    }
    $target.addClass("arrow-hover");
})

$(".arrow").on("mouseleave", function (event) {
    var $target = $(event.target),
        imgIdx = $("#bg").data("img");
    $target.removeClass("arrow-hover");
})

$("#left").on("click", function (event) {
    var $target = $(event.target),
        imgIdx = $("#bg").data("img");

    if (isLocked) {
        return;
    }
    if (imgIdx === 0) {
        return;
    }
    isLocked = true;
    imgIdx -= 1;
    setBg(imgIdx);
    $("#bg").data("img", imgIdx);
    isLocked = false;
})

$("#right").on("click", function (event) {
    var $target = $(event.target),
        imgIdx = $("#bg").data("img");

    if (isLocked) {
        return;
    }
    if (imgIdx === 5) {
        return;
    }
    isLocked = true;
    imgIdx += 1;
    setBg(imgIdx);
    $("#bg").data("img", imgIdx);
    isLocked = false;
})
