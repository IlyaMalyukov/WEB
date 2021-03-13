let pos = 1;

function slideShow() {
  
  if(pos >= 4) {
    pos = 0;
  };

  switch(pos) {
    case 0:
      homeFirst.style.display = 'block';
      homeSecond.style.display = 'none';
      homeThird.style.display = 'none';
      homeFourth.style.display = 'none';
    break;
    case 1:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'block';
      homeThird.style.display = 'none';
      homeFourth.style.display = 'none'; 
    break;
    case 2:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'none';
      homeThird.style.display = 'block';
      homeFourth.style.display = 'none';  
    break;
    case 3:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'none';
      homeThird.style.display = 'none';
      homeFourth.style.display = 'block'; 
    break;
  }
  pos++;

};

// JQuery Fade

function animation(){
  $(imgs).fadeOut(2000).fadeIn(2000);
};

// Jquery Animate

function moveRight() {
  $(imgR).animate({
    "margin-left": "+=10px", "margin-top": "+=10px"
  }, 1200, "linear");

  $(imgL).animate({
    "margin-right": "+=10px", "margin-top": "+=10px"
  }, 1200, "linear");
};

function moveLeft() {
  $(imgR).animate({
    "margin-left": "-=10px", "margin-top": "+=10px"
  }, 1200, "linear");

  $(imgL).animate({
    "margin-right": "-=10px", "margin-top": "+=10px"
  }, 1200, "linear");
};

function moveTop() {
  $(imgR).animate({
    "margin-left": "-=10px", "margin-top": "-=10px"
  }, 1200, "linear");

  $(imgL).animate({
    "margin-right": "-=10px", "margin-top": "-=10px"
  }, 1200, "linear");
};

function moveHome() {
  $(imgR).animate({
    "margin-left": "+=10px", "margin-top": "-=10px"
  }, 1200, "linear");

  $(imgL).animate({
    "margin-right": "+=10px", "margin-top": "-=10px"
  }, 1200, "linear");
}

function circleRight() {
  setTimeout(moveRight());
  setTimeout(moveLeft());
  setTimeout(moveTop());
  setTimeout(moveHome());
};

/*
// Barba.JS

barba.init({
  transitions: [{
    once() {

    setInterval(() => slideShow(), 4000); 
    setInterval("animation()", 2000);

    // Circle

    setInterval("circleRight()");
    

    }
  }]
});

*/
