//swiper
const swiper = new Swiper(".recommand_pic", {
    // Optional parameters
    //direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    
});
var swiper1 = new Swiper(".thema_list", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
var swiper2 = new Swiper(".size_list", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


//색상 추천
$('.color_list a').click(function () {
    var clickedElementHTML = $(this).html();
    $('.reset .color_box').html(clickedElementHTML);
    $('.reset ').fadeIn();
});

//테마 추천
$('.thema_list a').click(function () {
    var clickedElementHTML = $(this).html();
    $('.reset .thema_box ').html(clickedElementHTML);
    $('.reset ').fadeIn();
});

//사이즈 추천

$('.size_list a').click(function () {
    var clickedElementHTML = $(this).html();
    $('.reset .size_box').html(clickedElementHTML);
    $('.reset ').fadeIn();
});

 
$(".btnDle").click(function () {
    // Hide the content inside the reset section
    $(".color_box, .thema_box, .size_box").empty();
});


$(".btnClose").click(function () {
    // Hide the content inside the reset section
    $(".thema_box").empty();
});

    $(document).on("click","#likeOption", function(){
       $(this).toggleClass('on');
    });
    $(document).on("click","#cartOption", function(){
       $(this).toggleClass('on');  
    });

