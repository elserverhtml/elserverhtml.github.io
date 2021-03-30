function ArduinoAwakening () {
    $("header").css("transform", "translateY(72px)");
    setTimeout(function () {
        $(".pageName").css("transform", "translateY(72px)");
        $(".pageLogo").css("transform", "translateY(72px)");
    }, 130);
    
    setTimeout(function () {
        $(".grid").css("opacity", "1");
    }, 250);
    
    setTimeout(function () {
        $(".ArduinoName").css("textShadow", "white 0 0 15px");
        $(".ArduinoLogo").css("filter", "drop-shadow(0 0 5px white)");
    }, 500);
};