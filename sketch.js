// piano note recordings from Teddy_Frost freesound.org
let amp3;
let bmp3;
let cmp3;
let dmp3;
let emp3;
let fmp3;
let gmp3;
let fft;
function preload() {
    amp3 = loadSound('a4.mp3');
    bmp3 = loadSound('b4.mp3');
    cmp3 = loadSound('c4.mp3');
    dmp3 = loadSound('d4.mp3');
    emp3 = loadSound('e4.mp3');
    fmp3 = loadSound('f4.mp3');
    gmp3 = loadSound('g4.mp3');
}
let notesList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
  ];
  let i = 0;
  let noteValue; 
  let notePlayed;
  function loadVariables() {
    line(200, 80, 1000, 80); //1
    line(200, 110, 1000, 110); //2
    line(200, 140, 1000, 140); //3
    line(200, 170, 1000, 170); //4
    line(200, 200, 1000, 200); //5
  
    stroke(0);
    strokeWeight(2);
    rect(250, 300, 100, 300); //1
    rect(350, 300, 100, 300); //2
    rect(450, 300, 100, 300); //3
    rect(550, 300, 100, 300); //4
    rect(650, 300, 100, 300); //5
    rect(750, 300, 100, 300); //6
    rect(850, 300, 100, 300); //7
  
    fill(0);
    rect(325, 300, 50, 150); //1
    rect(425, 300, 50, 150); //2
    rect(625, 300, 50, 150); //3
    rect(725, 300, 50, 150); //4
    rect(825, 300, 50, 150); //5
  
    noStroke();
    textSize(18);
    fill(0, 102, 153);
    text('hey whats up my name is jared im 19 and i never fuckin learned how to read (music)', 30, 30);
    text('C', 293, 550); //C
    text('D', 393, 550); //D
    text('E', 493, 550); //E
    text('F', 593, 550); //F
    text('G', 693, 550); //G
    text('A', 793, 550); //A
    text('B', 893, 550); //B
  }
function setup() {
    createCanvas(1200, 700);
    strokeWeight(5);
    stroke(150);
    loadVariables();
    console.log(notesList[i]);
    text('lets get started! press a key to see it on the staff', 30, 50);
    noteValue = notesList[i];
    console.log(noteValue);
    if(i < notesList.length) {
    i++;
    } 
    if(i >= notesList.length) {
      i=0;
    }
    afft = new p5.FFT();
    afft.setInput(amp3);
}

function playNote(value) {
    if(noteValue = value) {
      console.log('success');
    } 
    if(noteValue != value) { 
      console.log('fail');
      alert('Fail');
    }
  }
  

function mouseClicked() {
    let xPos = mouseX;
    if(xPos >= 250 && xPos <= 950){
  
    // you played a c!
    if(xPos > 250 && xPos < 350) {
      clear();
      setup();
      notePlayed = 'C';
      playNote(notePlayed);
      console.log('You just played a ' + notePlayed);
      text('You played a C', 500, 250);
      fill(0, 0, 255);
      ellipse(300, 225, 20, 20);
      stroke(0, 0, 255);
      line(285, 225, 315, 225);
      cmp3.play();
    }
    // you played a d!
    else if(xPos > 350 && xPos < 450) {
      clear();
      setup();
      notePlayed = 'E';
      let fakeValue = 'D';
      playNote(fakeValue);
      console.log('You just played a ' + notePlayed);
      text('You played a D', 500, 250);
      fill(0, 0, 255);
      ellipse(400, 213, 20, 20);
      dmp3.play();
    }
  
    // you played an e!
    if(xPos > 450 && xPos < 550) {
      clear();
      setup();
      text('You played an E!', 500, 250);
      fill(0, 0, 255);
      ellipse(500, 200, 20, 20);
      emp3.play();
    }
  
    // you played an f!
    if(xPos > 550 && xPos < 650) {
      clear();
      setup();
      text('You played an F!', 500, 250);
      fill(0, 0, 255);
      ellipse(600, 185, 20, 20);
      fmp3.play();
    }
  
    // you played a g! 
    if(xPos > 650 && xPos < 750) {
      clear();
      setup();
      text('You played a G!', 500, 250);
      fill(0, 0, 255);
      ellipse(700, 170, 20, 20);
      gmp3.play();
    }
  
    // you played an a!
    if(xPos > 750 && xPos < 850) {
      clear();
      setup();
      text('You played an A!', 500, 250);
      fill(0, 0, 255);
      ellipse(800, 155, 20, 20);
      amp3.play();
    }
  
    // you played a b!
    if(xPos > 850 && xPos < 950) {
      clear();
      setup();
      text('You played a B!', 500, 250);
      fill(0, 0, 255);
      ellipse(900, 140, 20, 20);
      bmp3.play();
    }
  }
  }