// $(function(){
    $('.carousel').carousel({
        interval: 3000
    });
// })
$(function(){
    $(".head .head-nav .togg-sm").click(function(){
        $(this).next("ul").slideToggle(1500)
    })
})
$(".head .head-nav ul > li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $("html,body").animate({
        scrollTop: $($(this).data("target")).offset().top
    },1000)
})