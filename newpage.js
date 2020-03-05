$(document).ready(() => {
  $("#explr-btn").on("click", e => {
    e.preventDefault();
    $("#header-content").hide();
    // console.log("clicky click click");
    $(".about-container").append(
      $(` <div class="about-content"> <div class="container">
    <img class="glitch-img"src="assets/images/neon image.jpg"></div>
    <div class="about-text">I am an IT professional with a diverse background in Identity Access
        Management and Full Stack Development. I am currently employed as an IAM Support Specialist at Capital One.
        I have a strong skillset in Python, SQL, and AWS, as well as ServiceNow, Active Directory, and Sailpoint.
      </div>        <div class="portfolio-button-container">
      <a class="animated-arrow">
        <span class="the-arrow -left">
          <span class="shaft"></span>
        </span>
        <span class="main">
          <span class="text portfolio-btn-text" id="portfolio-btn">
            P O R T F O L I O
          </span>
          <span class="the-arrow -right">
            <span class="shaft"></span>
          </span> </span>
        </a>
    </div>

`)
    );
    glitchIT();
  });

  $(document).on("click", "#portfolio-btn", e => {
    e.preventDefault();
    $(".about-container").hide();
    console.log("portfolio btn");
    $(".portfolio-container").append(`
<div class="card-cont"></div>
  `);
    appendCards();
  });

  $(document).on("click", "#home-btn", e => {
    e.preventDefault();
    location.reload(true);
  });

  function glitchIT() {
    $(".glitch-img").mgGlitch({
      // set 'true' to stop the plugin
      destroy: false,
      // set 'false' to stop glitching
      glitch: true,
      // set 'false' to stop scaling
      scale: true,
      // set 'false' to stop glitch blending
      blend: true,
      // select blend mode type
      blendModeType: "hue",
      // set min time for glitch 1 elem
      glitch1TimeMin: 200,
      // set max time for glitch 1 elem
      glitch1TimeMax: 400,
      // set min time for glitch 2 elem
      glitch2TimeMin: 10,
      // set max time for glitch 2 elem
      glitch2TimeMax: 100
    });
  }
});

function appendCards() {
  var titleArray = [
    "GIF TASTIC",
    "GRAND CENTRAL STATION",
    "MOVIE HANGMAN",
    "MUPPET TRIVIA",
    "SPACE CATS",
    "WEATHER-FY",
    "LIRIBOT"
  ];

  var urlArray = [
    "https://akunz19.github.io/giphy-search/",
    "https://akunz19.github.io/grandcentralstation/",
    "https://akunz19.github.io/Hangman-Game/",
    "https://akunz19.github.io/trivia-game/",
    "https://akunz19.github.io/Cat-RPG/",
    "https://akunz19.github.io/Project-1/",
    "https://akunz19.github.io/LiriBot/"
  ];
  // var imgArray  = ["'./assets/images/giphy search.png'", "assets/images/grand central station.png", "assets/images/hangman game.png", "assets/images/muppet quiz.png", "assets/images/space cats game.png", "assets/images/weatherfy.png", "assets/images/js-icon-13.png"];
  // $(".portfolio-container").prepend(`        <div id="portfolio-header">
  // <h1
  //   class="glitch"
  //   data-text="
  // portfolio"
  // >
  //   portfolio
  // </h1>
  // </div>`);
  for (var i = 0; i < titleArray.length; i++) {
    $(".card-cont").append(`    
  <div class="triangle-cont">
  <div id="top" class="triangle-up"></div>
  <div class="triangle-up-behind"></div>
  <span class="card-title glitch" data-text="${titleArray[i]}" style="font-size: 2em;z-index: 10;text-align: center; line-spacing: .6em; position: absolute"><a href="${urlArray[i]}" style="text-decoration:none; color: whitesmoke;">${titleArray[i]}</span>
  </div>`);
  }
  $(".card-cont").append(`<div class="home-button-container">
  <a class="animated-arrow">
    <span class="the-arrow -left" style="margin-left:66%;">
      <span class="shaft"></span>
    </span>
    <span class="main">
      <span class="text portfolio-btn-text" id="home-btn">
        H O M E
      </span>
      <span class="the-arrow -right">
        <span class="shaft"></span>
      </span> </span>
    </a>
</div>`);
}
