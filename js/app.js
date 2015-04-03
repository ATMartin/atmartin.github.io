$(document).ready(function() {

//Panel Accordion / Fade 
var activePanel;
var toggles = $('.toggle');
var header = $('.menu-header');

var stateActive = {
  'opacity': 1,
  'pointer-events': 'auto'
};

var stateHidden = {
  'opacity': 0,
  'pointer-events': 'none'
}
  
$('.toggle').on('click', function() { 
  activePanel = $(this);
  toggles.css(stateHidden);
  header.css(stateHidden);
  activePanel.next().css(stateActive);
  $('.close-panel').show();
});

$('.close-panel').on('click', function(e) {
  activePanel.next().css(stateHidden);
  toggles.css(stateActive).show();
  header.css(stateActive);
  $(this).hide();
  activePanel = null;
});  

});
