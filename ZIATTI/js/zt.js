$(function () {
    //gnb(=nav)에 마우스가 올라가면 bgGnb영역과 .sub(depth2) 메뉴 영역이 나타남.
    //$('selector').method() / $('selector').on('mouseevent')
    $('.gnb > ul').on('mouseover focusin', function () {
       $(".bgGnb").css("display", "block");
       /*   $(".logo_b").css("display", "block");
        $(".color").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".login_w").css("display", "none");
        $(".login_b").css("display", "block"); */
        $('.bgGnb').stop().slideDown(300);
        $('.sub').stop().slideDown(300);
    });
    $('.bgGnb').on('mouseout', function () {
        $(this).stop().slideUp(300);
        $('.sub').stop().slideUp(350);
    })
});