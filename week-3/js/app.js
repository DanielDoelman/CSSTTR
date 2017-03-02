(function($){
  var ico = $('<i class="fa fa-caret-right"></i>');
  $('nav#menu li:has(ul) > a').append(ico);

  $('a#toggle').on('click',function(e){
    $('html').toggleClass('open-menu');
    return false;
  });
})(jQuery)
