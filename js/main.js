$(document).ready(function () {
    /* popup */
    // var popLi = $(".web_list li");
    // $(".popup_base").height($(document).height());
    // popLi.click(function (event) {
    //     var index = $(this).index() + 1;
    //     $(window).scrollTop(0);
    //     $(".popup" + index).show();
    //     event.preventDefault();
    // });
    // $(".btn_xpop").click(function (event) {
    //     $(this).parents(".popup_base").hide();
    //     event.preventDefault();
    // });

    /* visual_pc */
    var idx = 0;
    var isOn = true;
    var check = true;
    var visRoll;
    $(".viewImgList li:not(:first)").hide();

    function rplay() {
        if (!isOn) {
            isOn = true;
            visRoll = setInterval(function () {
                idx++;
                if (idx > $(".seq").length - 1) {
                    idx = 0;
                }
                $(".seq").eq(idx).trigger("click");
            }, 2000);
        }

    }
    function rstop() {
        if(isOn){
            isOn = false;
            clearInterval(visRoll);
            if(check){
                rplay();  
            }            
        }
    }
    $(".seq").click(function () {
        var thisImg = $(this).find("img");
        var allImg = $(".seq").find("img");
        idx = $(this).index();
        check = true;
        rstop();
        allImg.each(function () { /* 버튼 전체 이미지 초기화 */
            $(this).attr("src", $(this).attr("src").replace("on", "off"));
        });
        thisImg.attr("src", thisImg.attr("src").replace("off", "on")); /*자신의 이미지 변경*/
        $(".viewImgList li:visible").stop().fadeOut(500);
        $(".viewImgList li").eq(idx).stop().fadeIn(500);
        return false;
    });

    $(".rollStop").click(function () {
        check = false;
        rstop();
        $(this).hide();
        $(".rollPlay").show().css("display", "inline-block");
    });
    $(".rollPlay").click(function () {
        check = true;
        rplay();
        $(this).hide();
        $(".rollStop").show().css("display", "inline-block");
    });
    $(".seq").eq(0).trigger("click");
    rplay();

});
