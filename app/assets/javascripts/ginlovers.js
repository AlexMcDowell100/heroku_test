/*$(document).ready(function(){
    $('#present').mouseenter(function(){
        alert("MouseEnter!"); // This will create an alert box
        console.log("MouseEnter!"); // This will log to the JS console on your browser which is a bit nicer to read than alerts, you do not need both, just preference
        $(this).fadeIn('fast',1);
    })
    $('#present').mouseleave(function(){
        alert("MouseLeave!"); // This will create an alert box
        console.log("MouseLeave!");
        $(this).fadeIn('fast',0.5);
    })
});*/



$(document).ready(function() {
  $(document).mousemove(function(e) {
    $("#play_button").stop().animate({
      left: e.pageX - 40,
      top: e.pageY - 40
    });
    console.log('loaded');
  });

  $("#menu").click(function() {
    $('.new_menu').toggleClass('new_menu-active');
  });


  $("#circle").hover(function() {


    $("#play_button").show(); //Show tooltip
  }, function() {
    $("#play_button").hide(); //Hide tooltip
  })

  $("#video2").click(function() {
    $('.transform').toggleClass('transform-active');
    $('.hide').toggleClass('hide-active');
    $('.hidden').toggleClass('not-hidden');
    setTimeout(function() {
      $('#box').html('<iframe class="grid-video grid-video--hide" src="https://www.youtube.com/embed/g3Ed4SXiqzs?rel=0&autoplay=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    }, 1000);

    setTimeout(function() {
      $('.grid-video').removeClass('grid-video--hide');
    }, 1000);

  });

  $("#close").click(function() {
    $('.transform').removeClass('transform-active');
    $('.hide').removeClass('hide-active');
    $('.hidden').removeClass('not-hidden');
    $('.grid-video').remove();
  });

});




document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('load').style.visibility = "hidden";
      document.getElementById('contents').style.visibility = "visible";
    }, 1000);
  }
}
