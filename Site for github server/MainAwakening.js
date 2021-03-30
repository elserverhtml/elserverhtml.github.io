function MainAwakening () {
    $("header").css("transform", "translateY(72px)");
    setTimeout(function () {
        $(".pageName").css("transform", "translateY(72px)");
    }, 130);
    
    var posters = $(".poster");
    
    setTimeout(function () {
        posters.eq(1).css("opacity", "1");
    }, 450);
    setTimeout(function () {
        posters.eq(0).css("opacity", "1");
    }, 500);
    setTimeout(function () {
        posters.eq(2).css("opacity", "1");
    }, 550);
    setTimeout(function () {
        $(".greeting").css("textShadow", "#00beff 0 0 15px");
    }, 600);
};

$(function(){
    $(".poster").click(function () {
        var i = Number.parseInt(this.dataset.num);
        console.log(i);
        $(".sh-wallWindows").css("display", "flex");
        $(".sh-poster").eq(i).css("visibility", "visible");
        
        $(this).css("visibility", "hidden");
        
        if(i === 0) $(".wallWindows").eq(0).css("transform", "translateX(100%)");
        else if(i === 2) $(".wallWindows").eq(0).css("transform", "translateX(-100%)");
        else if(i === 1) {
            $(".poster").eq(0).css("transform", "skewX(-30deg) translateX(-50vw)");
            $(".poster").eq(2).css("transform", "skewX(-30deg) translateX(50vw)");
        }
        
        for(let a = 0; a < 3; a++) {
            if(a === i) {
                setTimeout(function(){
                    $(".sh-poster").eq(a).css("width", "60%");
                }, 300);
            } else {
                setTimeout(function(){
                    $(".sh-poster").eq(a).css("width", "0");
                }, 150);
            }
        }
        
        $(".greeting").css("text-shadow", "#00beff 0 0 0");
        setTimeout(function(){
            $(".greeting").css("transform", "translateY(0)");
        }, 500);
        
        setTimeout(function() {
            if(i === 0) transformArduino();
//            else if(i === 1) transformCPP();
//            else transformWeb();
        }, 1000);
    });
});

function transformArduino() {
    $(".pageName").text("Arduino");
    $("body").addClass("ArduinoBody");
    $("header").addClass("ArduinoHeader");
    $(".pageLogo").addClass("ArduinoLogo");
    $(".pageName").addClass("ArduinoName");
    setTimeout(function() {
        $(".sh-wallWindows").css("opacity", "0");
    }, 600);
    setTimeout(function() {
        $(".sh-wallWindows").css("display", "none");
        ArduinoAwakening();
    }, 900);
};























