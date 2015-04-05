$(document).ready(function() {

//**************** MENU & PANELS ***************
var activePanel;
  
$('.toggle').on('click', function() { 
  activePanel = $(this);
  $('.menu-header').css({'opacity': 0, 'pointer-events': 'none'});
  $('.toggle').css({'opacity': '0', 'pointer-events': 'none'});
  activePanel.next().css({'opacity':'1', 'pointer-events': 'auto'});
  $('.close-panel').css('opacity', '1').show();
});

$('.close-panel').on('click', function(e) {
  activePanel.next().css({'opacity': '0', 'pointer-events': 'none'});
  $('.toggle').css({'opacity': '1', 'pointer-events': 'auto'} );
  $('.menu-header').css({'opacity': 1, 'pointer-events': 'auto'});
  $(this).css('opacity', '0').hide();
});

//************* PORTFOLIO PRESENTER *************  
var currentPortfolio = 0;
portfolios = [
  {
    title: "Safemeet",
    img: "img/app-safemeet.png",
    info: "Application aimed at making it easy to find local spots for safe buy/sell/trade of goods with private parties. Useful for Craigslist, EBay or any other online marketplace. Ember & SASS frontend, custom Ruby on Rails backend with Heroku hosting & Twilio integration. <br><a href='http://atmartin.io/TIY-Safemeet/' target='_blank'>Live demo</a> (try searching zip code '29607' for some preloaded locations!)."
  },
  {
    title: "Notecards",
    img: "img/app-notecards.png",
    info: "A quick & dirty project management board. Provides an intuitive interface to create/save/load card sets for project planning. Written in Javascript, using Underscore for frontend structure and Firebase for persistence. <a href='http://production.atm-notecards.divshot.io/?set=collOne' target='_blank'>Live demo</a>."
  },
  {
    title: "COMBAT",
    img: "img/app-combat.png",
    info: "Just a fun little combat game. Simple Javascript & SASS. <a href='http://production.tiy-combat.divshot.io/' target='_blank'>Live demo</a>."
  },
  {
    title: "Askqueue",
    img: "img/app-askqueue.png",
    info: "Allows multiple users to save questions and vote on whether or not the questions are worth following up on. Used at The Iron Yard as a classroom time-saver. Uses jQuery on the clientside & Firebase for persistence. <a href='http://production.tiy-atm-askqueue.divshot.io/' target='_blank'>Live demo</a>."
  },
  {
    title: "JS Calc",
    img: "img/app-calc.png",
    info: "A self-explanatory calculator. Good for calculating. Not so good at anything else. All Javascript. <a href='http://development.tiy-atm-jscalc.divshot.io/' target='_blank'>Live demo</a>."
  },
  {
    title: "NPA Helpdesk",
    img: "img/app-helpdesk.png",
    info: "A lightweight tech ticketing system to help ease the workflow of a remote IT service. Angular & Firebase hard at work. Used by Newberry Pathology Associates."
  },
  {
    title: "NPA Cases",
    img: "img/app-cases.png",
    info: "My first major deployment. A Javascript frontend & independent PHP backend, linking into the Google Calendar API to allow live reporting of scheduled autopsies. Optimized for mobile use. Depended on for 4+ years by our busy medical practice. No live demo."
  },
  {
    title: "NPA Calendar",
    img: "img/app-calendar.png",
    info: "Scheduling utility for time on/off. Uses Javascript/jQuery frontend and C# MVC backend. No live demo."
  }
]

var loadProject = function(project) {
  var projectData = portfolios[project];
  $('.portfolio-preview .title h3').html(projectData.title);
  $('.portfolio-preview').css('background-image', 'url(' + projectData.img + ')'); 
  $('.portfolio-preview .info').html(projectData.info);
}

$('.left').on('click', function() {
  currentPortfolio == 0 ? currentPortfolio = portfolios.length - 1 : currentPortfolio--;
  loadProject(currentPortfolio);
});

$('.right').on('click', function() {
  currentPortfolio == portfolios.length - 1 ? currentPortfolio = 0 : currentPortfolio++;
  loadProject(currentPortfolio);
});

});
