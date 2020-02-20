
$(document).ready(function(){
    $(window).scroll(function(){
    if($(this).scrollTop()>200)
    {
        $(".scroll-button").fadeIn(400);
    }
    else
    $(".scroll-button").fadeOut(400);
    
    
    });
    $(".scroll-button").click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000)
    });

    });