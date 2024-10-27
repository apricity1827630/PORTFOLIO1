const firebaseConfig = {
  apiKey: "AIzaSyDWgXqI702m5kLzDTtVr153StWU4I8m3uo",
  authDomain: "pintura-81b5f.firebaseapp.com",
  databaseURL: "https://pintura-81b5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pintura-81b5f",
  storageBucket: "pintura-81b5f.appspot.com",
  messagingSenderId: "86539175477",
  appId: "1:86539175477:web:a8619617885fcace6d937c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

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

