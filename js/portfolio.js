/* 스타일1 gnb */
$(document).ready(function () {
  $(".btnmenu").click(function () {
    $(".menu_drop").slideToggle();
    if ($(this).hasClass("rotated")) {
      $(this).css({
        "transform": "rotate(0deg)",
        "background-position": "0"
      });
     
      $(".btn_opner").css("color", "white");
      $(".btn_EN").css("color", "white");
      $(".gnb_box a").css("color", "white");
      $(".gnbutil").css("color", "white");
      $(".btn_drop").css({ "color": "white", "border-color": "white" })
      $(".hd_search").attr("src", "img/ico_search_white.png");
      $(".logo").css("background-position", "0 0");
      $(".btn_opner").removeClass("black")
      $(".main_left").css("display", "block");
      $(".scroll_ico").css("display", "block");
      $(".main_left ul .left6").removeClass("on")
      $(this).removeClass("rotated");
    } else {
      $(this).css({
        "transform": "rotate(20deg)",
        "background-position": "-30px"
      });
  
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "none");
      $(".scroll_ico").css("display", "none");
      $(this).addClass("rotated");
    }
  });
  // btn_close 클릭시 메뉴 닫기
  $(".btn_close").click(function () {
    $(".menu_drop").slideUp();
    $(".btnmenu").css({
      "transform": "rotate(0deg)",
      "background-position": "0"
    });
    $(".main_left").css("display", "block");
  
    $(".btn_opner").css("color", "white");
    $(".btn_EN").css("color", "white");
    $(".gnb_box a").css("color", "white");
    $(".gnbutil").css("color", "white");
    $(".btn_drop").css({ "color": "white", "border-color": "white" })
    $(".hd_search").attr("src", "img/ico_search_white.png");
    $(".logo").css("background-position", "0 0");
    $(".btn_opner").removeClass("black")
    $(".btnmenu").removeClass("rotated");
  });
});

/* 스타일2 gnb */
$(document).ready(function () {
  $(".btnblack").click(function () {
    $(".menu_drop").slideToggle();
    if ($(this).hasClass("st2")) {
      $(this).css({
        "transform": "rotate(0deg)",
        "background-position": "-36px"
      });

      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "block");
      $(this).removeClass("st2");
    } else {
      $(this).css({
        "transform": "rotate(20deg)",
        "background-position": "-36px"
      });
    
      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".main_left").css("display", "none");
      $(this).addClass("st2");
    }
  });

  // btn_close 클릭시 메뉴 닫기
  $(".btn_close2").click(function () {
    $(".menu_drop").slideUp();
    $(".btnblack").css({
      "transform": "rotate(0deg)",
      "background-position": "-36px"
    });
    $(".main_left").css("display", "block");

    $(".btn_opner").css("color", "black");
    $(".btn_EN").css("color", "black");
    $(".gnb_box a").css("color", "black");
    $(".gnbutil").css("color", "black");
    $(".btn_drop").css({ "color": "black", "border-color": "black" })
    $(".hd_search").attr("src", "img/ico_search_black.png");
    $(".logo").css("background-position", "0 -60px");
    $(".btn_opner").addClass("black")
    $(".btnmenu").addClass("st2");
  });
});

// 상단 KR 버튼을 누르면 EN이 나오게하기
$(function () {
  $('.btn_opner').on('click', function () {
    $('.btn_EN').toggleClass('active')
  })
})
$(document).ready(function () {
  $('.selecthotel').click(function () {
    $('.hotel_list').slideDown();
    $('.selectRoom').css("bottom", '15%')
  });
  $('.hotel_close').click(function (event) {
    event.stopPropagation(); // 이벤트 전파 중지
    $('.hotel_list').slideUp();
    $('.selectRoom').css("bottom", "30%")
  })
});

// 텍스트가 서서히 나타나게하기
document.addEventListener("DOMContentLoaded", function () {
  var text = document.querySelector(".main_text");
  var room = document.querySelector(".selectRoom")
  text.classList.add("show");
  room.classList.add("show")
});

/* //main_left 클릭시 화면 이동
$(document).ready(function ($) {
  $(".panel").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

}); */

//타입2 영역
$(document).ready(function () {
  var type2Section = $(".type2");

  ScrollTrigger.create({
    trigger: type2Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".btnblack").css("background-position", "-36px");

      $(".btn_opner").css("color", "black");
      $(".btn_EN").css("color", "black");
      $(".gnb_box a").css("color", "black");
      $(".gnbutil").css("color", "black")
      $(".btn_drop").css({ "color": "black", "border-color": "black" })
      $(".hd_search").attr("src", "img/ico_search_black.png");
      $(".logo").css("background-position", "0 -60px");
      $(".btn_opner").addClass("black")
      $(".scroll_ico").css("display", "none");
      $(".main_left ul .left2").addClass("on");
      $(".main_left ul .left1").removeClass("on")
      $(".left_box").addClass("st1")

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "block")
      $(".btnblack").css("display", "none")
      $(".btn_close").css("display", "block")
      $(".btn_close2").css("display", "none")
      $(".btnblack").css("background-position", "0");

      $(".btn_opner").css("color", "white");
      $(".btn_EN").css("color", "white");
      $(".gnb_box a").css("color", "white");
      $(".gnbutil").css("color", "white");
      $(".btn_drop").css({ "color": "white", "border-color": "white" })
      $(".hd_search").attr("src", "img/ico_search_white.png");
      $(".logo").css("background-position", "0 0");
      $(".btn_opner").removeClass("black")
      $(".scroll_ico").css("display", "block");
      $(".main_left ul .left2").removeClass("on");
      $(".main_left ul .left1").addClass("on")
      $(".left_box").removeClass("st1")
    }
  });
});

/* 타입3 */
$(document).ready(function () {
  var type3Section = $(".type3");

  ScrollTrigger.create({
    trigger: type3Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left3").addClass("on");
      $(".main_left ul .left2").removeClass("on")
      $(".left_box").addClass("st1")

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "none")
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left3").removeClass("on");
      $(".main_left ul .left2").addClass("on")
      $(".left_box").removeClass("st1")
    }
  });
});

/* 타입4 */
$(document).ready(function () {
  var type4Section = $(".type4");

  ScrollTrigger.create({
    trigger: type4Section,
    start: "top center",
    onEnter: function () {
      $(".btnmenu").css("display", "none")
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left4").addClass("on");
      $(".main_left ul .left3").removeClass("on")
      $(".left_box").addClass("st1")
      $(".club_box").css("opacity", "1");

    },
    onLeaveBack: function () {
      $(".btnmenu").css("display", "none")
      $(".btnblack").css("display", "block")
      $(".btn_close").css("display", "none")
      $(".btn_close2").css("display", "block")
      $(".main_left ul .left4").removeClass("on");
      $(".main_left ul .left3").addClass("on")
      $(".left_box").removeClass("st1")
      $(".club_box").css("opacity", "0");
    }
  });
});




//family site 클릭시 메뉴 슬라이드 업
$(function(){
  $('.btn_family').on('click',function(){
    $('.item_list').slideToggle();
    $(this).find('img').attr('src', function(index, attr) {
      return attr === 'img/chevron-down.png' ? 'img/chevron-up.png' : 'img/chevron-down.png';
    });
  })
})
