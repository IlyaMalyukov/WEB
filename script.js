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
      console.log(pos)
    break;
    case 1:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'block';
      homeThird.style.display = 'none';
      homeFourth.style.display = 'none';
      console.log(pos)  
    break;
    case 2:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'none';
      homeThird.style.display = 'block';
      homeFourth.style.display = 'none';
      console.log(pos)  
    break;
    case 3:
      homeFirst.style.display = 'none';
      homeSecond.style.display = 'none';
      homeThird.style.display = 'none';
      homeFourth.style.display = 'block';
      console.log(pos)  
    break;
  }
  pos++;

};

// JQuery

function animation(){
  $(imgs).fadeOut(2000).fadeIn(2000);
};

// Barba.JS

barba.init({
  transitions: [{
    once() {

    setInterval(() => slideShow(), 4000) 
    setInterval("animation()", 2000);
    }
  }]
});
