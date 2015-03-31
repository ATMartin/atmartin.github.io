$(document).ready(function() {

//Panel Accordion / Fade 
var activePanel;
var menuHeight = $('.menu-nav').height();
var menuTop = $('.menu-nav').offset().top;
  
$('.toggle').on('click', function() { 
  activePanel = $(this);
  activePanel.toggleClass('toggled');
  $('.toggle').css('opacity', '0');
  activePanel.next().css({'opacity':'1', 'pointer-events': 'auto'});
  $('.close-panel').css('opacity', '1');
});

$('.close-panel').on('click', function(e) {
  activePanel.toggleClass('toggled');
  activePanel.next().css({'opacity': '0', 'pointer-events': 'none'});
  $('.toggle').css('opacity', '1').show();
  $(this).css('opacity', '0');
});  

});
