$(function () {
  //gnb(=nav)에 마우스가 올라가면 bfGnb영역과depth2메뉴여영역이 나타남.
  //$('selector')method () /$('selector').on('mouseevent')
  /* $('.gnb').on('mouseover focusin',function(){
    $('.bgGnb').slideDown();
    $('.gnb .sub').slideDown(200);     
  });
  $('.bgGnb').on('mouseleave' , function()
  {
    $(this).slideUp(150);
    $('.gnb .sub').slideUp(150);
  })
}); */
  $('.menu').on('click', function () {
    $(this).addClass('on');
    //css에서 미리 선언해놓은 클래스명을 추가
    //클래스 추가되는 것이므로 (.)을 붙이지 않음
    $('.gnb').animate({
      left: 0
    })
  });
  $('.gnb').on('click', function () {
    $('.menu').removeClass('on')
    $('.gnb').animate ({
      left: '-100%'
    })
  })
})