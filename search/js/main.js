window.onload = function () {
    setBg($("#bg").data("img"));
    setCover();

    $(window).on("resize", function () {
        setBg($("#bg").data("img"));
        setCover();
    })

    function setCover() {
        var $cover = $(".cover"),
            winH = $(window).height();
        $cover.css({
            top: "0",
            height: winH - 80
        })
    }

    $(".search-text").on("keyup", function () {
        $.ajax({
            url: "http://api.bing.com/qsonhs.aspx?type=cb&q=" + $(".search-text").val(),
            type: "GET",
            cache: "false",
            dataType: "jsonp",
            jsonp: "cb",
            success: function (res) {
                if (res.AS.FullResults === 0) {
                    return;
                }
                var len = res.AS.Results[0].Suggests.length,
                    domLis = "";
                for (var i = 0; i < len; i++) {
                    domLis += "<li role='option' url='";
                    domLis += res.AS.Results[0].Suggests[i].Url + "' ";
                    domLis += ">"
                    domLis += res.AS.Results[0].Suggests[i].Txt;
                    domLis += "</li>";
                }
                $(".search-smart-list").html(domLis).show();
            },
            error: function () {
                return;
            }
        })
    })

    $(".search-smart-list").on("click", "li", function (event) {
        var searchWord = $(event.target).text();
        $(".search-smart-list").hide();
        $(".search-text").val(searchWord);
        location.href = "http://cn.bing.com/search?q=" + $(".search-text").val();
    })

    $(document).on("click", function () {
        $(".search-smart-list").hide();
    })

    $(".search-text").on("focus", function () {
        $(".cover").show();
    })
    $(".search-text").on("blur", function () {
        $(".cover").hide();
    })

}
