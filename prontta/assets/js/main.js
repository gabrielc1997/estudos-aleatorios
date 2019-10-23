

$('.desk').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: 1500,

});


$('.main-interno').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: 6000,
    adaptiveHeight: true

});


$('.nav-interno').flickity({
    // options
    asNavFor: '.main-interno',
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
});


$('#about-panel-carousel').carousel({
    interval: false
});



var $containerWidth = $(window).width();
if ($containerWidth <= 992) {
  $('.main-home').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: false,
    adaptiveHeight: true,
    draggable: false
  });

  $('#modalcontato').on('hidden.bs.modal', function (e) {
    e.preventDefault();

    $("nav").removeClass("nav-shadow");
    $(".btn-nav").removeClass("on");
    $(".btn-nav").addClass("off");
  })

  $('#modalcontato').on('shown.bs.modal', function (e) {
    e.preventDefault();

    $("nav").addClass("nav-shadow");
    $("#collapsibleNavId").collapse('show');
    $(".btn-nav").removeClass("off");
    $(".btn-nav").addClass("on");
  })

  $(document).on('click', '.effect-menu .off', function (e) {
    e.preventDefault();

    $("nav").addClass("nav-shadow");
    $("#modalcontato").modal('hide');

    $(this).removeClass('off');
    $(this).addClass('on');
  });

  $(document).on('click', '.effect-menu .on', function (e) {
    e.preventDefault();

    $("nav").removeClass("nav-shadow");
    $("#modalcontato").modal('hide');
    $("#collapsibleNavId").collapse('hide');

    $(this).addClass('off');
    $(this).removeClass('on');
  });
} else {
  $('.main-home').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: 6000,
    adaptiveHeight: true,

});
}

  // $(document).ready(function(){
  //   $(".comofuncionaa").on('click', function(event) {
  //     if (this.hash !== "") {
  //       event.preventDefault();
  //       var hash = this.hash;
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 800, function(){
  //         window.location.hash = hash;
  //       });
  //     }
  //   });
  // });
  
$('.nav-link').click(function () { 
  $(this).toggleClass('green-box');
  $('.close').css('background', 'none');
  $('.close div').css('background', 'transparent');
  $('.close div').css('background', 'transparent');
});


(function () {
  function getSlideParameter(key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
      var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
      var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
      if (Math.floor(slide) == slide && $.isNumeric(slide))
          return parseInt(slide);
      else
          return 0;//if 'slide' parameter is not present or doesn't have correct values load 0th slide
  }
  $('#about-panel-carousel').carousel(getSlideParameter('slide'));
})();



$('.dropdown-toggle').click(function () { 
  $('#modalcontato').modal('hide');
  
});



$("form#form-contato").on("submit", function(event) {
  event.preventDefault();
  var serializeDados = $("#form-contato").serialize();
  console.log(serializeDados);
  $.ajax({
      type: "POST",
      url: "sendmail.php",
      data: serializeDados,
      dataType: 'json',
      success: function() {
        $('#modalcontato').modal('hide');
        $('.success').modal('show');
      },
      error: function() {
        $('#modalcontato').modal('hide');
        $('.success').modal('show');
      }
  });
});

$("form#form-contato-box").on("submit", function(event) {
  event.preventDefault();
  var serializeDados = $("#form-contato-box").serialize();
  console.log(serializeDados);
  $.ajax({
      type: "POST",
      url: "sendmail.php",
      data: serializeDados,
      dataType: 'json',
      success: function() {
        $('#modalcontato').modal('hide');
        $('.success').modal('show');
      },
      error: function() {
        $('#modalcontato').modal('hide');
        $('.success').modal('show');
      }
  });
});


  









