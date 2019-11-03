let c = $("#c");
let cs = $("#cs");
let d = $("#d");
let ef = $("#ef");
let e = $("#e");
let f = $("#f");
let fs = $("#fs");
let g = $("#g");
let gs = $("#gs");
let a = $("#a");
let bf = $("#bf");
let b = $("#b");

$(c).click(function() {
    $(c).addClass('green');
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/assets/c4.mp3');

    audioElement.play();
})