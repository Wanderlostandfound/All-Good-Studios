function loaded () {

  // Fade out the loading div
  $('body').addClass('loaded');

  // Hide the loading div
  setTimeout(function(){
    $('#loading').hide();
  }, 4000);
}

$(window).on('load', loaded);


// $(".stick-in-parent").stick_in_parent();
