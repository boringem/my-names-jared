// piano note recordings from Teddy_Frost freesound.org
let amp3;
let bmp3;
let cmp3;
let dmp3;
let emp3;
let fmp3;
let gmp3;

let fft;

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

function preload() {
    amp3 = loadSound('assets/a4.mp3');
    bmp3 = loadSound('assets/b4.mp3');
    cmp3 = loadSound('assets/c4.mp3');
    dmp3 = loadSound('assets/d4.mp3');
    emp3 = loadSound('assets/e4.mp3');
    fmp3 = loadSound('assets/f4.mp3');
    gmp3 = loadSound('assets/g4.mp3');
}

  function loadCanvas() {
    if(window.innerWidth > 992) {
        line(200, 70, 1000, 70); //1
        line(200, 100, 1000, 100); //2
        line(200, 130, 1000, 130); //3
        line(200, 160, 1000, 160); //4
        line(200, 190, 1000, 190); //5
  
        stroke(30, 30, 30);
        strokeWeight(2);
        rect(250, 250, 100, 250); //1
        rect(350, 250, 100, 250); //2
        rect(450, 250, 100, 250); //3
        rect(550, 250, 100, 250); //4
        rect(650, 250, 100, 250); //5
        rect(750, 250, 100, 250); //6
        rect(850, 250, 100, 250); //7
  
        fill(30, 30, 30);
        rect(325, 250, 50, 120); //1
        rect(425, 250, 50, 120); //2
        rect(625, 250, 50, 120); //3
        rect(725, 250, 50, 120); //4
        rect(825, 250, 50, 120); //5
  
        noStroke();
        textSize(18);
        fill(60, 60, 60);
    }

    if(window.innerWidth < 992) {
        line(25, 70, 350, 70); //1
        line(25, 100, 350, 100); //2
        line(25, 130, 350, 130); //3
        line(25, 160, 350, 160); //4
        line(25, 190, 350, 190); //5
  
        strokeWeight(2);
        rect(25, 250, 45, 140); //1
        rect(70, 250, 45, 140); //2
        rect(115, 250, 45, 140); //3
        rect(160, 250, 45, 140); //4
        rect(205, 250, 45, 140); //5
        rect(250, 250, 45, 140); //6
        rect(295, 250, 45, 140); //7
  
        fill(60, 60, 60);
        stroke(60, 60, 60);
        rect(60, 250, 22, 80); //1
        rect(105, 250, 22, 80); //2
        rect(195, 250, 22, 80); //3
        rect(240, 250, 22, 80); //4
        rect(285, 250, 22, 80); //5
  
        noStroke();
        textSize(18);
        fill(60, 60, 60);    
    }
  }
function setup() {
    let testCanvas = createCanvas(windowWidth, windowHeight);
    testCanvas.parent('testContainer');
    strokeWeight(5);
    stroke(150);
    loadCanvas();
    noteValue = notesList[i];
    if(i < notesList.length) {
    i++;
    } 
    if(i >= notesList.length) {
      i=0;
    }
    afft = new p5.FFT();
}
function draw() {

    let waveform = afft.waveform(); 
    beginShape();
    strokeWeight(0.25);
    stroke(60, 60, 60);
    fill(204, 204, 255);
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(-height, -1, 5, waveform[i], 0);
        vertex(x, y);
    }
    endShape();
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
  
if(window.innerWidth > 992) {
function mouseClicked() {
    let xPos = mouseX;
    if(xPos >= 250 && xPos <= 950){
    
    // you played a c!
    if(xPos > 250 && xPos < 350) {
      clear();
      setup();
      notePlayed = 'C';
      playNote(notePlayed);
      text('You played a C', 520, 225);
      afft.setInput(cmp3);
      fill(60, 60, 60);
      ellipse(300, 215, 20, 20);
      stroke(60, 60, 60);
      line(285, 215, 315, 215);
      cmp3.play();
    }
    // you played a d!
    else if(xPos > 350 && xPos < 450) {
      clear();
      setup();
      text('You played a D', 520, 225);
      afft.setInput(dmp3);
      fill(60, 60, 60);
      ellipse(400, 203, 20, 20);
      dmp3.play();
    }
  
    // you played an e!
    if(xPos > 450 && xPos < 550) {
      clear();
      setup();
      text('You played an E!', 520, 225);
      afft.setInput(emp3);
      fill(60, 60, 60);
      ellipse(500, 190, 20, 20);
      emp3.play();
    }
  
    // you played an f!
    if(xPos > 550 && xPos < 650) {
      clear();
      setup();
      text('You played an F!', 520, 225);
      afft.setInput(fmp3);
      fill(60, 60, 60);
      ellipse(600, 175, 20, 20);
      fmp3.play();
    }
  
    // you played a g! 
    if(xPos > 650 && xPos < 750) {
      clear();
      setup();
      text('You played a G!', 520, 225);
      afft.setInput(gmp3);
      fill(60, 60, 60);
      ellipse(700, 160, 20, 20);
      gmp3.play();
    }
  
    // you played an a!
    if(xPos > 750 && xPos < 850) {
      clear();
      setup();
      text('You played an A!', 520, 225);
      afft.setInput(amp3);
      fill(60, 60, 60);
      ellipse(800, 145, 20, 20);
      amp3.play();
    }
  
    // you played a b!
    if(xPos > 850 && xPos < 950) {
      clear();
      setup();
      text('You played a B!', 520, 225);
      afft.setInput(bmp3);
      fill(60, 60, 60);
      ellipse(900, 130, 20, 20);
      bmp3.play();
    }
  }
  }
}

if(window.innerWidth < 992) {
    function touchStarted() {
        setup();
        let display = mouseX;
       // text(display, 5, 10);

        if(display > 25 && display < 70) {
            text('You played a C!', 120, 55);
            fill(60, 60, 60);
            ellipse(45, 215, 15, 15);
            stroke(60, 60, 60);
            line(35, 215, 55, 215);
            cmp3.play();
        }
        
        if(display > 70 && display < 115) {
            text('You played a D!', 120, 55);
            fill(60, 60, 60);
            ellipse(85, 213, 15, 15);
            dmp3.play();
        }

        if(display > 115 && display < 160) {
            text('You played an E!', 120, 55);
            fill(60, 60, 60);
            ellipse(130, 190, 15, 15);
            emp3.play();
        }

        if(display > 160 && display < 205) {
            text('You played an F!', 120, 55);
            fill(60, 60, 60);
            ellipse(180, 175, 15, 15);
            fmp3.play();
        }

        if(display > 205 && display < 250) {
            text('You played a G!', 120, 55);
            fill(60, 60, 60);
            ellipse(220, 160, 15, 15);
            gmp3.play();
        }

        if(display > 250 && display < 295) {
            text('You played an A!', 120, 55);
            fill(60, 60, 60);
            ellipse(260, 145, 15, 15);
            amp3.play();
        }

        if(display > 295 && display < 340) {
            text('You played a B!', 120, 55);
            fill(60, 60, 60);
            ellipse(320, 130, 15, 15);
            bmp3.play();
        }
        }
    }

