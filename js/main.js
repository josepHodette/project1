$(document).ready(function(){
    $("#gnb>li").on("mousemove",function(){
        $(".submenu").stop().slideDown(500);
    });
    $("#gnb>li").on("mouseleave",function(){
        $(".submenu").stop().slideUp(500);
    });

})